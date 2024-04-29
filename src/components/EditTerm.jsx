import React from "react";
import arrw from "../images/arrw.svg";
import del from "../images/del.svg";
import edit from "../images/edit.svg";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { useForm } from "react-hook-form";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import line from "../images/line.svg";

import TextareaAutosize from "@mui/material/TextareaAutosize";

import { InputAdornment, TextField } from "@mui/material";

const termArray = [
  {
    id: 1,
    text: "A platform where local manufacturers in Nigeria showcase their product to a wide range of buyer across the globe. ",
    path: "www.mbn.ng...",
    bold: "MBN",
  },
  {
    id: 4,
    text: "A platform where local manufacturers in Nigeria showcase their product to a wide range of buyer across the globe. ",
    path: "www.mbn.ng...",
    bold: "MBN",
  },
  {
    id: 3,
    text: "A platform where local manufacturers in Nigeria showcase their product to a wide range of buyer across the globe. ",
    path: "www.mbn.ng...",
    bold: "MBN",
  },
  {
    id: 4,
    text: "A platform where local manufacturers in Nigeria showcase their product to a wide range of buyer across the globe. ",
    path: "www.mbn.ng...",
    bold: "MBN",
  },
  {
    id: 5,
    text: "A platform where local manufacturers in Nigeria showcase their product to a wide range of buyer across the globe. ",
    path: "www.mbn.ng...",
    bold: "MBN",
  },
];

const EditTerm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const openDelModal = () => {
    setIsDelOpen(true);
  };

  const closeDelModal = () => setIsDelOpen(false);

  return (
    <div className="flex flex-col items-start justify-center gap-4 w-[90%] md-w-[80%]  mx-auto sm:mx-0">
      <form action="" className="w-[100%] ">
        <div className="relative rounded-2xl bg-[#ffefef] w-full">
          <TextField
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
            {...register("search", {
              required: "Input is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
            className="rounded-md  outline-none border-none bg-white  w-full"
            placeholder=" Type something here..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon sx={{ color: "#B4B4B4" }} />
                  <img src={line} alt="" className="h-7 ml-3" />
                </InputAdornment>
              ),
            }}
          />
          <div className="absolute bg-[#EB2529] p-3 py-2  text-[14px] font-dm-sans justify-center text-white hover:text-black cursor-pointer m-2 rounded-lg inset-y-0 right-0 flex items-center  ">
            GO!
          </div>
        </div>
      </form>

      <div className="max-h-[37.7vh] overflow-y-scroll w-full">
        {termArray &&
          Array.isArray(termArray) &&
          termArray.map((term) => (
            <div
              className="w-full flex flex-col items-start gap-5  border-b border-[#262626] pb-3 mb-4"
              key={term?.id}
            >
              <div className="flex items-center w-full justify-between">
                <h2 className="rounded-md p-2 font-bold text-[20px] font-dm-sans text-[#B4B4B4] bg-[#262525]">
                  {term?.bold}
                </h2>

                <div className="flex gap-2 items-center">
                  <div
                    onClick={openModal}
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

              <p className="text-[14px] pb-1 font-dm-sans text-[#fff]">
                {term.text}
              </p>
            </div>
          ))}
      </div>

      {isOpen && (
        <div class="fixed inset-0 z-50 flex items-center justify-center   bg-opacity-50">
          <div class="bg-[#1d1d1d] rounded-lg border border-[#444444] shadow-lg px-6 pb-6 pt-3 w-[90%] max-w-[50%]">
            <div className="flex flex-col items-start justify-center gap-2 w-full">
              <p className="font-dm-sans text-white text-[15px]">Title</p>
              <input
                type="text"
                className="rounded-md outline-none h-[40px]  pl-4 bg-[#282828] p-2 w-full placeholder-[#636363]"
                placeholder="Title"
              />

              <p className="font-dm-sans text-white text-[15px] mt-5">
                Meaning
              </p>

              <TextareaAutosize
                style={{ minHeight: "100px", maxHeight: "300px" }} // Adjust the minHeight and maxHeight as needed
                className="rounded-2xl input-placeholder bg-[#282828]  placeholder-[#636363] outline-none border-none  w-full px-4 py-3" // Apply custom classes for styling
                placeholder="What does this mean..."
              />
            </div>
            <div class="flex gap-4 items-center max-w-[300px] mt-6">
              <CustomButton
                text="Cancel"
                style="bg-[#DB363A] w-full flex justify-center items-center text-white font-dm-sans  text-[20px] h-[50px] hover:bg-red-400  focus-visible:outline-red-600"
                onClick={closeModal}
              />
              <CustomButton
                text="Save"
                style="bg-transparent w-full flex justify-center items-center h-[50px] text-[#A1A1A1] font-dm-sans  border border-[#444444] w-full  focus-visible:outline-red-100"
              />
            </div>
          </div>
        </div>
      )}
      {isDelOpen && (
        <div class="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50 ">
          <div class="bg-[#1d1d1d] border border-[#444444] rounded-lg shadow-lg px-10 pb-10 pt-[5%] w-[90%] max-w-md">
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
                text="Yes! Delete"
                style="bg-transparent w-full flex justify-center items-center h-[55px] text-[#A1A1A1] font-dm-sans  border border-[#444444] w-full  focus-visible:outline-red-100"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditTerm;
