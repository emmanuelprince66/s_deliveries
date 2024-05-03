import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { toast, ToastContainer } from "react-toastify";
import aOne from "../images/a-1.png";
import aTwo from "../images/a-2.png";
import aThree from "../images/a-3.png";
import { useForm } from "react-hook-form";
import Spinner from "../utils/Spinner";
import { useMutation, useQuery } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.min.css";
import { BaseAxios } from "../helpers/axiosInstance";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { InputAdornment, TextField } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import lockIcon from "../images/lock.svg";
import emailIcon from "../images/email.svg";
import line from "../images/line.svg";


const ForgetPassword = () => {
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);
  const [isOpen, setIsOpen] = useState(false);




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

    const resetPasswordMutation = useMutation({
      mutationFn: async (formData) => {
        try {
          const response = await BaseAxios({
            url: "forget-password",
            method: "POST",
            data: formData,
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
      setIsOpen(true)
        setShowSpinner(false);
        console.log(data);

    
      },
      onError: (error) => {
        setShowSpinner(false);
        console.error("An error occurred:", error);
      },
    });

  const onSubmit = (data) => {
    console.log(data); // Handle form submission with validated data
    resetPasswordMutation.mutate(data);
    setShowSpinner(true);
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate back
  };

  return (
    <div className="w-full bg-[#1e1e1e] min-h-screen flex justify-center items-center">
      <div className="w-full md:w-[95%] xl:w-[55%] flex justify-center items-center relative">
        <img
          src={aThree}
          alt="a-3"
          className="absolute w-[30px] h-[30px] lg:w-[120px] lg:h-[120px]  md:w-[80px] md:h-[80px] top-0 right-0 "
        />

        <div className="w-[95%] md:w-[80%] xl:w-[65%] bg-black rounded-[1rem] h-fit flex flex-col items-center justify-start mt-0 gap-6 p-2 py-5 pb-10 xl:pb-[2.8rem]  md:p-10 xl:p-6 ">
          <div className="w-full">
            <button
              onClick={handleGoBack}
              className=" text-white font-dm-sans p-2 md:p-0 "
            >
              Go Back
            </button>
          </div>

          <div className="h-full w-full flex gap-5 flex-col items-center justify-end">
            <img
              src={aOne}
              alt="a-1"
              className=" object-contain w-[100px] h-[30px] mb-5 mt-4"
            />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col items-center gap-6"
            >
              {/* Email Address Field */}
              <div className="w-full">
                <TextField
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        outline: "none",
                        border: "none",
                      },
                      "&:hover fieldset": {
                        outline: "none",
                        border: "none",
                      },
                      "&.Mui-focused fieldset": {
                        outline: "none",
                        border: "none",
                      },
                    },
                  }}
                  type="text"
                  name="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format",
                    },
                  })}
                  placeholder="Your email address.."
                  className="rounded-2xl input-placeholder outline-none border-none bg-white w-full"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img
                          src={emailIcon}
                          className="w-[20px] h-[20px] bg-#B4B4B4"
                        />
                        <img src={line} alt="" className="h-7 ml-3" />
                        &nbsp;&nbsp;
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-[-5px]">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <CustomButton
                text={
                  showSpinner || resetPasswordMutation.isLoading ? (
                    <Spinner />
                  ) : (
                    "Reset"
                  )
                }
                disabled={resetPasswordMutation.isLoading || showSpinner}
                type="submit"
                style="bg-[#EB2529] w-full flex justify-center items-center font-dm-sans hover:bg-red-400 h-[55px] text-white focus-visible:outline-red-600"
              />
            </form>
          </div>

          {/* <div className="flex w-1/2 md:w-1/3 mx-auto  justify-between items-center">
            <Link to="/user-signup">
              <button className="bg-transparent font-medium font-dm-sans text-white text-[16px] hover:text-[#DB363A] transition-colors duration-700 ease-in-out ">
                Sign Up
              </button>
            </Link>
            <div className="h-full w-[1px] bg-[#757575]">|</div>

            <Link to="/login-user">
              <button className="bg-transparent font-dm-sans font-medium  text-white text-[16px] hover:text-[#DB363A] transition-colors duration-700 ease-in-out ">
                Login
              </button>
            </Link>
          </div> */}
        </div>

        {/* <img
          src={aTwo}
          alt="a-2"
          className="absolute w-[30px] h-[30px]  lg:w-[120px] lg:h-[120px]  md:w-[80px] md:h-[80px] bottom-0 left-0 xl:bottom-10 md:bottom-4"
        /> */}
      </div>

      {isOpen && (
        <div class="fixed inset-0 z-50 flex items-center justify-center   bg-opacity-50  ">
          <div class="bg-[#1d1d1d] rounded-lg border border-[#444444] shadow-lg px-6 pb-6 pt-3 w-[90%] md:w-[25%] lg:w-[25%] ">
            <div className="flex flex-col items-start justify-center gap-4 w-full p-4">
              <div className="w-[100px] h-[60px] mx-auto ">
                <img src={aOne} alt="a-1" className=" object-contain" />
              </div>
              <p className="font-dm-sans text-white text-center text-[25px]">
                A reset email has been sent your email
              </p>

              <CustomButton
                text="Go to Login"
                path="/login-user"
                style="bg-[#EB2529] w-full flex justify-center items-center  hover:bg-red-400 h-[47px] text-white focus-visible:outline-red-600"
              />
            </div>
          </div>
        </div>
      )}
      <ToastContainer
        theme="dark"
        toastStyle={{ background: "#333", color: "#fff" }}
      />
      <div className="absolute w-[30px] h-[30px]  lg:w-[120px] lg:h-[120px]  md:w-[80px] md:h-[80px] left-0 bottom-5 md:bottom-[7rem]">
        <img src={aTwo} alt="a-w" className="object-contain" />
      </div>
    </div>
  );
};

export default ForgetPassword;
