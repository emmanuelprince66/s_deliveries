import React from "react";
import arrw from "../images/arrw.svg";
import del from "../images/del.svg";
import edit from "../images/edit.svg";
import { Box, CircularProgress } from "@mui/material";

import { useState , useEffect } from "react";
import CustomButton from "./CustomButton";
import { useForm } from "react-hook-form";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import line from "../images/line.svg";
import Spinner from "../utils/Spinner";
import { toast, ToastContainer } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";


import { InputAdornment, TextField , Modal } from "@mui/material";
import EditCom from "./EditCom";
import { BaseAxios } from "../helpers/axiosInstance";


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    width: "745px",
    bgcolor: "background.paper",
    p: 3,
  };

const EditTerm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [generalData , setGeneralData] = useState(null)
  const [searchTerm , setSearchTerm] = useState("")
  const [emptySearch , setEmptySearch] = useState(false);
  const [editData , setEditData] = useState(null)
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
           url: "upload-new-word",
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
       
      //  set generalData to the response comming from the backend
     },
     onError: (error) => {
       setShowSpinner(false);
       console.error("An error occurred:", error);
     },
   });
   
   const deleteWordsMutation = useMutation({
     mutationFn: async (payLoad) => {
       try {
         const response = await BaseAxios({
           url: "upload-new-word",
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
     },
     onError: (error) => {
       setShowSpinner(false);
       console.error("An error occurred:", error);
     },
   });
   
   const handleDeleteWord = () => {
   console.log("delete")
  //  deleteWordsMutation.mutate()
   setShowSpinner(true)
   }
   
  const openModal = (item) => {
    setIsOpen(true);
    setEditData(item);
    
  };

  const closeModal = () => setIsOpen(false);

  const openDelModal = () => {
    setIsDelOpen(true);
  };

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
    refetchInterval: 5000,
  });
  
  const handleSearchChange = (value) => {
    setSearchTerm(value)    
    setEmptySearch(false)
  };


const handleSubmit = () => {
if(searchTerm !== "") {
// searchMutatation.mutate(searchTerm)
setShowSpinner(false)
} else {
setEmptySearch(true)
}

}

useEffect(() => {

   let filteredItems = data?.words;

   // Filter by name (if searchTerm exists)
   if (searchTerm) {
     filteredItems = filteredItems.filter((item) => {
       return (
         item.word
           .toLowerCase()
           .includes(searchTerm.toLowerCase())
       );
     });
   }
   
   setGeneralData(filteredItems)

} ,[data , searchTerm])
  
  // Fetch all data  ends

  return (
    <div className="flex flex-col items-start justify-center gap-4 w-[90%] md-w-[80%]  mx-auto sm:mx-0">
      <form action="" className="w-[100%] ">
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
            className="rounded-md  outline-none border-none bg-white  w-full"
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
            disabled={searchMutatation.isLoading || showSpinner
            }
            className="absolute bg-[#EB2529] p-3 py-2  text-[14px] font-dm-sans justify-center text-white hover:text-black cursor-pointer m-2 rounded-lg inset-y-0 right-0 flex items-center  "
          >
            GO!
          </button>
        </div>
        {emptySearch && (
          <span className="text-red-500 text-xs mt-[-5px]">
            Input cannot be empty!
          </span>
        )}
      </form>

      <div className="h-[40.7vh]  md:max-h-[40.7vh] overflow-y-scroll w-full">
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
              className="w-full flex flex-col items-start gap-5  border-b border-[#262626] pb-3 mb-4"
              key={term?.id}
            >
              <div className="flex items-center w-full justify-between">
                <h2 className="rounded-md p-2 font-bold text-[15x] font-dm-sans text-[#B4B4B4] bg-[#262525]">
                  {term?.word}
                </h2>

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
                    onClick={openDelModal}
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

              <p className="text-[13px] leading-5 pb-3 font-dm-sans text-[#fff]">
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
        <EditCom closeModal={closeModal} editData={editData || [] }  />
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
        <div
          style={style}
          class="bg-[#1d1d1d] border border-[#444444] rounded-lg shadow-lg px-10 pb-10 pt-[5%] w-[90%] max-w-md"
        >
          <div className=" flex justify-center w-full mb-9">
            <p className="font-normal font-dm-sans  text-white">
              {" "}
              Are you sure you want to delete the word MBN from the database
            </p>
          </div>
          <div class="flex gap-4 items-center max-w-[300px] mt-6">
            <CustomButton
              text="Go back!"
              style="bg-[#DB363A] w-full flex justify-center items-center text-white font-dm-sans  text-[20px] h-[55px] hover:bg-red-400  focus-visible:outline-red-600"
              onClick={closeDelModal}
            />
            <CustomButton
              onClick={handleDeleteWord}
              text={
                showSpinner || deleteWordsMutation.isLoading ? (
                  <Spinner />
                ) : (
                  "Yes! Delete"
                )
              }
              disabled={deleteWordsMutation.isLoading || showSpinner}
              style="bg-transparent w-full flex justify-center items-center h-[55px] hover:text-[#DB363A] text-[#A1A1A1] font-dm-sans  border border-[#444444] w-full  focus-visible:outline-red-100"
            />
          </div>
        </div>
      </Modal>
      {/* delete word end */}
    </div>
  );
};

export default EditTerm;
