import React, { useState, useEffect } from "react";
import search from "../images/search.svg";
import uploadIcon from "../images/uploadIcon.svg";
import aOne from "../images/a-1.png";
import aTwo from "../images/a-2.png";
import aThree from "../images/a-3.png";
import CustomButton from "../components/CustomButton";
import Divider from "@mui/material/Divider";
import { InputAdornment, Modal, TextField } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import line from "../images/line.svg";
import { BaseAxios } from "../helpers/axiosInstance";
import { toast, ToastContainer } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Box, CircularProgress } from "@mui/material";
import SendWord from "../components/SendWord";
import ShareWord from "../components/ShareWord";

const UserStart = () => {
  const navigate = useNavigate();

  const [generalData, setGeneralData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [emptySearch, setEmptySearch] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showGoSpinner, setShowGoSpinner] = useState(false);
  const [showNotExist, setShowNotExist] = useState(false);
  const [shareOpen , setShareOpen] = useState(false)
  const [shareContent , setShareContent] = useState(null)
  const closeModal = () => setIsOpen(false);
  const closeShareModal = () => setShareOpen(false);

  const handleLogout = () => {
    Cookies.remove("authToken");
    Cookies.remove("refreshToken");
    Cookies.remove("role");

    navigate("/login-user");
  };

  const notifyError = (msg) => {
    toast.error(msg, {
      autoClose: 6000, // Time in milliseconds
    });
  };

  const searchMutation = useMutation({
    mutationFn: async (payLoad) => {
      try {
        const response = await BaseAxios({
          url: "search-word",
          method: "POST",
          data: payLoad,
        });

        console.log("Response:", response);

        if (!response || !response?.data) {
          throw new Error("Invalid response received");
        }

        if (response?.status !== 200) {
          setShowSpinner(false);
          throw new Error("Request failed with status: " + response.status);
        }

        return response.data;
      } catch (error) {
        setShowSpinner(false);
        setShowNotExist(true);
        setShowGoSpinner(false);
        throw error;
      }
    },
    onSuccess: (data) => {
      setShowGoSpinner(false);
      setShowSpinner(false);
      console.log(data);
      const val = data.existingWord;
      console.log(val);
      setGeneralData([val]);
    },
    onError: (error) => {
      setShowSpinner(false);
      console.error("An error occurred:", error);
    },
  });
  
  const handleOpenShareModal = (term) => {
setShareContent(term)
setShareOpen(true)
}


  const fetchData = async () => {
    try {
      const response = await BaseAxios.get("all-existing-words");
      console.log(response);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["wordsData"],
    queryFn: fetchData,
    refetchInterval: 5000,
  });

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setEmptySearch(false);
    setShowNotExist(false);
  };

  const handleClearFields = () => {
    setSearchTerm("");
    setShowNotExist(false);
  };

  const handleSubmit = () => {
    if (searchTerm !== "") {
      const payLoad = {
        word: searchTerm || "",
      };

      searchMutation.mutate(payLoad);
      setShowGoSpinner(true);
      setShowSpinner(true);
    } else {
      setEmptySearch(true);
    }
  };

  useEffect(() => {
    let filteredItems = data?.words;

    console.log(filteredItems);

    if (searchTerm) {
      filteredItems = filteredItems.filter((item) => {
        return item.word.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }

    filteredItems = filteredItems?.sort((a, b) => {
      return a.word.localeCompare(b.word);
    });

    setGeneralData(filteredItems);
  }, [data, searchTerm]);

  useEffect(() => {
    if (
      Array.isArray(generalData) &&
      generalData.length === 0 &&
      searchTerm !== ""
    ) {
      const payLoad = {
        word: searchTerm || "",
      };
      searchMutation.mutate(payLoad);
      setShowGoSpinner(true);
      console.log("wee");
    }
  }, [searchTerm]);





  return (
    <div className="w-full bg-[#171414] h-fit p-2 md:p-1 relative">
      <div className="w-full h-[100vh] overflow-y-auto  mx-auto   ">
        <div className="w-[100%] md:w-full lg:w-full flex flex-col border border-[#171414] mx-auto items-center bg-[#171414]  sticky top-0 ">
          <div className=" w-full md:w-[82.5%] lg:w-[60.5%] mb-0  mt-0 py-2 flex justify-end ">
            <div className="w-full md:w-[90%] lg:w-[100%]    mb-5 md:mb-[1%] mt-1 flex justify-end">
              <button
                onClick={handleLogout}
                className=" bg-[#EB2529] py-2 px-4 font-dm-sans  rounded-md  hover:bg-red-400 text-white focus-visible:outline-red-600 "
              >
                Logout
              </button>
            </div>
          </div>

          <div className="   w-full  md:w-[82.5%] lg:w-[60.5%] bg-[#000] relative rounded-2xl mx-auto mb-4 p-4 pb-4 md:pb-9 ">
            <div className="flex flex-col w-full   items-center justify-center ">
              <img
                src={aOne}
                alt="a-1"
                className=" object-contain w-[100px] h-[30px] mb-9 mt-[3rem]"
              />
              <div className="absolute w-[75px] h-[75px]  lg:w-[100px] lg:h-[100px]  md:w-[80px] md:h-[80px] right-0 top-0 md:bottom-20">
                <img src={aThree} alt="a-3" className="object-contain" />
              </div>
              <form className="w-[100%] md:w-[90%] lg:w-[90%] ">
                <div className="relative rounded-2xl bg-[#ffefef] w-full">
                  <TextField
                    value={searchTerm}
                    onChange={(e) => {
                      const value = e.target.value;
                      handleSearchChange(value); // Call handleSearchChange with the value
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          border: "none", // Remove border on focus
                          boxShadow: "none", // Remove box-shadow on focus
                          outline: "none",
                        },
                      },
                      "& .MuiInputBase-input": {
                        paddingTop: "0.9em", // Adjust top padding of the input text
                        paddingBottom: "0.9em", // Adjust bottom padding of the input text
                      },
                      "& .MuiInputLabel-root": {
                        marginTop: "0.5em", // Adjust top margin of the label
                      },
                    }}
                    type="text"
                    name="word"
                    className="rounded-2xl  outline-none border-none bg-white  w-full"
                    placeholder=" Type something here..."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchRoundedIcon sx={{ color: "#B4B4B4" }} />
                          <img src={line} alt="" className="h-7 ml-3" />
                          &nbsp;&nbsp;
                        </InputAdornment>
                      ),
                    }}
                  />

                  <button
                    onClick={handleSubmit}
                    disabled={searchMutation.isLoading || showSpinner}
                    className="absolute bg-[#DB363A] p-3 px-4 py-2  text-[14px] font-dm-sans justify-center text-white hover:text-white cursor-pointer m-2 rounded-lg inset-y-0 right-0 flex items-center  "
                  >
                    {showSpinner ? (
                      <CircularProgress size="1rem" sx={{ color: "#fff" }} />
                    ) : (
                      "GO!"
                    )}
                  </button>
                </div>
                {emptySearch && (
                  <span className="text-red-500 text-xs mt-[-5px]">
                    Input cannot be empty!
                  </span>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <div className="relative w-full md:w-[82.5%] lg:w-[52.5%] overflow-y-auto ">
            <div className="absolute bottom-0 w-full flex flex-col items-start gap-3 overflow-y-auto max-h-[55vh] md:max-h-[55vh] lg:max-h-[40vh]">
              {/* Your content here */}
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-[82.5%] lg:w-[52.5%] mx-auto flex flex-col items-start gap-3 pr-4  overflow-y-scroll h-[60vh]  lg:max-h-[70vh] md:max-h-[70vh] ">
          {isLoading ? (
            <div className="w-full flex items-center h-1/2 justify-center">
              <CircularProgress
                size="3.2rem"
                sx={{
                  color: "#EB2529",
                  fontSize: "4rem",
                }}
              />
            </div>
          ) : Array.isArray(generalData) &&
            generalData.length === 0 &&
            !showNotExist ? (
            <div className="w-full flex items-center h-1/2 justify-center">
              <p className="font-dm-sans text-center w-full text-white text-[15px]">
                No content at the moment.
              </p>
            </div>
          ) : Array.isArray(generalData) && generalData.length === 0 ? (
            !showNotExist ? (
              <div className="w-full flex-col flex items-center justify-end  ">
                <p className="font-dm-sans text-center w-full text-white text-[15px]">
                  Searching our database for word...
                </p>
              </div>
            ) : (
              <div className="w-full flex flex-col items-center gap-4 justify-center">
                <p className="font-dm-sans text-white text-center text-[15px] leading-5">
                  It seems what you are looking
                  <br /> for is not in our database.
                </p>{" "}
                <p className="font-dm-sans text-white text-center text-[15px] leading-5">
                  Would you like to notify Admin to add it?
                </p>{" "}
                <div className="flex gap-4 w-1/2 items-center">
                  <CustomButton
                    text="YES"
                    style="bg-[#DB363A] w-full flex justify-center items-center text-white font-dm-sans  text-[20px] h-[55px] hover:bg-red-400  focus-visible:outline-red-600"
                    onClick={() => setIsOpen((prev) => !prev)}
                  />
                  <CustomButton
                    onClick={handleClearFields}
                    text="NO"
                    style="bg-transparent w-full flex justify-center  items-center h-[55px] hover:text-[#DB363A] text-[#A1A1A1] font-dm-sans  border border-[#444444] w-full  focus-visible:outline-red-100"
                  />
                </div>
              </div>
            )
          ) : (
            generalData?.map((term) => (
              <div
                className="w-[89%] mx-auto  md:w-full lg:w-full   flex flex-col items-start gap-5  border-b border-[#262626] pb-3 mb-4 mt-3 "
                key={term?.id}
              >
                <div className="flex justify-between items-start  w-full">
                  <div className="flex flex-col gap-4 items-start ">
                    <h2 className="rounded-md p-2 font-bold uppercase text-[15px] md:text-[20x] lg:text-[20px] font-dm-sans text-[#B4B4B4] bg-[#262525]">
                      {term?.word}
                    </h2>

                    <p className=" text-[13px] lg:text-[16px] md:text-[16px] leading-5 pb-3  font-dm-sans text-[#fff]">
                      {term.meaning}
                    </p>
                  </div>
                  <div
                    onClick={() => handleOpenShareModal(term)}
                    className=" py-2 px-4 font-dm-sans  rounded-md cursor-pointer flex gap-1 items-center "
                  >
                    <img
                      src={uploadIcon}
                      alt="share-icon"
                      className=" w-[20px] h-[20px]"
                    />
                    <p className=" text-[12px] text-[#575656]">
                      Share
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <ToastContainer
          theme="dark"
          toastStyle={{ background: "#333", color: "#fff" }}
        />
        {/* share modal */}
        <Modal
          open={shareOpen}
          onClose={closeShareModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          PaperProps={{
            sx: {
              border: "none", // Remove the border
              boxShadow: "none", // Remove the box shadow
            },
          }}
        >
          <ShareWord
            word={shareContent?.word}
            meaning={shareContent?.meaning}
          />
        </Modal>
        {/* edit word */}
        <Modal
          open={isOpen}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          PaperProps={{
            sx: {
              border: "none", // Remove the border
              boxShadow: "none", // Remove the box shadow
            },
          }}
        >
          <SendWord
            searchTerm={searchTerm || ""}
            closeModal={closeModal}
            setSearchTerm={setSearchTerm}
          />
        </Modal>
      </div>
    </div>
  );
};

export default UserStart;
