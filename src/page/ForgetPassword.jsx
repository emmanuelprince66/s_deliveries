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

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const notifyError = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
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
          url: "auth/logins",
          method: "POST",
          data: formData,
        });

        if (response.status !== 200) {
          setShowSpinner(false);
          throw new Error(response.data.message);
        }
        return response.data;
      } catch (error) {
        setShowSpinner(false);
        console.log(error);
        console.log(error.response.data.message);
        throw new Error(error.response.data.message);
      }
    },
    onSuccess: (data) => {
      setShowSpinner(false);
      console.log("Login successful:", data);
    },
    onError: (error) => {
      setShowSpinner(false);
      console.log(error);
      notifyError(error);
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
    <div className="w-full bg-[#1e1e1e] h-screen flex justify-center items-center">
      <div className="w-[95%] md:w-[50%] flex justify-center  items-center h-[90%] relative ">
        <div className="absolute w-[100px] h-[100px] right-0 top-0">
          <img src={aThree} alt="a-3" className="object-contain" />
        </div>
        <div className=" w-[100%] md:w-[70%] bg-black rounded-[1rem] h-[90%]">
          <button onClick={handleGoBack} className="p-5 my-4 text-white">
            Go Back
          </button>

          <div className="w-full flex flex-col items-center mt-[5rem] md:mt-[0rem] justify-end gap-3 ">
            <div className="w-full flex justify-center mt-[5rem]">
              <div className="w-[100px] h-[100px]">
                <img src={aOne} alt="a-1" className=" object-contain" />
              </div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" w-[95%] md:w-[70%] flex flex-col items-start justify-center gap-3  "
            >
              {/* Email Address Field */}

              <TextField
                sx={{
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
                type="tel"
                name="phone"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                className="rounded-2xl input-placeholder outline-none border-none bg-white  w-full"
                placeholder=" Your Email Number.."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailRoundedIcon sx={{ color: "#B4B4B4" }} />
                      <span className="ml-[.3em] w-[1px]"> &nbsp;&nbsp; </span>
                    </InputAdornment>
                  ),
                }}
              />
              {errors.phone && (
                <span className="text-red-500 text-[10px] mt-[-5px]">
                  {errors.phone.message}
                </span>
              )}

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
                style="bg-[#373737] w-full hover:bg-red-400 text-white focus-visible:outline-red-600 mt-3"
              />
            </form>
          </div>
        </div>
        <div className="absolute w-[100px] h-[100px] left-0 bottom-10 md:bottom-40">
          <img src={aTwo} alt="a-2" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
