import React from "react";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";
import lImgOne from "../images/l-img1.png";
import lTagOne from "../images/l-tag1.svg";
import lTagTwo from "../images/l-tag2.svg";
import lTagThree from "../images/l-tag3.svg";
import lTagFour from "../images/l-tag4.svg";
import kOne from "../images/k-1.svg";
import vOne from "../images/v-1.svg";
import kTwo from "../images/k-2.svg";
import kThree from "../images/k-3.svg";
import kFour from "../images/k-4.svg";
import kFive from "../images/k-5.svg";
import kSix from "../images/k-6.svg";
import uOne from "../images/u-1.png";
import gOne from "../images/g-1.png";
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
    <div className="h-full w-full bg-primary_black_1 p-3">
      <div className="w-[90%] mx-auto justify-end hidden md:flex">
        <div className="flex items-center gap-2 m-5 ">
          <Link to="/login-admin">
            <button className="bg-transparent font-inter-sans text-white text-[16px] hover:text-[#DB363A] transition-colors duration-700 ease-in-out ">
              Login as Admin
            </button>
          </Link>
          <Link to="/login-user">
            <button className=" font-inter-sans text-white text-[16px] w-[100px] ml-3 rounded-sm  px-3 py-2 bg-[#DB363A] hover:text-black transition-colors duration-700 ease-in-out ">
              Sign In
            </button>
          </Link>
        </div>
      </div>

      {/* possibly hamburger menu for mobile */}
      <div className="flex w-full justify-end md:hidden">
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
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
        </Box>
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

      <div className="mx-auto md:max-w-[62.5%] flex-col items-center  justify-center">
        <div className="mx-auto md:max-w-[100%] w-[93%] mt-[5%]  text-center  flex-col ">
          <p className="md:text-8xl text-[48px] font-dm-sans  leading-10 text-white font-bold">
            Find a meaning for every word.
          </p>
          <p className="md:text-[20px] w-[90%] mx-auto font-dm-sans  text-[15px] text-[#D0D0D0] my-5">
            With Sterling Dictionary, you do not miss a word, learn about
            jargons and acronyms, familiarise with various Sterling products and
            more...
          </p>

          <Link to="/user-signup">
            <button className=" text-white text-[18px] w-[172px]  h-[50px] rounded-sm  px-3 py-2 bg-[#EB2529] hover:text-black transition-colors duration-700 ease-in-out ">
              Get Started
            </button>
          </Link>

          <p className="text-[14px] text-[#A2A2A2] mt-4 font-inter-sans">
            Find meaning for 5,000+ words, terminologies and jargons
          </p>
        </div>
        {/*  */}
        <div className="w-full mt-[4rem] mb-[5rem]">
          <img src={lImgOne} alt="l-one" />
        </div>

        <div className="w-full grid grid-cols-1 mt-[20%] gap-5">
          <p className="col-span-1 text-white text-[38px] font-satoshi  text-center">
            What makes Sterling Dictionary different?
          </p>
          <div className="col-span-1 w-full  flex flex-col md:flex-row gap-3 items-center  my-2">
            <div className="flex flex-col gap-2 w-full md:w-[70%] mb-5 md:mb-0  items-start h-full ">
              <img src={lTagOne} alt="l-tag-1" className="w-[38px] h-[38px]" />
              <p className="text-white text-[20px] font-satoshi ">
                Sterling Products
              </p>
              <p className="text-[#B9B9B9] text-[18px] md:text-[14px]  leading-5 font-inter-sans  ">
                Know more about various sterling products.
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full mb-5 md:mb-0  md:w-[70%] items-start h-full ">
              <img src={lTagTwo} alt="l-tag-2" className="w-[38px] h-[38px]" />
              <p className="text-white text-[20px] font-satoshi ">
                Banking Jargons
              </p>
              <p className="text-[#B9B9B9] text-[18px] md:text-[14px]  leading-5 font-inter-sans ">
                Have quick look-up of words and acronyms..
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[80%] mb-5 md:mb-0  items-start h-full">
              <img src={lTagTwo} alt="l-tag-2" className="w-[38px] h-[38px]" />
              <p className="text-white text-[20px] font-satoshi ">
                Terminologies
              </p>
              <p className="text-[#B9B9B9] text-[18px] md:text-[14px] leading-5 font-inter-sans  ">
                All inclusive essential <br />
                conversion & automation tools.
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[80%] items-start h-full">
              <img src={lTagFour} alt="l-tag-4" className="w-[38px] h-[38px]" />
              <p className="text-white text-[20px] font-satoshi ">
                Integrate with Outlook
              </p>
              <p className="text-[#B9B9B9] text-[18px] md:text-[14px]  leading-5 font-inter-sans  ">
                Hover on a word in your email and the meaning will pop.
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="w-full mx-auto mt-[15%] text-center">
          <div className="flex flex-col gap-2 items-center mb-5">
            <p className="text-white md:text-[38px] text-[30px] font-satoshi  text-center">
              Join our merchants
            </p>
            <p className="text-white md:text-[38px] text-[30px] font-satoshi  text-center">
              who succeed in selling with Uvodo
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center md:gap-10 w-full items-center">
            <div className="flex flex-col items-center">
              <img src={uOne} alt="u-1" />
              <div className="flex gap-2 items-center">
                <img src={re} alt="re" />
                <span className="text-[#A2A2A2] text-[16px] pt-1 font-inter-sans ">
                  Silk by Jamilia
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src={uTwo} alt="u-1" />
              <div className="flex gap-2 items-center">
                <img src={re} alt="re" />
                <span className="text-[#A2A2A2] text-[16px] font-inter-sans  pt-1">
                  Kitpet
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src={uThree} alt="u-1" />
              <div className="flex gap-2 items-center">
                <img src={re} alt="re" />
                <span className="text-[#A2A2A2] text-[16px] pt-1 font-inter-sans ">
                  Holy Roses
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src={uFour} alt="u-1" />
              <div className="flex gap-2 items-center">
                <img src={re} alt="re" />
                <span className="text-[#A2A2A2] text-[16px] pt-1 font-inter-sans ">
                  `A Voir
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-2  gap-10 mt-[15%]">
          <div className="col-span-1 flex flex-col items-start justify-center  gap-4">
            <p className="md:text-[38px] text-[30px] font-satoshi  text-white">
              Mobile or Desktop,
            </p>
            <p className="md:text-[38px] text-[30px] text-white font-satoshi  mt-[-15px] mb-4">
              all responsive!
            </p>

            <div className="flex items-center gap-3">
              <img src={star} alt="star" className="w-[18px] h-[18px]" />
              <p className="text-[#D0D0D0] text-[18px] md:text-[14px] font-inter-sans">
                Mobile first storefront
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={star} alt="star" className="w-[18px] h-[18px]" />
              <p className="text-[#D0D0D0] text-[18px] md:text-[14px] font-inter-sans ">
                No code theme editor
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={star} alt="star" className="w-[18px] h-[18px]" />
              <p className="text-[#D0D0D0] text-[18px] md:text-[14px]  font-inter-sans">
                Custom brandinig
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={star} alt="star" className="w-[18px] h-[18px]" />
              <p className="text-[#D0D0D0] text-[18px] md:text-[14px]  font-inter-sans">
                Themes for every niche(soon)
              </p>
            </div>

            <Link to="">
              <button className=" text-white text-[16px] w-[150px] mt-3 font-inter-sans  rounded-sm  px-3 py-3 bg-transparent border border-gray-100 hover:text-black transition-colors duration-700 ease-in-out ">
                Learn More
              </button>
            </Link>
          </div>

          <div className="col-span-1">
            <img src={mOne} alt="m-1" />
          </div>
        </div>
        {/*  */}
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[10rem]  gap-10   md:mt-[15%] mt-[25%]">
          <div className="col-span-1">
            <img src={mTwo} alt="m-2" />
          </div>
          <div className="col-span-1 flex flex-col items-start justify-center  gap-4">
            <p className="md:text-[38px] font-satoshi  text-[30px] text-white">
              Admin Panel with all
            </p>
            <p className="md:text-[38px] font-satoshi mt-[-15px] mb-4 text-[30px] text-white">
              essential tools
            </p>

            <div className="flex items-center gap-3">
              <img src={star} alt="star" className="w-[18px] h-[18px]" />
              <p className="text-[#D0D0D0] text-[18px] font-inter-sans">
                Mobile first admin panel
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={star} alt="star" className="w-[18px] h-[18px]" />
              <p className="text-[#D0D0D0] text-[18px] font-inter-sans">
                Enabling payment gateway in clicks
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={star} alt="star" className="w-[18px] h-[18px]" />
              <p className="text-[#D0D0D0] text-[18px] font-inter-sans">
                Product and other management
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={star} alt="star" className="w-[18px] h-[18px]" />
              <p className="text-[#D0D0D0] text-[18px] font-inter-sans">
                Assigning user roles
              </p>
            </div>

            <Link to="">
              <button className=" text-white text-[16px] w-[150px] font-inter-sans mt-3 rounded-sm  px-3 py-3 bg-transparent border border-gray-100 hover:text-black transition-colors duration-700 ease-in-out ">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-2  gap-10   md:mt-[15%] mt-[25%]">
          <div className="col-span-1 flex flex-col items-start justify-center  gap-4">
            <p className="md:text-[38px] font-satoshi text-[30px] text-white">
              Local & global
            </p>
            <p className="md:text-[38px] font-satoshi text-[30px] mb-4 mt-[-15px] text-white">
              payment gateways
            </p>

            <div className="flex items-center gap-3">
              <img src={star} alt="star" className="w-[18px] h-[18px]" />
              <p className="text-[#D0D0D0] text-[18px] font-inter-sans">
                Global payment gateways
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={star} alt="star" className="w-[18px] h-[18px]" />
              <p className="text-[#D0D0D0] text-[18px] font-inter-sans">
                Local payment gateways
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={star} alt="star" className="w-[18px] h-[18px]" />
              <p className="text-[#D0D0D0] text-[18px] font-inter-sans">
                Manual payment options
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={star} alt="star" className="w-[18px] h-[18px]" />
              <p className="text-[#D0D0D0] text-[18px] font-inter-sans">
                Local currencies
              </p>
            </div>

            <Link to="">
              <button className=" text-white text-[16px] font-inter-sans w-[150px] mt-3 rounded-sm  px-3 py-3 bg-transparent border border-gray-100 hover:text-black transition-colors duration-700 ease-in-out ">
                Learn More
              </button>
            </Link>
          </div>

          <div className="col-span-1">
            <img src={mThree} alt="m-3" />
          </div>
        </div>
        {/*  */}
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[5rem]  gap-5  md:mt-[15%] mt-[25%]">
          <div className="col-span-1 ">
            <img src={mFour} alt="m-4" />
          </div>
          <div className="col-span-1  w-full md:min-w-[24rem] flex flex-col items-start justify-center  gap-4">
            <p className="text-[38px] font-satoshi text-white">
              Inventory and shipping
            </p>
            <p className="text-[38px] font-satoshi mb-4 mt-[-15px] text-white">
              management tools
            </p>

            <div className="flex items-center gap-3">
              <img src={star} alt="star" className="w-[18px] h-[18px]" />
              <p className="text-[#D0D0D0] text-[18px] font-inter-sans">
                Inventory management
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={star} alt="star" className="w-[18px] h-[18px]" />
              <p className="text-[#D0D0D0] text-[18px] font-inter-sans">
                Shipping rules
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={star} alt="star" className="w-[18px] h-[18px]" />
              <p className="text-[#D0D0D0] text-[18px] font-inter-sans">
                Shipping service integration
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={star} alt="star" className="w-[18px] h-[18px]" />
              <p className="text-[#D0D0D0] text-[18px] font-inter-sans">
                Country specific tax management
              </p>
            </div>

            <Link to="">
              <button className="font-inter-sans text-white text-[16px] w-[150px] mt-3 rounded-sm  px-3 py-3 bg-transparent border border-gray-100 hover:text-black transition-colors duration-700 ease-in-out ">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="w-full text-center mt-[15%]">
          <p className=" text-white  text-[30px] md:text-[38px] mb-4 font-satoshi ">
            Get Uvodo for your industry
          </p>
          <div className="flex flex-col md:flex-row md:justify-between items-start w-full">
            <div className="flex flex-col gap-[10rem] items-center  w-full">
              <div className="md:h-[80%] w-[80%] mb-4">
                {/* Added margin bottom to create space */}
                <img
                  src={gOne}
                  alt="g-1"
                  className="w-full h-full object-cover"
                />
                <div className="  flex flex-col items-start gap-2 mt-3">
                  <p className="text-white text-[24px] sm:text-[20px] font-satoshi">
                    Local Businesses
                  </p>
                  <p className="text-[#B9B9B9] text-left  font-inter-sans text-[14px]">
                    Sell locally on Whatsapp and Cash On Delivery payment
                    methods
                  </p>{" "}
                  {/* Add your text here */}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="md:h-[80%] w-[80%]  mb-4">
                {/* Added margin bottom to create space */}
                <img
                  src={gTwo}
                  alt="g-2"
                  className="w-full h-full object-cover"
                />

                <div className="  flex-col flex items-start gap-2 mt-3">
                  <p className="text-[24px] text-white sm:text-[20px] font-satoshi ">
                    Small businesses
                  </p>{" "}
                  {/* Add your text here */}
                  <p className="text-left text-[#B9B9B9] text-[18px] font-inter-sans sm:text-[14px]">
                    Move your retail business online and start selling products
                    on a free website.
                  </p>
                  {/* Add your text here */}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full ">
              <div className="md:h-[80%] w-[80%]  mb-4">
                {/* Added margin bottom to create space */}
                <img
                  src={gThree}
                  alt="g-2"
                  className="w-full h-full object-cover"
                />
                <div className="flex-col flex items-start gap-2 mt-3">
                  <p className="text-[24px] text-white sm:text-[20px] font-satoshi ">
                    Social media sellers
                  </p>
                  <p className="text-left text-[#B9B9B9] text-[18px] font-inter-sans sm:text-[14px]">
                    Increase your Instagram sales with Uvodo's all-in-one
                    eCommerce platform.
                  </p>{" "}
                  {/* Add your text here */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="w-full md:mt-[15%] mb-8 mt-[25%] ">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-2 gap-10">
            <div className="col-span-1 md:max-w-[70%] w-full">
              <div className="w-full flex flex-col items-start gap-2">
                <div className="flex gap-1 items-center">
                  <span className="flex  items-center">
                    <img src={vOne} alt="v-1" className="mr-[1px]" />
                    <img src={vOne} alt="v-1" />
                  </span>
                  <p className="text-[#676767] text-[28px]">
                    Sterling Dictionary
                  </p>
                </div>
                <p className="text-[#BCBCBC] font-inter-sans leading-7 text-[18px] mt-3 mb-6">
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
                  <p className="text-[20px] text-white font-bold font-inter-sans">
                    Product
                  </p>
                  <p className="text-[20px] text-[#676767] font-inter-sans">
                    Features
                  </p>
                  <p className="text-[20px] text-[#676767] font-inter-sans">
                    Integrations
                  </p>
                  <p className="text-[20px] text-[#676767] font-inter-sans">
                    Updates
                  </p>
                  <p className="text-[20px] text-[#676767] font-inter-sans">
                    FAQ
                  </p>
                  <p className="text-[20px] text-[#676767] font-inter-sans">
                    Pricing
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4 ">
                  <p className="text-[20px] text-white font-bold font-inter-sans">
                    Company
                  </p>
                  <p className="text-[20px] text-[#676767] font-inter-sans">
                    About
                  </p>
                  <p className="text-[20px] text-[#676767] font-inter-sans">
                    Blog
                  </p>
                  <p className="text-[20px] text-[#676767] font-inter-sans">
                    Careers
                  </p>
                  <p className="text-[20px] text-[#676767] font-inter-sans">
                    Manifesto
                  </p>
                  <p className="text-[20px] text-[#676767] font-inter-sans">
                    Press
                  </p>
                  <p className="text-[20px] text-[#676767] font-inter-sans">
                    Contact
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4">
                  <p className="text-[20px] text-white font-bold font-inter-sans">
                    Resources
                  </p>
                  <p className="text-[20px] text-[#676767] font-inter-sans">
                    Examples
                  </p>
                  <p className="text-[20px] text-[#676767] font-inter-sans">
                    Community
                  </p>
                  <p className="text-[20px] text-[#676767] font-inter-sans">
                    Guides
                  </p>
                  <p className="text-[20px] text-[#676767] font-inter-sans">
                    Docs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
      </div>
    </div>
  );
};

export default LandingPage;
