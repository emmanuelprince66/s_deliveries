import React from "react";
import CustomButton from "./CustomButton";
import { useState } from "react";

import { InputAdornment, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import line from "../images/line.svg"
import yOne from "../images/y-1.svg"
import yTwo from "../images/y-2.svg"
import yThree from "../images/y-3.svg"
import Spinner from "../utils/Spinner";

const Add = () => {
const [showSpinner, setShowSpinner] = useState(false);
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

     const addWordsMutation = useMutation({
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

  const onSubmit = (data) => {
      addWordsMutation.mutate(data);
      setShowSpinner(true);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
      className=" flex flex-col items-start gap-3 justify-center mb-2  w-[90%] mx-auto sm:mx-0 md:w-[90%]"
    >
    
      <TextField
        sx={{
          mb: "0.2rem",
          "::placeholder": {
            fontFamily: "DM Sans", // Replace 'Your Font Family' with the desired font family
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              border: "none", // Remove border on focus
              boxShadow: "none", // Remove box-shadow on focus
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
        {...register("word", {
          required: "Word is required",
          pattern: {
            value: /^[a-zA-Z\s]*$/, // Accept only letters and spaces
            message: "Please enter only letters.",
          },
        })}
        className="rounded-2xl input-placeholder outline-none border-none bg-white  w-full"
        placeholder=" Enter new word phrase,term,anything.."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={yTwo} alt="y-1" className="w-4 h-4" />
              <img src={line} alt="" className="h-7 ml-3" />
            </InputAdornment>
          ),
        }}
      />
      {errors.word && (
        <span className="text-red-500 text-xs mt-[-10px]">
          {errors.word.message}
        </span>
      )}

      <textarea
        class="resize-none block w-full rounded-2xl h-[100px] max-h-[350px] bg-white px-4 py-3 outline-none focus:ring-0"
        placeholder="What does this mean?"
        {...register("meaning", {
          required: "Meaning is required",
          pattern: {
            value: /^[a-zA-Z\s]*$/, // Accept only letters and spaces
            message: "Please enter only letters.",
          },
        })}
      ></textarea>


 
      {errors.meaning && (
        <span className="text-red-500 text-xs mt-[-10px]">
          {errors.meaning.message}
        </span>
      )}

      <TextField
        sx={{
          my: "0.2rem",
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              border: "none", // Remove border on focus
              boxShadow: "none", // Remove box-shadow on focus
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
        name="link"
        {...register("link")}
        className="rounded-2xl input-placeholder outline-none border-none bg-white   w-full"
        placeholder=" Add a link(Optional).."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={yOne} alt="y-1" className="w-4 h-4" />
              <img src={line} alt="" className="h-7 ml-3" />
            </InputAdornment>
          ),
        }}
      />

      <CustomButton
        text={showSpinner || addWordsMutation.isLoading ? <Spinner /> : "Add"}
        disabled={addWordsMutation.isLoading || showSpinner}
        type="submit"
        style="bg-[#EB2529] w-full flex justify-center items-center  hover:bg-red-400 h-[47px] text-white focus-visible:outline-red-600"
      />
    </form>
  );
};

export default Add;
