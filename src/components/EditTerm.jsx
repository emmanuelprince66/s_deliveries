import React from "react";
import arrw from "../images/arrw.svg";
import del from "../images/del.svg";
import edit from "../images/edit.svg";
import { Box, CircularProgress } from "@mui/material";

import { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import { useForm } from "react-hook-form";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import line from "../images/line.svg";
import Spinner from "../utils/Spinner";
import { toast, ToastContainer } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";

import { InputAdornment, TextField, Modal } from "@mui/material";
import EditCom from "./EditCom";
import { BaseAxios } from "../helpers/axiosInstance";
import DelCom from "./DelCom";

const EditTerm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [generalData, setGeneralData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [emptySearch, setEmptySearch] = useState(false);
  const [editData, setEditData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);

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

  const openModal = (item) => {
    setIsOpen(true);
    setEditData(item);
  };

  const closeModal = () => setIsOpen(false);

  const openDelModal = (delData) => {
    setIsDelOpen(true);
    setDeleteData(delData);
  };

  console.log(deleteData);

  const closeDelModal = () => setIsDelOpen(false);

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
    refetchInterval: 3000,
  });

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setEmptySearch(false);
  };

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

    // Filter by name (if searchTerm exists)
    if (searchTerm) {
      filteredItems = filteredItems.filter((item) => {
        return item.word.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }

    //  filteredItems = filteredItems?.sort((a, b) => {
    //    return new Date(b.createdAt) - new Date(a.createdAt);
    //  });

    filteredItems = filteredItems?.sort((a, b) => {
      return a.word.localeCompare(b.word);
    });

    setGeneralData(filteredItems);
  }, [data, searchTerm]);

  // Fetch all data  ends

  return (
    <div className="flex flex-col items-start justify-center gap-4 w-[90%] md-w-[80%]   mx-auto sm:mx-0">
      <form action="" className="w-[100%]  ">
        <div className="relative rounded-2xl bg-[#ffefef] w-full">
          <TextField
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
                paddingTop: "0.8em", // Adjust top padding of the input text
                paddingBottom: "0.8em", // Adjust bottom padding of the input text
              },
              "& .MuiInputLabel-root": {
                marginTop: "0.5em", // Adjust top margin of the label
              },
            }}
            type="text"
            name="email"
            className="rounded-2xl  outline-none border-none bg-white  w-full"
            placeholder="Type something here..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon sx={{ color: "#B4B4B4" }} />
                  <img src={line} alt="" className="h-7 ml-3" />
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

      <div className="h-[50vh] overflow-y-auto border-r border-r-[3px] border-[#262626] w-full">
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
          <p className="text-white font-satoshi  mt-3 text-center w-full">
            Click GO to Search For Word In Our Database!
          </p>
        ) : (
          // Display termArray items if not null or empty
          generalData?.map((term) => (
            <div
              className="w-full flex flex-col items-start gap-5  border-b border-[#262626] pb-3 mb-4 mt-3"
              key={term?.id}
            >
              <div className="flex items-center w-full justify-between">
                <p className="rounded-md p-2 flex flex-wrap font-bold uppercase max-w-[200px] md:max-w-full lg:max-w-full  text-[15px] md:text-[20x] lg:text-[20px] font-dm-sans text-[#B4B4B4] bg-[#262525]">
                  {term?.word}
                </p>

                <div className="flex gap-2 items-center">
                  <div
                    onClick={() => openModal(term)}
                    className="p-2 bg-[#262525] rounded-md cursor-pointer flex items-center justify-center"
                  >
                    <img
                      src={edit}
                      alt="edit-img"
                      className="object-contain h-[14px] w-[14px]"
                    />
                  </div>
                  <div
                    onClick={() => openDelModal(term)}
                    className="p-2 bg-[#262525] rounded-md  cursor-pointer flex items-center justify-center"
                  >
                    <img
                      src={del}
                      alt="del-img"
                      className="object-contain h-[14px] w-[14px]"
                    />
                  </div>
                </div>
              </div>

              <p className=" text-[13px]  lg:text-[16px] md:text-[16px] leading-5 pb-3 font-dm-sans text-[#fff]">
                {term.meaning}
              </p>
            </div>
          ))
        )}
      </div>

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
        <EditCom closeModal={closeModal} editData={editData || []} />
      </Modal>
      {/* edit word end */}
      {/* delete word */}
      <Modal
        open={isDelOpen}
        onClose={closeDelModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{
          sx: {
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          },
        }}
      >
        <DelCom deleteData={deleteData || ""} closeDelModal={closeDelModal} />
      </Modal>
      {/* delete word end */}

      <ToastContainer
        theme="dark"
        toastStyle={{ background: "#333", color: "#fff" }}
      />
    </div>
  );
};

export default EditTerm;
