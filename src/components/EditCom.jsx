import React from 'react'
import TextareaAutosize from "@mui/material/TextareaAutosize";
import CustomButton from "./CustomButton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import line from "../images/line.svg";
import Spinner from '../utils/Spinner';
import {Box} from "@mui/material"
import { toast, ToastContainer } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    width:"100%",
    bgcolor: "background.paper",
    p: 3,
  };

const EditCom = ({ closeModal , editData }) => {
const [showSpinner, setShowSpinner] = useState(false);
const [word , setWord] = useState("")
const [meaning , setMeaning] = useState("")
const [wordErr , setWordErr ] = useState(false)
const [wordMessage , setWordMessage ] = useState("")
const [meaningErr , setMeaningErr ] = useState(false)
const [meaningMessage , setMeaningMessage ] = useState("")
const [realData , setRealData] = useState(editData || [])

const handleWordChange = (e) => {
setRealData({ ...realData, word: e.target.value });
  const newValue = e.target.value;

  const numberRegex = /^\d*$/;

  if (newValue === "") {
    setWordErr(true);
    setWordMessage("word cannot be empty");
  } else if (numberRegex.test(newValue)) {
    setWordErr(true);
    setWordMessage("word cannot be a number");
  } else {
    console.log(newValue); // Log the new value if it's not empty or a number
    setWord(newValue);
    setWordErr(false); // Reset error state if the input is valid
    setWordMessage(""); // Reset error message
  }
};

const handleMeaningChange = (e) => {
setRealData({ ...realData, meaning: e.target.value });
  const newValue = e.target.value;

  const numberRegex = /^\d*$/;

  if (newValue === "") {
    setMeaningErr(true);
    setWordMessage("meaning cannot be empty");
  } else if (numberRegex.test(newValue)) {
    setMeaningErr(true);
    setWordMessage("meaning cannot be a number");
  } else {
    console.log(newValue); // Log the new value if it's not empty or a number
    setWord(newValue);
    setMeaningErr(false); // Reset error state if the input is valid
    setMeaningMessage(""); // Reset error message
  }
};


const notifyError = (msg) => {
  toast.error(msg, {
    autoClose: 6000, // Time in milliseconds
  });
};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  
       const editWordsMutation = useMutation({
         mutationFn: async (payLoad) => {
           try {
             const response = await BaseAxios({
               url: "edit-existing-word",
               method: "POST",
               data: payLoad,
             });

             console.log("Response:", response);

             if (!response || !response?.data) {
               throw new Error("Invalid response received");
             }

             if (response?.status !== 200) {
               setShowSpinner(false);
               throw new Error(
                 "Request failed with status: " + response.status
               );
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
  const onSubmit =(data) => {
  
  const {word , meaning} = data
   const payLoad  = {
   id:editData?.id || "",
   word,
   meaning,
   }
  
  editWordsMutation.mutate(payLoad);
  setShowSpinner(true)
  }
  return (
    <Box style={style}>
      <div class="bg-[#1d1d1d] rounded-lg mx-auto border border-[#444444] shadow-lg px-6 pb-6 pt-3 w-[90%] md:w-[45%] lg:w-[35%]">
        <form className="w-full">
          <div className="flex flex-col items-start justify-center gap-2 w-full">
            <p className="font-dm-sans text-white text-[15px]">Title</p>

            <input
              type="text"
              required
              className="rounded-md font-normal text-white outline-none h-[40px]  pl-4 bg-[#282828] p-2 w-full placeholder-[#636363]"
              placeholder="Word"
              value={realData.word || ""}
              onChange={handleWordChange}
            />
            {/* <input
    type="text"
    className="rounded-md font-normal text-white outline-none h-[40px]  pl-4 bg-[#282828] p-2 w-full placeholder-[#636363]"
    placeholder="Word"
    value={editData.word || ""}
    onChange={(e) => setEditData({ ...editData, word: e.target.value })}
    {...register("word", {
        required: "Word is required",
        pattern: {
            value: /^[a-zA-Z\s]*$/, // Accept only letters and spaces
            message: "Please enter only letters.",
        },
    })}
/> */}

            {wordErr && (
              <span className="text-red-500 text-xs mt-[-5px]">
                {wordMessage}
              </span>
            )}

            <p className="font-dm-sans text-white text-[15px] mt-5">Meaning</p>

            <TextareaAutosize
              required
              style={{ minHeight: "100px", maxHeight: "300px" }} // Adjust the minHeight and maxHeight as needed
              className="rounded-2xl input-placeholder font-normal text-white bg-[#282828]  placeholder-[#636363] outline-none border-none  w-full px-4 py-3" // Apply custom classes for styling
              placeholder="What does this mean..."
              value={realData.meaning || ""}
              onChange={handleMeaningChange}
            />
            {meaningErr && (
              <span className="text-red-500 text-xs mt-[-5px]">
                {meaningMessage}
              </span>
            )}
          </div>
          <div className="flex gap-4 items-center max-w-[300px] mt-6">
            <CustomButton
              text="Cancel"
              style="bg-[#EB2529] w-full flex justify-center items-center text-white font-dm-sans  text-[20px] h-[50px] hover:bg-red-400  focus-visible:outline-red-600"
              onClick={closeModal}
            />

            <CustomButton
              text={
                showSpinner || editWordsMutation.isLoading ? <Spinner /> : "Add"
              }
              disabled={editWordsMutation.isLoading || showSpinner}
              type="submit"
              style="bg-transparent w-full flex justify-center text-[20px] items-center border border-[#444444]  hover:text-[#EB2529] h-[50px] text-white focus-visible:outline-red-600"
            />
          </div>
        </form>
      </div>
    </Box>
  );
};

export default EditCom