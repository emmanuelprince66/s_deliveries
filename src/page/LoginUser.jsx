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
import lockIcon from "../images/lock.svg";
import emailIcon from "../images/email.svg";

import { InputAdornment, TextField } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
const LoginUser = () => {
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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

  const adminLoginMutation = useMutation({
    mutationFn: async (payLoad) => {
      try {
        const response = await BaseAxios({
          url: "auth/logins",
          method: "POST",
          data: payLoad,
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
    const { email, password } = data;

    const payLoad = {
      email,
      password,
      role: "Admin",
    };
    adminLoginMutation.mutate(payLoad);
    setShowSpinner(true);
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate back
  };

  return (
    <div className="w-full bg-[#1e1e1e] min-h-screen flex justify-center items-center">
      <div className="w-full md:w-[95%] xl:w-[50%] flex justify-center items-center relative">
        <img
          src={aThree}
          alt="a-3"
          className="absolute w-[100px] h-[100px] top-0 right-0"
        />

        <div className="w-[95%] md:w-[80%] xl:w-[70%] bg-black rounded-[1rem] h-[90vh] md:h-[90%] flex flex-col items-center justify-center gap-6 p-2 md:p-12 xl:p-6 ">
          <div className="w-full justify-start">
            <button
              onClick={handleGoBack}
              className="p-5 my-4 text-white font-dm-sans "
            >
              Go Back
            </button>
          </div>

          <h2 className="text-white text-center font-dm-sans">
            Login as a User
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center gap-6"
          >
            {/* Email Address Field */}
            <div className="w-full">
              <TextField
                type="text"
                name="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Your Email Address.."
                className="rounded-2xl input-placeholder outline-none border-none bg-white w-full"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src={emailIcon}
                        className="w-[20px] h-[20px] bg-#B4B4B4"
                      />
                      <span className="ml-[.3em] w-[1px]"> | </span>
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

            {/* Password Field */}
            <div className="w-full">
              <TextField
                type={showPassword ? "text" : "password"}
                name="password"
                {...register("password", {
                  required: "Password is required",
                })}
                placeholder="Your Password.."
                className="rounded-2xl input-placeholder outline-none border-none bg-white p-2 w-full"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src={lockIcon}
                        className="w-[20px] h-[20px] bg-#B4B4B4"
                      />
                      <span className="bg-grey_1 ml-[.3em] w-[1px]"> |</span>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff sx={{ color: "#B4B4B4" }} />
                        ) : (
                          <Visibility sx={{ color: "#B4B4B4" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {errors.password && (
                <span className="text-red-500 text-xs mt-[-5px]">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <CustomButton
              text=
                  "Login"
              path="/user"
              style="bg-[#EB2529] w-full hover:bg-red-400 h-[47px] text-white focus-visible:outline-red-600"
            />
            {/* <CustomButton
              text={
                showSpinner || adminLoginMutation.isLoading ? (
                  <Spinner />
                ) : (
                  "Login"
                )
              }
              disabled={adminLoginMutation.isLoading || showSpinner}
              type="submit"
              style="bg-[#EB2529] w-full hover:bg-red-400 h-[47px] text-white focus-visible:outline-red-600"
            /> */}
          </form>

          <Link
            to="/forget-password"
            className="text-[15px] hover:text-red-500 font-dm-sans text-white"
          >
            Forgot Password?
          </Link>
        </div>

        <img
          src={aTwo}
          alt="a-2"
          className="absolute w-[100px] h-[100px] bottom-0 left-0 xl:bottom-40 md:bottom-4"
        />
      </div>
    </div>
  );
};

export default LoginUser;
