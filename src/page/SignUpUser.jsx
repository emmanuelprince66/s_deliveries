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
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
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
    navigate("/"); // Navigate back
  };
  
 

  return (
    <div className="w-full bg-[#1e1e1e] min-h-screen flex justify-center items-center">
      <div className="w-full md:w-[95%] xl:w-[55%] flex justify-center items-center relative">
        <div className="absolute w-[80px] h-[80px]  lg:w-[120px] lg:h-[120px]  md:w-[80px] md:h-[80px] right-0  top-0 lg:right-[-1.5%] bottom-0 md:top-0">
          <img src={aThree} alt="a-3" className="object-contain" />
        </div>
        <div className="w-[95%] md:w-[80%] xl:w-[65%] bg-black rounded-[1rem] h-fit flex flex-col items-center justify-center mt-0 gap-6 p-2 pt-6 pb-5  xl:pb-4 md:p-12 xl:p-6 ">
          <div className="w-full">
            <button
              onClick={handleGoBack}
              className=" text-white font-dm-sans p-2 md:p-0 "
            >
              Go to Homepage
            </button>
          </div>

          <div className="h-full w-full flex gap-5 flex-col items-center ">
            <img
              src={aOne}
              alt="a-1"
              className=" object-contain w-[100px] h-[30px] mb-5 mt-1"
            />
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
                  placeholder=" Password.."
                  className="rounded-2xl input-placeholder outline-none border-none bg-white p-2 w-full"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img
                          src={lockIcon}
                          className="w-[20px] h-[20px] bg-#B4B4B4"
                        />
                        <img src={line} alt="" className="h-7 ml-3" />
                        &nbsp;&nbsp;
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
                            <VisibilityOffOutlinedIcon
                              sx={{ color: "#B4B4B4" }}
                            />
                          ) : (
                            <VisibilityOutlinedIcon sx={{ color: "#B4B4B4" }} />
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
                    required: "Confirm password is required",
                  })}
                  placeholder="Confirm password.."
                  className="rounded-2xl input-placeholder outline-none border-none bg-white p-2 w-full"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img
                          src={lockIcon}
                          className="w-[20px] h-[20px] bg-#B4B4B4"
                        />
                        <img src={line} alt="" className="h-7 ml-3" />
                        &nbsp;&nbsp;
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
                            <VisibilityOffOutlinedIcon
                              sx={{ color: "#B4B4B4" }}
                            />
                          ) : (
                            <VisibilityOutlinedIcon sx={{ color: "#B4B4B4" }} />
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
                style="bg-[#EB2529] w-full flex justift-center items-center hover:bg-red-400 h-[55px] text-white focus-visible:outline-red-600"
              />
            </form>

            <div className=" justify-center flex gap-1 w-full ">
              <p className="font-dm-sans text-white text-center leading-6">
                Already have an account?
                <br />
                <p className="text-center">
                  {" "}
                  <Link
                    to="/login-user"
                    className="text-[15px] mx-1  hover:text-red-500 font-dm-sans text-[#EB2529] mt-3 mb-[2px]"
                  >
                    Click Here
                  </Link>
                  to Login
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        theme="dark"
        toastStyle={{ background: "#333", color: "#fff" }}
      />
      <div className="absolute w-[70px] h-[70px]   lg:w-[120px] lg:h-[120px]  md:w-[80px] md:h-[80px] left-0 bottom-10 md:bottom-[7rem]">
        <img src={aTwo} alt="a-w" className="object-contain" />
      </div>
    </div>
  );
};

export default SignUpUser;
