import React, { useState } from "react";
import search from "../images/search.svg";
import aOne from "../images/a-1.png";
import aTwo from "../images/a-2.png";
import aThree from "../images/a-3.png";
import CustomButton from "../components/CustomButton";
import Divider from "@mui/material/Divider";
import { InputAdornment, TextField } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";
import line from "../images/line.svg";




const UserStart = () => {
const navigate = useNavigate()
const [searchValue , setSearchValue] = useState(null)


const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();


const handleLogout = () => {
Cookies.remove("authToken")
Cookies.remove("refreshToken")
Cookies.remove("role")

navigate("/login-user")

}

const onSubmit = (data) => {
console.log(data)
}
      
  return (
    <div className="w-full bg-[#171414] h-screen p-2 md:p-8 relative">
      <div className="   w-[100%] md:w-[82.5%] lg:w-[62.5%] bg-[#000] relative rounded-2xl mx-auto mb-4 p-4 pb-9">
        <div className="flex flex-col w-full items-center justify-center ">
          <div className="w-[100%] md:w-[90%] lg:w-[90%] mx-auto flex justify-end mb-[5%]">
            <button
              onClick={handleLogout}
              className=" bg-[#EB2529] py-2 px-4 font-dm-sans  rounded-md  hover:bg-red-400 text-white focus-visible:outline-red-600 mt-0 md:mt-3 lg:mt-3"
            >
              Logout
            </button>
          </div>

          <div className="w-[100px] h-[100px] mt-4 md:mt-0 lg:mt-0">
            <img src={aOne} alt="a-1" className=" object-contain" />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[100%] md:w-[90%] lg:w-[90%] "
          >
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
                  required: "Input is required",
                  pattern: {
                    value: /^[a-zA-Z\s]*$/, // Accept only letters and spaces
                    message: "Please enter only letters.",
                  },
                })}
                className="rounded-md  outline-none border-none bg-white  w-full"
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
                type="submit"
                className="absolute bg-[#EB2529] p-3 py-2  text-[14px] font-dm-sans justify-center text-white hover:text-black cursor-pointer m-2 rounded-lg inset-y-0 right-0 flex items-center  "
              >
                GO!
              </button>
            </div>
            {errors.word && (
              <span className="text-red-500 text-xs mt-[-5px]">
                {errors.word.message}
              </span>
            )}
          </form>

          {/* <div className="absolute w-[30px] h-[30px]  lg:w-[120px] lg:h-[120px]  md:w-[80px] md:h-[80px] right-[-1.5%] bottom-0 md:bottom-0">
            <img src={aThree} alt="a-3" className="object-contain" />
          </div> */}
        </div>
      </div>

      <div className="w-[100%] md:w-[82.5%] lg:w-[62.5%] mx-auto flex flex-col items-start gap-3  overflow-y-scroll max-h-[55vh] md:max-h-[55vh] lg:max-h-[40vh]">
        <div className="flex flex-col items-start gap-4 w-full">
          <p className="rounded-md p-2 font-bold text-[15x] font-dm-sans text-[#B4B4B4] bg-[#262525]">
            BMC
          </p>
          <p className="text-[13px] leading-5 pb-3 font-dm-sans text-[#fff]">
            Brands, Marketing and Communication. The department in the
            organisation that is responsible for marketing all brands within
            sterling and also handle all public relations matters.
          </p>
        </div>
        <Divider sx={{ width: "100%", background: "#262626" }} />
        <div className="flex flex-col items-start gap-4 w-full">
          <p className="rounded-md p-2 font-bold text-[15px] font-dm-sans text-[#B4B4B4] bg-[#262525]">
            Abubakar Suleiman
          </p>
          <p className="text-[13px] leading-5 pb-3 font-dm-sans text-[#fff]">
            Brands, Marketing and Communication. The department in the
            organisation that is responsible for marketing all brands within
            sterling and also handle all public relations matters.
          </p>
        </div>
        <Divider sx={{ width: "100%", background: "#262626" }} />
        <div className="flex flex-col items-start gap-4 w-full">
          <p className="rounded-md p-2 font-bold text-[15px] font-dm-sans text-[#B4B4B4] bg-[#262525]">
            BMC
          </p>
          <p className="text-[13px] leading-5 pb-3 font-dm-sans text-[#fff]">
            Brands, Marketing and Communication. The department in the
            organisation that is responsible for marketing all brands within
            sterling and also handle all public relations matters.
          </p>
        </div>
        <Divider sx={{ width: "100%", background: "#262626" }} />
        <div className="flex flex-col items-start gap-4 w-full">
          <p className="rounded-md p-2 font-bold text-[15px] font-dm-sans text-[#B4B4B4] bg-[#262525]">
            BMC
          </p>
          <p className="text-[13px] leading-5 pb-3 font-dm-sans text-[#fff]">
            Brands, Marketing and Communication. The department in the
            organisation that is responsible for marketing all brands within
            sterling and also handle all public relations matters.
          </p>
        </div>
        <Divider sx={{ width: "100%", background: "#262626" }} />
        <div className="flex flex-col items-start gap-4 w-full">
          <p className="rounded-md p-2 font-bold text-[15px] font-dm-sans text-[#B4B4B4] bg-[#262525]">
            BMC
          </p>
          <p className="text-[13px] leading-5 pb-3 font-dm-sans text-[#fff]">
            Brands, Marketing and Communication. The department in the
            organisation that is responsible for marketing all brands within
            sterling and also handle all public relations matters.
          </p>
        </div>
        <Divider sx={{ width: "100%", background: "#262626" }} />
      </div>

      {/* <div className="absolute w-[30px] h-[30px]  lg:w-[120px] lg:h-[120px]  md:w-[80px] md:h-[80px] left-0 bottom-5 md:bottom-20">
        <img src={aTwo} alt="a-w" className="object-contain" />
      </div> */}
    </div>
  );
};

export default UserStart;
