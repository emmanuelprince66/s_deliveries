import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { toast, ToastContainer } from "react-toastify";
import aOne from "../images/a-1.png";
import aTwo from "../images/a-2.png";
import aThree from "../images/a-3.png";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import Spinner from "../utils/Spinner";
import { useMutation, useQuery } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.min.css";
import lockIcon from "../images/lock.svg";
import emailIcon from "../images/email.svg";
import { BaseAxios } from "../helpers/axiosInstance";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import line from "../images/line.svg";
import { InputAdornment, TextField } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
const SignUpUser = () => {
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const notifyError = (msg) => {
    toast.error(msg, {
      autoClose: 6000, // Time in milliseconds
    });
  };
const registerUserMutation = useMutation({
  mutationFn: async (payLoad) => {
    try {
      const response = await BaseAxios({
        url: "onboard-user",
        method: "POST",
        data: payLoad,
      });

      console.log("Response:", response);

      if (!response || !response?.data) {
        throw new Error("Invalid response received");
      }

      if (response?.status !== 201) {
        setShowSpinner(false);
        throw new Error("Request failed with status: " + response.status);
      }

      return response.data;
    } catch (error) {
      setShowSpinner(false);
      notifyError("An error occurred: " + error.message);
      throw error;
    }
  },
  onSuccess: (data) => {
    setShowSpinner(false);


    if (data && data?.accessTokens) {
    navigate("/user");
    
    Cookies.set("authToken" , data?.accessTokens?.accessToken)
    Cookies.set("refreshToken" , data?.accessTokens?.refreshToken)
    Cookies.set("role" , data?.userRole)

    
   
    } else {
      console.error("Invalid data format:", data);
    }
  },
  onError: (error) => {
    setShowSpinner(false);
    console.error("An error occurred:", error);
  },
});


  const onSubmit = (data) => {
    const { email, password, confirmPassword } = data;

    const payLoad = {
      email,
      password,
    };

    if (JSON.stringify(password) === JSON.stringify(confirmPassword)) {
      registerUserMutation.mutate(payLoad);
      setShowSpinner(true);
    } else {
      setTimeout(() => {
        notifyError("Password do not match!");
      }, 500); // Delay of 500 milliseconds
    }
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
          className="absolute w-[30px] h-[30px] lg:w-[120px] lg:h-[120px]  md:w-[80px] md:h-[80px] top-0 right-0 "
        />

        <div className="w-[95%] md:w-[80%] xl:w-[70%] bg-black rounded-[1rem] h-full md:h-[50vh] lg:h-full flex flex-col items-start justify-start mt-0 gap-6 p-2 pb-[1rem] xl:pb-4 md:p-12 xl:p-6 ">
          <div className="w-full">
            <button
              onClick={handleGoBack}
              className=" text-white font-dm-sans p-2 md:p-0 "
            >
              Go Back
            </button>
          </div>

          <div className="h-full w-full flex gap-5 flex-col items-center ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col items-center gap-6 "
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
                  placeholder="Your Email Address.."
                  className="rounded-2xl input-placeholder outline-none border-none bg-white w-full"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img
                          src={emailIcon}
                          className="w-[20px] h-[20px] bg-#B4B4B4"
                        />
                        <img src={line} alt="" className="h-7 ml-3" />
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
                        <img src={line} alt="" className="h-7 ml-3" />
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

              {/* Password Field */}
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
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  {...register("confirmPassword", {
                    required: "Password is required",
                  })}
                  placeholder="Your Confirm Password.."
                  className="rounded-2xl input-placeholder outline-none border-none bg-white p-2 w-full"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img
                          src={lockIcon}
                          className="w-[20px] h-[20px] bg-#B4B4B4"
                        />
                        <img src={line} alt="" className="h-7 ml-3" />
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
                {errors.confirmPassword && (
                  <span className="text-red-500 text-xs mt-[-5px]">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}

              <CustomButton
                text={
                  showSpinner || registerUserMutation.isLoading ? (
                    <Spinner />
                  ) : (
                    "Sign Up"
                  )
                }
                disabled={registerUserMutation.isLoading || showSpinner}
                type="submit"
                style="bg-[#EB2529] w-full flex justift-center items-center hover:bg-red-400 h-[47px] text-white focus-visible:outline-red-600"
              />
            </form>

            <Link
              to="/forget-password"
              className="text-[15px] hover:text-red-500 font-dm-sans text-white"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        <img
          src={aTwo}
          alt="a-2"
          className="absolute w-[30px] h-[30px]  lg:w-[120px] lg:h-[120px]  md:w-[80px] md:h-[80px] bottom-0 left-0 xl:bottom-40 md:bottom-4"
        />
      </div>

      <ToastContainer
        theme="dark"
        toastStyle={{ background: "#333", color: "#fff" }}
      />
    </div>
  );
};

export default SignUpUser;
