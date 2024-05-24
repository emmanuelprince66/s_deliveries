import React from "react";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";
import hvOne from "../images/hv-1.svg";
import hvTwo from "../images/hv-2.svg";
import kvOne from "../images/kv-1.png";
import gifOne from "../images/sv-g.gif";
import book from "../images/book.svg";
import kvTwo from "../images/kv-2.png";
import kvFour from "../images/kv-4.png";
import kvThree from "../images/kv-3.png";
import lImgOne from "../images/l-img1.png";
import lTagOne from "../images/l-tag1.svg";
import lTagTwo from "../images/l-tag2.svg";
import rpOne from "../images/rp-1.svg";
import rpTwo from "../images/rp-2.svg";
import rpThree from "../images/rp-3.svg";
import rpFour from "../images/rp-4.svg";
import lTagThree from "../images/l-tag3.svg";
import lTagFour from "../images/l-tag4.svg";
import kOne from "../images/k-1.svg";
import vOne from "../images/v-1.svg";
import kTwo from "../images/k-2.svg";
import kThree from "../images/k-3.svg";
import stary from "../images/stary.svg";
import kFour from "../images/k-4.svg";
import kFive from "../images/k-5.svg";
import kSix from "../images/k-6.svg";
import uvOne from "../images/uv-1.png";
import uvTwo from "../images/uv-2.png";
import uvThree from "../images/uv-3.png";
import uvFour from "../images/uv-4.png";
import uOne from "../images/u-1.png";
import gOne from "../images/g-1.png";
import pvOne from "../images/pv-1.png";
import pvTwo from "../images/pv-2.png";
import gTwo from "../images/g-2.png";
import gThree from "../images/g-3.png";
import uTwo from "../images/u-2.png";
import mOne from "../images/m-1.png";
import mTwo from "../images/m-2.png";
import mThree from "../images/m-3.png";
import mFour from "../images/m-4.png";
import uThree from "../images/u-3.png";
import uFour from "../images/u-4.png";
import re from "../images/redirect.svg";
import star from "../images/star.svg";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import aOne from "../images/a-1.png"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
const LandingPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="h-full md:min-w-[100%] lg:w-full w-full bg-primary_black_1 ">
      <div className="w-[85%] mx-auto justify-between items-center hidden md:flex p-3">
        <div className="w-[100px] h-[50px] md:h-[60px]  ">
          <img src={aOne} alt="a-1" className=" object-contain " />
        </div>
        <div className="flex items-center gap-2 m-5 ">
          <Link to="/login-admin">
            <button className="bg-transparent font-inter-sans text-white text-[16px] hover:text-[#DB363A] transition-colors duration-700 ease-in-out ">
              Login as Admin
            </button>
          </Link>
          <Link to="/login-user">
            <button className=" font-inter-sans text-white text-[16px] w-[100px] ml-3 rounded-sm  px-3 py-2 bg-[#DB363A] hover:bg-red-400 transition-colors duration-700 ease-in-out ">
              Sign In
            </button>
          </Link>
        </div>
      </div>

      {/* possibly hamburger menu for mobile */}
      <div className="w-full  md:hidden p-3">
        <div className="flex w-full justify-between items-center">
          <div className="w-[100px] h-[40px] md:h-[60px]">
            <img src={aOne} alt="a-1" className=" object-contain" />
          </div>

          <div>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 42, height: 42, background: "#DB363A" }}>
                  <MenuRoundedIcon sx={{ color: "#FFf" }} />
                </Avatar>
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className="w-full flex flex-col items-start gap-3 p-5">
            <Link to="login-admin">
              <p className="text-[20px] font-normal">Login as Admin</p>
            </Link>
            <Divider sx={{ width: "100%", background: "#DB363A" }} />

            <Link to="login-user">
              <p className="text-[20px] font-normal">Login as User</p>
            </Link>
            <Divider sx={{ width: "100%", background: "#DB363A" }} />
          </div>
        </Menu>
      </div>

      {/* possibly hamburger menu for mobile */}

      <div className="w-[100%] h-fit mx-auto flex flex-col items-center">
        <div className="w-full">
          <div className="mx-auto xl:max-w-[68.5%] md:max-w-[92.5%] flex-col   items-center justify-center">
            <div className="mx-auto lg:max-w-[88%]  relative  md:max-w-[80%] w-[93%] mt-[5%] text-start  md:text-center lg:text-center  flex-col ">
              {/* <p className="md:text-8xl    text-[48px]  font-dm-sans leading-[3rem] md:leading-[5rem] lg:leading-[6rem] text-white font-bold">
                Discover the spark <br />
                in each word!
              </p> */}
              <p className="md:text-8xl flex md:hidden lg:hidden   text-[48px]  font-dm-sans leading-[3rem] md:leading-[5rem] lg:leading-[6rem] text-white font-bold">
                Discover
                <br /> the spark in <br />
                each word!
              </p>
              <p className="md:text-8xl hidden md:block lg:block text-[48px]  font-dm-sans leading-[3rem] md:leading-[5rem] lg:leading-[6rem] text-white font-bold">
                Discover the spark <br />
                in each word!
              </p>
              <p className="md:text-[20px] w-full flex md:hidden lg:hidden   md:w-[75%] lg:w-[65%] mx-auto font-dm-sans leading-5  lg:leading-7 md:leading-7 text-[15px] text-[#D0D0D0] my-5">
                Unveil every word, jargon, acronym, <br /> and explore the realm
                of Sterling
                <br /> products and beyond.
              </p>
              <p className="md:text-[20px] w-full hidden  md:flex lg:flex   md:w-[75%] lg:w-[75%]  mx-auto font-dm-sans leading-5  lg:leading-7 md:leading-7 text-[15px] text-[#D0D0D0] my-5">
                Unveil every word, jargon, acronym, and explore the realm of
                Sterling products and beyond.
              </p>

              <Link to="/user-signup">
                <button className=" text-white font-inter-sans  text-[18px] w-[172px]  h-[50px] rounded-sm  px-3 py-2 hover:bg-red-400 bg-[#DB363A]  transition-colors duration-700 ease-in-out ">
                  Get Started
                </button>
              </Link>

              <p className="text-[10px] md:text-[14px] lg:text-[14px] text-[#A2A2A2] mt-4 font-inter-sans">
                Find meaning for 5000+ words, and terminologies.
              </p>

              <div className="absolute hidden md:flex lg:flex  h-[80px] w-[80px] md:h-[220px] md:w-[220px] xl:h-[320px] xl:w-[320px]  right-[-12px] bottom-[4rem]  md:right-[-6rem] md:bottom-[10rem]    xl:bottom-[-1rem] xl:right-[-13rem]">
                <img
                  src={stary}
                  alt="sta"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="mt-[10%] sm:flex md:hidden lg:hidden  w-full  justify-center items-center ">
                <img src={stary} alt="stary" className="object-cover" />
              </div>
            </div>
          </div>

          {/*  */}
          {/* <div className="w-full mt-[4rem] mb-[5rem]">
          <img src={lImgOne} alt="l-one" />
        </div> */}
          {/* <div className="mt-[4rem] mb-[5rem] w-full flex justify-end items-center bg-black p-3 lg:p-10">
            <div className=" w-[100%] h-[55%]  lg:w-[55%] lg:h-[55%] mx-auto">
              <img src={gifOne} alt="g-fit" className="rounded-2xl" />
            </div>
          </div> */}
          <div className="mt-[4rem] mb-[5rem] w-full flex justify-end items-center bg-black p-3 lg:p-10">
            <div className="w-[100%] h-[55%] lg:w-[55%] lg:h-[55%] mx-auto">
              <video
                src="/videos/vid.mp4"
                className="rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            </div>
          </div>

          <div className="mx-auto xl:max-w-[68.5%] md:max-w-[92.5%] flex-col  items-center justify-center px-3 lg:px-0 ">
            <div className="w-full mx-auto grid grid-cols-1 mt-[10%] gap-5   ">
              <p className="col-span-1 text-white  md:text-[38px] text-[30px] font-satoshi  text-center mb-3">
                What makes Sterling Dictionary different?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start w-[80%] md:w-full lg:w-full mx-auto  my-2">
                <div className="flex flex-col gap-2 w-full  mb-5 items-center h-full">
                  <div className="w-full flex-col flex justify-center lg:items-start md:items-center items-center gap-4">
                    <img
                      src={rpOne}
                      alt="l-tag-1"
                      className="w-[38px] h-[38px] mb-2 lg:mb-0 rounded-[8px]"
                    />
                    <p className="text-white  text-[20px] font-satoshi">
                      Sterling Products
                    </p>
                    <p className="text-[#B9B9B9] text-[14px] mt-[-6px]  lg:text-start text-center  leading-5 font-inter-sans">
                      Know more about various sterling products.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full mb-5 items-start h-full">
                  <div className="w-full flex-col flex justify-center lg:items-start md:items-center items-center gap-4">
                    <img
                      src={rpTwo}
                      alt="l-tag-2"
                      className="w-[38px] h-[38px] mb-2 lg:mb-0 rounded-[8px]"
                    />
                    <p className="text-white text-[20px] font-satoshi">
                      Banking Jargons
                    </p>
                    <p className="text-[#B9B9B9] hidden md:hidden lg:flex  lg:text-start   text-[14px] leading-5 font-inter-sans">
                      Have quick look-up of words <br /> and acronyms.
                    </p>
                    <p className="text-[#B9B9B9]  lg:hidden mt-[-6px]    lg:text-start  text-center  text-[14px] leading-5 font-inter-sans">
                      Have quick look-up of words and acronyms.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full  md:w-full  ml-0   mb-5 items-center h-full">
                  <div className="w-full flex-col flex justify-center lg:items-start md:items-center items-center gap-4">
                    <img
                      src={rpThree}
                      alt="l-tag-2"
                      className="w-[38px] h-[38px] mb-2 md:mb-0 rounded-[8px]"
                    />
                    <p className="text-white text-[20px]  font-satoshi">
                      Terminologies
                    </p>
                    <p className="text-[#B9B9B9] hidden md:hidden lg:flex   lg:text-start  text-[14px] leading-5 font-inter-sans">
                      All inclusive essential <br />
                      conversion & automation tools.
                    </p>
                    <p className="text-[#B9B9B9]  lg:hidden mt-[-6px]  text-center   lg:text-start  text-[14px] leading-5 font-inter-sans">
                      All inclusive essential conversion & auto mation tools.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full  mb-5 items-center h-full">
                  <div className="w-full flex-col flex justify-center lg:items-start md:items-center items-center gap-4">
                    <img
                      src={rpFour}
                      alt="l-tag-2"
                      className="w-[38px] h-[38px] mb-2 md:mb-0 rounded-[8px]"
                    />
                    <p className="text-white text-[20px]   font-satoshi">
                      Integrate with Outlook
                    </p>
                    <p className="text-[#B9B9B9]   hidden md:hidden lg:flex  text-[14px] leading-5 font-inter-sans">
                      Hover on a word in your email <br />
                      and the meaning will pop up.
                    </p>
                    <p className="text-[#B9B9B9] lg:hidden mt-[-6px]  lg:text-start text-center text-[14px] leading-5 font-inter-sans">
                      Hover on a word in your email and the meaning will pop up.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="w-full mx-auto mt-[15%] text-center">
              <div className="flex flex-col gap-2 items-center mb-5">
                <p className="text-white md:text-[38px] text-[30px] font-satoshi  text-center">
                  Join our community,
                </p>
                <p className="text-white md:text-[38px] text-[30px] font-satoshi  text-center">
                  Know more, Communicate better!
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:justify-center md:gap-10 w-full items-center">
                <div className="flex flex-col items-center">
                  <img src={uvOne} alt="u-1" />
                </div>
                <div className="flex flex-col items-center">
                  <img src={uvTwo} alt="u-1" />
                </div>
                <div className="flex flex-col items-center">
                  <img src={uvThree} alt="u-1" />
                </div>
                <div className="flex flex-col items-center">
                  <img src={uvFour} alt="u-1" />
                </div>
              </div>
            </div>
            {/*  */}

            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-2  gap-10 mt-[15%] w-full ">
              <div className="col-span-1 flex flex-col items-start justify-center  gap-4">
                <p className="md:text-[38px] text-[30px] font-satoshi  text-white">
                  Learn about,
                </p>
                <p className="md:text-[38px] text-[30px] text-white font-satoshi  mt-[-15px] mb-4">
                  Sterling Products!
                </p>

                <div className="flex items-center gap-2">
                  <img src={star} alt="star" className="w-[18px] h-[18px]" />
                  <p className="text-[#D0D0D0] text-[14px]  font-inter-sans">
                    Simple definitions that keep you aware
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={star} alt="star" className="w-[18px] h-[18px]" />
                  <p className="text-[#D0D0D0] text-[14px] font-inter-sans ">
                    Ask less questions
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={star} alt="star" className="w-[18px] h-[18px]" />
                  <p className="text-[#D0D0D0] text-[14px]  font-inter-sans">
                    Know about our brands
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={star} alt="star" className="w-[18px] h-[18px]" />
                  <p className="text-[#D0D0D0] text-[14px]  font-inter-sans">
                    Access information anytime
                  </p>
                </div>

                <Link to="/user-signup">
                  <button className=" text-white text-[14px] w-[150px] mt-3 font-inter-sans  rounded-sm  px-3 py-3 bg-transparent border border-gray-100 hover:text-[#DB363A]  transition-colors duration-700 ease-in-out ">
                    Get Started
                  </button>
                </Link>
              </div>

              <div className="col-span-1">
                <img src={pvOne} alt="m-1" />
              </div>
            </div>
            {/*  */}
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[10rem]  gap-10   md:mt-[15%] mt-[25%]">
              <div className="col-span-1 order-last md:order-first">
                <img src={pvTwo} alt="m-2" />
              </div>
              <div className="col-span-1 order-first md:order-last flex flex-col items-start justify-center  gap-4">
                <p className="md:text-[38px] font-satoshi  text-[30px] text-white">
                  Quick word lookup
                </p>
                <p className="md:text-[38px] font-satoshi mt-[-15px] mb-4 text-[30px] text-white">
                  on Outlook
                </p>

                <div className="flex items-center gap-2">
                  <img src={star} alt="star" className="w-[18px] h-[18px]" />
                  <p className="text-[#D0D0D0] text-[14px] font-inter-sans">
                    Just hover and see meaning popup
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={star} alt="star" className="w-[18px] h-[18px]" />
                  <p className="text-[#D0D0D0] text-[14px] font-inter-sans">
                    Make your email a learning point
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={star} alt="star" className="w-[18px] h-[18px]" />
                  <p className="text-[#D0D0D0] text-[14px] font-inter-sans">
                    Get help when you need it
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={star} alt="star" className="w-[18px] h-[18px]" />
                  <p className="text-[#D0D0D0] text-[14px] font-inter-sans">
                    Engage your email
                  </p>
                </div>

                <Link to="/user-signup">
                  <button className=" text-white text-[14px] w-[150px] mt-3 font-inter-sans  rounded-sm  px-3 py-3 bg-transparent border border-gray-100 hover:text-[#DB363A]  transition-colors duration-700 ease-in-out ">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            {/*  */}

            {/*  */}
            <div className="w-full text-center mt-[15%]">
              <p className=" text-white  text-[30px] md:text-[38px] mb-6 font-satoshi  ">
                Read about our Executive Management in a glance
              </p>
              <div className="flex flex-col md:flex-row md:justify-between justify-center items-start w-full">
                <div className="flex flex-col gap-[10rem] items-center justify-center mx-auto w-full">
                  <Link
                    className="w-full"
                    to="https://sterling.ng/executive-staff/olatunji-mayaki/"
                  >
                    <div className="md:h-[80%] w-[80%] md:mx-0 mx-auto mb-9 md:mb-3">
                      {/* Added margin bottom to create space */}
                      <img
                        src={kvTwo}
                        alt="g-2"
                        className="w-full h-full object-cover"
                      />

                      <div className="  flex-col flex items-start gap-2 mt-3">
                        <p className="text-[24px] text-white sm:text-[20px] font-satoshi ">
                          Olatunji Mayaki
                        </p>{" "}
                        {/* Add your text here */}
                        <p className="text-left text-[#B9B9B9] text-[14px] font-inter-sans leading-5 ">
                          Chairman, <br /> Sterling Bank Limited.
                        </p>
                        {/* Add your text here */}
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col items-center w-full">
                  <Link
                    className="w-full mx-auto"
                    to="https://sterling.ng/executive-staff/abubakar-suleiman/"
                  >
                    <div className="md:h-[80%] w-[80%]  md:mx-0 mx-auto mb-9 md:mb-3">
                      {/* Added margin bottom to create space */}
                      <img
                        src={kvOne}
                        alt="g-1"
                        className="w-full h-full object-cover"
                      />
                      <div className="  flex flex-col items-start gap-2 mt-3">
                        <p className="text-white text-[24px] sm:text-[20px] font-satoshi">
                          Abubakar Suleiman
                        </p>
                        <p className="text-[#B9B9B9] text-left  font-inter-sans leading-5 text-[14px]">
                          Chief Executive Officer, Managing Director, and
                          Director of Sterling bank Limited. 
                        </p>{" "}
                        {/* Add your text here */}
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col items-center w-full">
                  <Link
                    className="w-full"
                    to="https://sterling.ng/executive-staff/tunde-adeola/"
                  >
                    <div className="md:h-[80%] w-[80%] md:mx-0 mx-auto mb-9 md:mb-3">
                      {/* Added margin bottom to create space */}
                      <img
                        src={kvFour}
                        alt="g-1"
                        className="w-full h-full object-cover"
                      />
                      <div className="  flex flex-col items-start gap-2 mt-3">
                        <p className="text-white text-[24px] sm:text-[20px] font-satoshi">
                          Tunde Adeola
                        </p>
                        <p className="text-[#B9B9B9] text-left  font-inter-sans leading-5 text-[14px]">
                          Executive Director, Commercial & Institutional
                          Banking. 
                        </p>{" "}
                        {/* Add your text here */}
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col items-center w-full ">
                  <Link
                    className="w-full"
                    to="https://sterling.ng/executive-staff/raheem-owodeyi/"
                  >
                    <div className="md:h-[80%] w-[80%]  md:mx-0 mx-auto mb-9 md:mb-3">
                      {/* Added margin bottom to create space */}
                      <img
                        src={kvThree}
                        alt="g-2"
                        className="w-full h-full object-cover"
                      />
                      <div className="flex-col flex items-start gap-2 mt-3">
                        <p className="text-[24px] text-white sm:text-[20px] font-satoshi ">
                          Raheem Owodeyi
                        </p>
                        <p className="text-left text-[#B9B9B9] text-[14px] leading-5 font-inter-sans ">
                          Executive Director, Operations & Retail Banking/COO.
                        </p>{" "}
                        {/* Add your text here */}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* footer */}
          <div className="w-[100%] md:w-[90%] lg:w-[90%] mx-auto  flex justify-between items-center">
            <div className="w-[100px] h-[100px] lg:w-[250px] lg:h-[250px]">
              <img src={hvOne} alt="h-v" className="object-cover" />
            </div>

            <p className="text-[#BCBCBC] font-inter-sans text-center  border-t-[#BCBCBC] border-t pt-4 text-[15px] md:text-[20px] lg:text-[20px]">
              &copy; Sterling Bank Limited
            </p>

            <div className="w-[100px] h-[100px] lg:w-[250px] lg:h-[250px]">
              <img src={hvTwo} alt="h-v" className="object-cover" />
            </div>

            {/* <div className="grid md:grid-cols-2 grid-cols-1 md:gap-2 gap-10">
                <div className="col-span-1 md:w-[90%] lg:max-w-[70%] w-full">
                  <div className="w-full flex flex-col items-start gap-2">
                    <div className="flex gap-1 items-center mx-auto md:mx-0 ">
                      <div className="w-[100px] h-[40px] md:h-[60px]">
                        <img src={aOne} alt="a-1" className=" object-contain" />
                      </div>
                    </div>
                    <p className="text-[#BCBCBC] font-inter-sans leading-7 text-center md:text-start text-[18px] mt-3 mb-6">
                      Effortlessly turn your ideas into a fully functional,
                      responsive, no-code SaaS website.
                    </p>

                    <div className="flex justify-between items-center w-full mt-9">
                      <img src={kOne} alt="k-1" />
                      <img src={kTwo} alt="k-2" />
                      <img src={kThree} alt="k-3" />
                      <img src={kFour} alt="k-4" />
                      <img src={kFive} alt="k-5" />
                      <img src={kSix} alt="k-6" />
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="w-full flex justify-between items-start">
                    <div className="flex flex-col items-start gap-4">
                      <p className="text-[17px] md:text-[20px] text-white font-bold font-inter-sans">
                        Product
                      </p>
                      <p className="text-[17px] md:text-[20px] text-[#676767] font-inter-sans">
                        Features
                      </p>
                      <p className="text-[17px] md:text-[20px] text-[#676767] font-inter-sans">
                        Integrations
                      </p>
                      <p className="text-[17px] md:text-[20px] text-[#676767] font-inter-sans">
                        Updates
                      </p>
                      <p className="text-[17px] md:text-[20px] text-[#676767] font-inter-sans">
                        FAQ
                      </p>
                      <p className="text-[17px] md:text-[20px] text-[#676767] font-inter-sans">
                        Pricing
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-4 ">
                      <p className="text-[17px] md:text-[20px] text-white font-bold font-inter-sans">
                        Company
                      </p>
                      <p className="text-[17px] md:text-[20px] text-[#676767] font-inter-sans">
                        About
                      </p>
                      <p className="text-[17px] md:text-[20px] text-[#676767] font-inter-sans">
                        Blog
                      </p>
                      <p className="text-[17px] md:text-[20px] text-[#676767] font-inter-sans">
                        Careers
                      </p>
                      <p className="text-[17px] md:text-[20px] text-[#676767] font-inter-sans">
                        Manifesto
                      </p>
                      <p className="text-[17px] md:text-[20px] text-[#676767] font-inter-sans">
                        Press
                      </p>
                      <p className="text-[17px] md:text-[20px] text-[#676767] font-inter-sans">
                        Contact
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <p className="text-[17px] md:text-[20px] text-white font-bold font-inter-sans">
                        Resources
                      </p>
                      <p className="text-[17px] md:text-[20px] text-[#676767] font-inter-sans">
                        Examples
                      </p>
                      <p className="text-[17px] md:text-[20px] text-[#676767] font-inter-sans">
                        Community
                      </p>
                      <p className="text-[17px] md:text-[20px] text-[#676767] font-inter-sans">
                        Guides
                      </p>
                      <p className="text-[17px] md:text-[20px] text-[#676767] font-inter-sans">
                        Docs
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
          </div>
          {/* footer */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
