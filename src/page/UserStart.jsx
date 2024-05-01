import React from "react";
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



const UserStart = () => {
const navigate = useNavigate()

const handleLogout = () => {
Cookies.remove("authToken")
Cookies.remove("refreshToken")
Cookies.remove("role")

navigate("/login-user")

}
 
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
      
  return (
    <div className="w-full bg-[#171414] h-screen p-2 md:p-8 relative">
      <div className="w-[100%] md:w-[82.5%] lg:w-[62.5%] bg-[#000] relative rounded-2xl mx-auto mb-4 p-4 pb-8">
        <div className="flex flex-col w-full items-center justify-center ">
          <div className="w-[100%] md:w-[90%] lg:w-[90%] mx-auto flex justify-end mb-[5%]">
            <button onClick={handleLogout} className=" bg-[#EB2529] py-2 px-4 font-dm-sans  rounded-md  hover:bg-red-400 text-white focus-visible:outline-red-600 mt-0 md:mt-3 lg:mt-3">
              Logout
            </button>
          </div>

          <div className="w-[100px] h-[100px] mt-4 md:mt-0 lg:mt-0">
            <img src={aOne} alt="a-1" className=" object-contain" />
          </div>

          <form action="" className="w-[100%] md:w-[80%] lg:w-[70%] ">
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
                    paddingTop: "0.6em", // Adjust top padding of the input text
                    paddingBottom: "0.6em", // Adjust bottom padding of the input text
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
                      <span className="ml-[.3em] w-[1px]"> | </span>
                    </InputAdornment>
                  ),
                }}
              />
              <div className="absolute bg-[#EB2529] p-3 py-2  text-[14px] font-dm-sans justify-center text-white hover:text-black cursor-pointer m-2 rounded-lg inset-y-0 right-0 flex items-center  ">
                GO!
              </div>
            </div>
          </form>

          <div className="absolute w-[30px] h-[30px]  lg:w-[120px] lg:h-[120px]  md:w-[80px] md:h-[80px] right-[-1.5%] bottom-0 md:bottom-0">
            <img src={aThree} alt="a-3" className="object-contain" />
          </div>
        </div>
      </div>

      <div className="w-[100%] md:w-[82.5%] lg:w-[52.5%] mx-auto flex flex-col items-start gap-3  overflow-y-scroll max-h-[55vh] md:max-h-[55vh] lg:max-h-[40vh]">
        <div className="flex flex-col items-start gap-4 w-full">
          <p className="rounded-md p-2 font-bold text-[20px] font-dm-sans text-[#B4B4B4] bg-[#262525]">
            BMC
          </p>
          <p className="text-[14px] pb-3 font-dm-sans text-[#fff]">
            Brands, Marketing and Communication. The department in the
            organisation that is responsible for marketing all brands within
            sterling and also handle all public relations matters.
          </p>
        </div>
        <Divider sx={{ width: "100%", background: "#262626" }} />
        <div className="flex flex-col items-start gap-4 w-full">
          <p className="rounded-md p-2 font-bold text-[20px] font-dm-sans text-[#B4B4B4] bg-[#262525]">
            Abubakar Suleiman
          </p>
          <p className="text-[14px] pb-3 font-dm-sans text-[#fff]">
            Brands, Marketing and Communication. The department in the
            organisation that is responsible for marketing all brands within
            sterling and also handle all public relations matters.
          </p>
        </div>
        <Divider sx={{ width: "100%", background: "#262626" }} />
        <div className="flex flex-col items-start gap-4 w-full">
          <p className="rounded-md p-2 font-bold text-[20px] font-dm-sans text-[#B4B4B4] bg-[#262525]">
            BMC
          </p>
          <p className="text-[14px] pb-3 font-dm-sans text-[#fff]">
            Brands, Marketing and Communication. The department in the
            organisation that is responsible for marketing all brands within
            sterling and also handle all public relations matters.
          </p>
        </div>
        <Divider sx={{ width: "100%", background: "#262626" }} />
        <div className="flex flex-col items-start gap-4 w-full">
          <p className="rounded-md p-2 font-bold text-[20px] font-dm-sans text-[#B4B4B4] bg-[#262525]">
            BMC
          </p>
          <p className="text-[14px] pb-3 font-dm-sans text-[#fff]">
            Brands, Marketing and Communication. The department in the
            organisation that is responsible for marketing all brands within
            sterling and also handle all public relations matters.
          </p>
        </div>
        <Divider sx={{ width: "100%", background: "#262626" }} />
        <div className="flex flex-col items-start gap-4 w-full">
          <p className="rounded-md p-2 font-bold text-[20px] font-dm-sans text-[#B4B4B4] bg-[#262525]">
            BMC
          </p>
          <p className="text-[14px] pb-3 font-dm-sans text-[#fff]">
            Brands, Marketing and Communication. The department in the
            organisation that is responsible for marketing all brands within
            sterling and also handle all public relations matters.
          </p>
        </div>
        <Divider sx={{ width: "100%", background: "#262626" }} />
      </div>

      <div className="absolute w-[30px] h-[30px]  lg:w-[120px] lg:h-[120px]  md:w-[80px] md:h-[80px] left-0 bottom-5 md:bottom-20">
        <img src={aTwo} alt="a-w" className="object-contain" />
      </div>
    </div>
  );
};

export default UserStart;
