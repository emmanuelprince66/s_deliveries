import React, { useState , useEffect} from "react";
import search from "../images/search.svg";
import aOne from "../images/a-1.png";
import aTwo from "../images/a-2.png";
import aThree from "../images/a-3.png";
import CustomButton from "../components/CustomButton";
import Divider from "@mui/material/Divider";
import { InputAdornment, Modal, TextField } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";
import line from "../images/line.svg";
import { BaseAxios } from "../helpers/axiosInstance";
import { toast, ToastContainer } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Box, CircularProgress } from "@mui/material";
import SendWord from "../components/SendWord";



const UserStart = () => {
  const navigate = useNavigate();

 const [generalData, setGeneralData] = useState(null);
 const [searchTerm, setSearchTerm] = useState("");
 const [emptySearch, setEmptySearch] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
const [isOpen , setIsOpen] = useState(false)


const[showNotExist , setShowNotExist] = useState(false)

const closeModal = () => setIsOpen(false)
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
   const searchMutatation = useMutation({
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
         setShowNotExist(true)
         notifyError(error?.response?.data?.message);
         throw error;
       }
     },
     onSuccess: (data) => {
       setShowSpinner(false);
       console.log(data);
       const val = data.existingWord;
       console.log(val);
       setGeneralData([val]);
       //  set generalData to the response comming from the backend
     },
     onError: (error) => {
       setShowSpinner(false);
       console.error("An error occurred:", error);
     },
   });
  // Fetch all data starts

  const fetchData = async () => {
    try {
      const response = await BaseAxios.get("all-existing-words");
      console.log(response);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  };

  // Use the useQuery hook to manage the data
  const { isLoading, error, data } = useQuery({
    queryKey: ["wordsData"],
    queryFn: fetchData,
    refetchInterval: 5000,
  });
  
    const handleSearchChange = (value) => {
      setSearchTerm(value);
      setEmptySearch(false);
      setShowNotExist(false)
      
    };

const handleClearFields = () => {
setSearchTerm("")
setShowNotExist(false)
}


const handleSubmit = () => {
  if (searchTerm !== "") {
    const payLoad = {
      word: searchTerm || "",
    };
    searchMutatation.mutate(payLoad);
    setShowSpinner(true);
  } else {
    setEmptySearch(true);
  }
};
useEffect(() => {
  let filteredItems = data?.words;
  
  console.log(filteredItems)

  // Filter by name (if searchTerm exists)
  if (searchTerm) {
    filteredItems = filteredItems.filter((item) => {
      return item.word.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
  
    filteredItems = filteredItems?.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    
     filteredItems = filteredItems?.sort((a, b) => {
       return a.word.localeCompare(b.word);
     });

  setGeneralData(filteredItems);
}, [data, searchTerm]);

  return (
    <div className="w-full bg-[#171414] h-screen p-2 md:p-1 relative">
      <div className="w-[100%] md:w-[90%] lg:w-[60%] mx-auto mb-5 md:mb-[1%] mt-1 flex justify-end ">
        <button
          onClick={handleLogout}
          className=" bg-[#EB2529] py-2 px-4 font-dm-sans  rounded-md  hover:bg-red-400 text-white focus-visible:outline-red-600 "
        >
          Logout
        </button>
      </div>

      <div className="   w-[100%] md:w-[82.5%] lg:w-[60.5%] bg-[#000] relative rounded-2xl mx-auto mb-4 p-4 pb-4 md:pb-9">
        <div className="flex flex-col w-full   items-center justify-center ">
          <img
            src={aOne}
            alt="a-1"
            className=" object-contain w-[100px] h-[30px] mb-9 mt-[3rem]"
          />
          <div className="absolute w-[30px] h-[30px]  lg:w-[120px] lg:h-[120px]  md:w-[80px] md:h-[80px] right-[-1.5%] bottom-[4.5rem] md:bottom-20">
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
                disabled={searchMutatation.isLoading || showSpinner}
                className="absolute bg-[#DB363A] p-3 px-4 py-2  text-[14px] font-dm-sans justify-center text-white hover:text-black cursor-pointer m-2 rounded-lg inset-y-0 right-0 flex items-center  "
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

      <div className="w-[100%] md:w-[82.5%] lg:w-[52.5%] mx-auto flex flex-col items-start gap-3  overflow-y-scroll max-h-[55vh] md:max-h-[55vh] lg:max-h-[50vh]">
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
        ) : Array.isArray(generalData) && generalData.length === 0 ? (
          !showNotExist ? (
            <p className="font-dm-sans text-center w-full text-white text-[15px]">
              Click GO to Search For Word In Our Database!
            </p>
          ) : (
            <div className="w-full flex flex-col items-center gap-4 justify-center">
              <p className="font-dm-sans text-white text-center text-[15px] leading-5">
                It seems the word you are looking for is not in our database
                <br />
                would you like to notify Admin to add it?
              </p>{" "}
              <div className="flex gap-4 w-1/2 items-center">
                <CustomButton
                  onClick={() => setIsOpen((prev) => !prev)}
                  text="YES"
                  style="bg-green-500 w-full flex justify-center items-center text-white font-dm-sans  text-[20px] h-[50px] hover:bg-green-300  focus-visible:outline-red-600"
                />
                <CustomButton
                  onClick={handleClearFields}
                  text="NO"
                  style="bg-[#EB2529] w-full flex justify-center items-center text-white font-dm-sans  text-[20px] h-[50px] hover:bg-red-400  focus-visible:outline-red-600"
                />
              </div>
            </div>
          )
        ) : (
          // Display termArray items if not null or empty
          generalData?.map((term) => (
            <div
              className="w-full flex flex-col items-start gap-5  border-b border-[#262626] pb-3 mb-4"
              key={term?.id}
            >
              <h2 className="rounded-md p-2 font-bold uppercase text-[20x] font-dm-sans text-[#B4B4B4] bg-[#262525]">
                {term?.word}
              </h2>

              <p className="text-[16px] leading-5 pb-3  font-dm-sans text-[#fff]">
                {term.meaning}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="absolute w-[30px] h-[30px]  lg:w-[120px] lg:h-[120px]  md:w-[80px] md:h-[80px] left-0 bottom-5 md:bottom-[7rem]">
        <img src={aTwo} alt="a-w" className="object-contain" />
      </div>

      <ToastContainer
        theme="dark"
        toastStyle={{ background: "#333", color: "#fff" }}
      />

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
  );
};

export default UserStart;
