import React from "react";
import { useState } from "react";
import Add from "../components/Add";
import EditTerm from "../components/EditTerm";
import aOne from "../images/a-1.png";
import aTwo from "../images/a-2.png"


const AddTerm = () => {
  const [isTab1Active, setIsTab1Active] = useState(true);
  return (
    <div className="bg-[#171414] w-full h-screen">
      <div className="w-[65%] mx-auto relative ">
        <div className="w-[80%] mx-auto flex pr-7 pt-3   justify-end mb-[3%]">
          <button className=" bg-[#DB363A] py-2 px-4 font-dm-sans  rounded-sm  hover:bg-red-400 text-white focus-visible:outline-red-600 mt-3">
            Logout
          </button>
        </div>
        <div className="w-[85%] mx-auto  bg-[#000] p-10 rounded-2xl">
          <div className="w-[100px] h-[60px] mx-auto ">
            <img src={aOne} alt="a-1" className=" object-contain" />
          </div>
          <div className="flex flex-col items-center w-full justify-center">
            <div className="flex justify-center gap-0 pb-5 max-w-[100%]  mx-auto sm:mx-0">
              <button
                onClick={() => setIsTab1Active(true)}
                className={`px-6 py-2 text-white focus:outline-none text-[15px]  font-dm-sans z-10 transition rounded-lg w-[220px] h-[45  px] duration-300 ease-in-out shadow-lg ${
                  isTab1Active
                    ? "bg-[#DB363A] hover:bg-red-600 text-white"
                    : "bg-white text-[#B4B4B4] hover:bg-gray-100"
                } rounded-l-lg`}
              >
                Add something new
              </button>
              <button
                onClick={() => setIsTab1Active(false)}
                className={`px-6 py-2 text-white font-dm-sans text-[15px] focus:outline-none h-[45px] rounded-lg ml-[-15px] w-[220px] transition duration-300 ease-in-out shadow-lg ${
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

        <div className="absolute w-[100px] h-[100px] left-0 bottom-2 md:bottom-8">
          <img src={aTwo} alt="a-2" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default AddTerm;
