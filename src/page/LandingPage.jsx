import React from "react";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";
import lImgOne from "../images/l-img1.png";
import lTagOne from "../images/l-tag1.svg";
import lTagTwo from "../images/l-tag2.svg";
import lTagThree from "../images/l-tag3.svg";
import lTagFour from "../images/l-tag4.svg";
import kOne from "../images/k-1.svg";
import kTwo from "../images/k-2.svg";
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
const LandingPage = () => {
  return (
    <div className="h-full w-full bg-primary_black_1 p-3">
      <div className="w-full flex justify-end  ">
        <div className="flex items-center gap-2 ">
          <button className="bg-transparent text-white text-[16px] hover:text-[#DB363A] transition-colors duration-700 ease-in-out` ">
            Pricing
          </button>
          <div className="h-[20px] w-[1px] bg-gray-200 mx-2" />
          <Link to="">
            <button className="bg-transparent text-white text-[16px] hover:text-[#DB363A] transition-colors duration-700 ease-in-out ">
              Sign In
            </button>
          </Link>
          <Link to="">
            <button className=" text-white text-[16px] w-[100px] ml-3 rounded-sm  px-3 py-2 bg-[#DB363A] hover:text-black transition-colors duration-700 ease-in-out ">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* possibly hamburger menu for mobile */}
      {/* possibly hamburger menu for mobile */}

      <div className="mx-auto md:max-w-[80%] flex-col items-center justify-center">
        <div className="mx-auto md:max-w-[66%] w-[90%] mt-[10%]  text-center flex-col ">
          <p className="md:text-8xl text-2xl  leading-10  text-white font-bold">
            Find a meaning for every word.
          </p>
          <p className="md:text-[20px] text-[10px] text-[#D0D0D0] my-5">
            With Sterling Dictionary, you do not miss a word, learn about
            jargons and acronyms, familiarise with various Sterling products and
            more...
          </p>

          <Link to="">
            <button className=" text-white text-[18px] w-[172px] rounded-sm  px-3 py-2 bg-[#DB363A] hover:text-black transition-colors duration-700 ease-in-out ">
              Get Started
            </button>
          </Link>

          <p className="text-[14px] text-[#A2A2A2] my-3">
            Find meaning for 5,000+ words, terminologies and jargons
          </p>
        </div>
        {/*  */}
        <div className="w-full mt-[3rem] mb-[4rem]">
          <img src={lImgOne} alt="l-one" />
        </div>
        {/*  */}
        <div className="w-full grid grid-cols-1 mt-[20%] gap-5">
          <p className="col-span-1 text-white text-[48px]  text-center">
            What makes Sterling Dictionary different?
          </p>
          <div className="col-span-1  flex flex-col md:flex-row  gap-3 items-center my-2">
            <div className="flex flex-col gap-2 w-full items-start h-full">
              <img src={lTagOne} alt="l-tag-1" />
              <p className="text-white text-2xl ">Sterling Products</p>
              <p className="text-[#B9B9B9] text-[15px] ">
                Know more about various sterling products.
              </p>
            </div>
            <div className="flex flex-col gap-2   w-full items-start h-full">
              <img src={lTagTwo} alt="l-tag-2" />
              <p className="text-white text-2xl ">Banking Jargons</p>
              <p className="text-[#B9B9B9] text-[15px] ">
                Have quick look-up of words and acronyms..
              </p>
            </div>
            <div className="flex flex-col gap-2  w-full items-start h-full">
              <img src={lTagTwo} alt="l-tag-2" />
              <p className="text-white text-2xl ">Terminologies</p>
              <p className="text-[#B9B9B9] text-[15px] ">
                All inclusive essential conversion & automation tools.
              </p>
            </div>
            <div className="flex flex-col gap-2  w-full items-start h-full">
              <img src={lTagFour} alt="l-tag-4" />
              <p className="text-white text-2xl ">Integrate with Outlook</p>
              <p className="text-[#B9B9B9] text-[15px] ">
                Hover on a word in your email and the meaning will pop.
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="w-full mx-auto mt-[15%] text-center">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-white text-[48px] text-center">
              Join our merchants
            </p>
            <p className="text-white text-[48px] text-center">
              who succeed in selling with Uvodo
            </p>
          </div>

          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col items-center">
              <img src={uOne} alt="u-1" />
              <div className="flex gap-2 items-center">
                <img src={re} alt="re" />
                <span className="text-[#A2A2A2] text-[16px] pt-1">
                  Silk by Jamilia
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src={uTwo} alt="u-1" />
              <div className="flex gap-2 items-center">
                <img src={re} alt="re" />
                <span className="text-[#A2A2A2] text-[16px] pt-1">Kitpet</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src={uThree} alt="u-1" />
              <div className="flex gap-2 items-center">
                <img src={re} alt="re" />
                <span className="text-[#A2A2A2] text-[16px] pt-1">
                  Holy Roses
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src={uFour} alt="u-1" />
              <div className="flex gap-2 items-center">
                <img src={re} alt="re" />
                <span className="text-[#A2A2A2] text-[16px] pt-1">`A Voir</span>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="grid grid-cols-2 gap-2  mt-[15%]">
          <div className="col-span-1 flex flex-col items-start justify-center  gap-4">
            <p className="text-[48px] text-white">Mobile or Desktop,</p>
            <p className="text-[48px] text-white">all responsive!</p>

            <div className="flex items-start gap-3">
              <img src={star} alt="star" />
              <p className="text-[#D0D0D0] text-[18px] pt-1">
                Mobile first storefront
              </p>
            </div>
            <div className="flex items-start gap-2">
              <img src={star} alt="star" />
              <p className="text-[#D0D0D0] text-[18px] pt-1">
                No code theme editor
              </p>
            </div>
            <div className="flex items-start gap-2">
              <img src={star} alt="star" />
              <p className="text-[#D0D0D0] text-[18px] pt-1">
                Custom brandinig
              </p>
            </div>
            <div className="flex items-start gap-2">
              <img src={star} alt="star" />
              <p className="text-[#D0D0D0] text-[18px] pt-1">
                Themes for every niche(soon)
              </p>
            </div>

            <Link to="">
              <button className=" text-white text-[16px] w-[150px] mt-3 rounded-sm  px-3 py-3 bg-transparent border border-gray-100 hover:text-black transition-colors duration-700 ease-in-out ">
                Learn More
              </button>
            </Link>
          </div>

          <div className="col-span-1">
            <img src={mOne} alt="m-1" />
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-2 gap-6   mt-[15%]">
          <div className="col-span-1">
            <img src={mTwo} alt="m-2" />
          </div>
          <div className="col-span-1 flex flex-col items-start justify-center  gap-4">
            <p className="text-[48px] text-white">Admin Panel with all</p>
            <p className="text-[48px] text-white">essential tools</p>

            <div className="flex items-start gap-3">
              <img src={star} alt="star" />
              <p className="text-[#D0D0D0] text-[18px] pt-1">
                Mobile first admin panel
              </p>
            </div>
            <div className="flex items-start gap-2">
              <img src={star} alt="star" />
              <p className="text-[#D0D0D0] text-[18px] pt-1">
                Enabling payment gateway in clicks
              </p>
            </div>
            <div className="flex items-start gap-2">
              <img src={star} alt="star" />
              <p className="text-[#D0D0D0] text-[18px] pt-1">
                Product and other management
              </p>
            </div>
            <div className="flex items-start gap-2">
              <img src={star} alt="star" />
              <p className="text-[#D0D0D0] text-[18px] pt-1">
                Assigning user roles
              </p>
            </div>

            <Link to="">
              <button className=" text-white text-[16px] w-[150px] mt-3 rounded-sm  px-3 py-3 bg-transparent border border-gray-100 hover:text-black transition-colors duration-700 ease-in-out ">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-2 gap-2  mt-[15%]">
          <div className="col-span-1 flex flex-col items-start justify-center  gap-4">
            <p className="text-[48px] text-white">Local & global</p>
            <p className="text-[48px] text-white">payment gateways</p>

            <div className="flex items-start gap-3">
              <img src={star} alt="star" />
              <p className="text-[#D0D0D0] text-[18px] pt-1">
                Global payment gateways
              </p>
            </div>
            <div className="flex items-start gap-2">
              <img src={star} alt="star" />
              <p className="text-[#D0D0D0] text-[18px] pt-1">
                Local payment gateways
              </p>
            </div>
            <div className="flex items-start gap-2">
              <img src={star} alt="star" />
              <p className="text-[#D0D0D0] text-[18px] pt-1">
                Manual payment options
              </p>
            </div>
            <div className="flex items-start gap-2">
              <img src={star} alt="star" />
              <p className="text-[#D0D0D0] text-[18px] pt-1">
                Local currencies
              </p>
            </div>

            <Link to="">
              <button className=" text-white text-[16px] w-[150px] mt-3 rounded-sm  px-3 py-3 bg-transparent border border-gray-100 hover:text-black transition-colors duration-700 ease-in-out ">
                Learn More
              </button>
            </Link>
          </div>

          <div className="col-span-1">
            <img src={mThree} alt="m-3" />
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-2 gap-6   mt-[15%]">
          <div className="col-span-1">
            <img src={mFour} alt="m-4" />
          </div>
          <div className="col-span-1 flex flex-col items-start justify-center  gap-4">
            <p className="text-[48px] text-white">Inventory & shipping</p>
            <p className="text-[48px] text-white">management tools</p>

            <div className="flex items-start gap-3">
              <img src={star} alt="star" />
              <p className="text-[#D0D0D0] text-[18px] pt-1">
                Inventory management
              </p>
            </div>
            <div className="flex items-start gap-2">
              <img src={star} alt="star" />
              <p className="text-[#D0D0D0] text-[18px] pt-1">Shipping rules</p>
            </div>
            <div className="flex items-start gap-2">
              <img src={star} alt="star" />
              <p className="text-[#D0D0D0] text-[18px] pt-1">
                Shipping service integration
              </p>
            </div>
            <div className="flex items-start gap-2">
              <img src={star} alt="star" />
              <p className="text-[#D0D0D0] text-[18px] pt-1">
                Country specific tax management
              </p>
            </div>

            <Link to="">
              <button className=" text-white text-[16px] w-[150px] mt-3 rounded-sm  px-3 py-3 bg-transparent border border-gray-100 hover:text-black transition-colors duration-700 ease-in-out ">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="w-full text-center mt-[15%]">
          <p className=" text-white  text-[48px]  mb-3">
            Get Uvodo for your industry
          </p>
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col items-center w-1/3">
              <div className="h-[400px] mb-4">
                {" "}
                {/* Added margin bottom to create space */}
                <img
                  src={gOne}
                  alt="g-1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-w-[90%]  flex flex-col items-start gap-2">
                <p className="text-white text-[24px]">Local Businesses</p>
                <p className="text-[#B9B9B9] text-left text-[18px]">
                  Sell locally on Whatapp and Cash On Delivery payment methods
                </p>{" "}
                {/* Add your text here */}
              </div>
            </div>
            <div className="flex flex-col items-center w-1/3">
              <div className="h-[400px] mb-4">
                {" "}
                {/* Added margin bottom to create space */}
                <img
                  src={gTwo}
                  alt="g-2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-w-[90%]  flex-col flex items-start gap-2">
                <p className="text-[24px] text-white">Small businesses</p>{" "}
                {/* Add your text here */}
                <p className="text-left text-[#B9B9B9] text-[18px]">
                  Move your retail business online and start selling products on
                  a free website.
                </p>
                {/* Add your text here */}
              </div>
            </div>
            <div className="flex flex-col items-center w-1/3">
              <div className="h-[400px] mb-4">
                {" "}
                {/* Added margin bottom to create space */}
                <img
                  src={gThree}
                  alt="g-2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-w-[90%] flex-col flex items-start gap-2">
                <p className="text-[24px] text-white">Social media sellers</p>
                <p className="text-left text-[#B9B9B9] text-[18px]">
                  Increase your Instagram sales with Uvodo's all-in-one
                  eCommerce platform.
                </p>{" "}
                {/* Add your text here */}
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="w-full mt-[15%]">
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1 max-w-[60%]">
              <div className="w-full flex flex-col items-start gap-2">
                <div className="flex gap-1 items-center">
                  <span>icn</span>
                  <p className="text-[#676767] text-[28px]">
                    Sterling Dictionary
                  </p>
                </div>
                <p className="text-[#BCBCBC] text-[18px] mt-3 mb-6">
                  Effortlessly turn your ideas into a fully functional,
                  responsive, no-code SaaS website.
                </p>

                <div className="flex justify-between items-center w-full">
                  <img src={kOne} alt="k-1" />
                  <img src={kTwo} alt="k-2" />
                  <img src={kFour} alt="k-4" />
                  <img src={kFive} alt="k-5" />
                  <img src={kSix} alt="k-6" />
                  <img src={kSix} alt="k-6" />
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-green-300">a</div>
          </div>
        </div>
        {/* footer */}
      </div>
    </div>
  );
};

export default LandingPage;
