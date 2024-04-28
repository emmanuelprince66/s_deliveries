import React from "react";
import CustomButton from "./CustomButton";
import { InputAdornment, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import yOne from "../images/y-1.svg"
import yTwo from "../images/y-2.svg"
import yThree from "../images/y-3.svg"
const Add = () => {
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
  const onSubmit = () => {};
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
      className=" flex flex-col items-start gap-3 justify-center w-[90%] mx-auto sm:mx-0 sm:w-[80%]"
    >
      <TextField
        sx={{
        mb:"0.2rem",
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              border: "none", // Remove border on focus
              boxShadow: "none", // Remove box-shadow on focus
            },
          },
          "& .MuiInputBase-input": {
            paddingTop: "0.6em", // Adjust top padding of the input text
            paddingBottom: "0.6em", // Adjust bottom padding of the input text
          },
          "& .MuiInputLabel-root": {
            marginTop: "0.5em", // Adjust top margin of the label
          },
        }}
        type="text"
        name="email"
        {...register("word", {
          required: "Word is required",
        })}
        className="rounded-2xl input-placeholder outline-none border-none bg-white  w-full"
        placeholder=" Enter new word phrase,term,anything.."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={yTwo} alt="y-1" className="w-5 h-5" />
              <span className="ml-[.3em] w-[1px]"> | </span>
            </InputAdornment>
          ),
        }}
      />
      <TextareaAutosize
        style={{ minHeight: "100px", maxHeight: "300px" }} // Adjust the minHeight and maxHeight as needed
        className="rounded-2xl input-placeholder outline-none border-none bg-white w-full px-4 py-3" // Apply custom classes for styling
        placeholder="What does this mean..."
        {...register("meaning", {
          required: "Meaning is required",
        })}
      />

      <TextField
        sx={{
        my:"0.2rem",
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              border: "none", // Remove border on focus
              boxShadow: "none", // Remove box-shadow on focus
            },
          },
          "& .MuiInputBase-input": {
            paddingTop: "0.6em", // Adjust top padding of the input text
            paddingBottom: "0.6em", // Adjust bottom padding of the input text
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
              <img src={yOne} alt="y-1" className="w-5 h-5" />
              <span className="ml-[.3em] w-[1px]"> | </span>
            </InputAdornment>
          ),
        }}
      />

      <CustomButton
        text="Add"
        onClick={handleSubmit} // Pass handleSubmit as onClick
        style="bg-[#DB363A] font-dm-sans w-full text-white hover:bg-red-400 focus-visible:outline-red-600"
      />
    </form>
  );
};

export default Add;
