import React from "react";
import { useState } from "react";
import Add from "../components/Add";
import EditTerm from "../components/EditTerm";
import aOne from "../images/a-1.png";
import aTwo from "../images/a-2.png"
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";




const AddTerm = () => {
const navigate  = useNavigate()
const handleLogout = () => {
  Cookies.remove("authToken");
  Cookies.remove("refreshToken");
  Cookies.remove("role");

  navigate("/login-admin");
};
  const [isTab1Active, setIsTab1Active] = useState(true);
  return (
    <div
      className={`bg-[#171414] w-full ${
        isTab1Active ? "h-screen" : "h-full"
      } md:h-screen pb-4`}
    >
      <div className=" w-[98%] md:w-[90%] lg:w-[65%] mx-auto relative flex flex-col justify-center items-center">
        <div className="w-[100%]  md:lg-[70%] lg:w-[80%] mx-auto flex pr-7 pt-3   justify-end mb-[3%]">
          <button
            onClick={handleLogout}
            className=" bg-[#EB2529] py-2 px-4 font-dm-sans  rounded-md  hover:bg-red-400 text-white focus-visible:outline-red-600 mt-0 md:mt-3 lg:mt-3"
          >
            Logout
          </button>
        </div>
        <div className="w-[97%] h-fit  md:w-[100%] lg:w-[85%] mx-auto  bg-[#000]  py-10 md:py-8 lg:py-5 md:p-10 rounded-2xl">
          <div className="w-[100px] h-[50px] md:h-[60px] mx-auto mb-5 pt-0  md:pt-3 ">
            <img src={aOne} alt="a-1" className=" object-contain" />
          </div>
          <div className="flex flex-col items-center w-full justify-center">
            <div
              className={`flex justify-center gap-0 pb-5 w-[90%]  mx-auto sm:mx-0`}
            >
              <button
                onClick={() => setIsTab1Active(true)}
                className={`px-6  rounded-2xl focus:outline-none text-[10px] md:text-[15px]  font-dm-sans z-10 transition w-full  h-[50px] duration-300 ease-in-out shadow-lg ${
                  isTab1Active
                    ? "bg-[#DB363A] hover:bg-red-600 text-white"
                    : "bg-white text-[#B4B4B4] hover:bg-gray-100"
                } `}
              >
                Add something new
              </button>
              <button
                onClick={() => setIsTab1Active(false)}
                className={`px-6   font-dm-sans text-[10px] md:text-[15px] focus:outline-none h-[50px] rounded-r-[17px] ml-[-15px]  w-full transition duration-300 ease-in-out shadow-lg ${
                  !isTab1Active
                    ? "bg-[#DB363A] hover:bg-red-600 text-white"
                    : "bg-white text-[#B4B4B4] hover:bg-gray-100"
                } rounded-r-lg`}
              >
                Edit an exisiting one
              </button>
            </div>

            {isTab1Active ? <Add /> : <EditTerm />}
          </div>
        </div>
      </div>
      <div className="absolute w-[30px] h-[30px]  lg:w-[120px] lg:h-[120px]  md:w-[80px] md:h-[80px] left-0 bottom-5 md:bottom-[7rem]">
        <img src={aTwo} alt="a-w" className="object-contain" />
      </div>
    </div>
  );
};

export default AddTerm;
