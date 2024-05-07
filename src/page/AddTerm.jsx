import React from "react";
import { useState , useEffect } from "react";
import Add from "../components/Add";
import EditTerm from "../components/EditTerm";
import aOne from "../images/a-1.png";
import aTwo from "../images/a-2.png"
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";





const AddTerm = () => {

const [parentHeight , setParentHeight] = useState(0)
const [childrenHeight , setChildrenHeight] = useState(0)
const navigate  = useNavigate()
const handleLogout = () => {
  Cookies.remove("authToken");
  Cookies.remove("refreshToken");
  Cookies.remove("role");

  navigate("/login-admin");
};
  const [isTab1Active, setIsTab1Active] = useState(true);
  
  useEffect(() => {
    const calculateParentHeight = () => {
      const viewportHeight = window.innerHeight;
      const eightyFivePercentHeight = (85 / 100) * viewportHeight;
      setParentHeight(eightyFivePercentHeight);
    };

    calculateParentHeight();

    const handleResize = () => {
      calculateParentHeight();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  return (
    <div
      className={`bg-[#171414] w-full ${
        isTab1Active ? "h-screen" : "h-screen "
      }   pb-9  flex flex-col items-center justify-center`}
    >
      <div className=" w-[98%] md:w-[90%] lg:w-[65%] mx-auto relative flex flex-col justify-center items-center">
        <div className="w-[100%]  md:lg-[70%] lg:w-[85%] flex justify-end mb-4 mt-8 mr-5 md:mr-0 ">
          <button
            onClick={handleLogout}
            className=" bg-[#EB2529] py-2 px-4 font-dm-sans  rounded-md  hover:bg-red-400 text-white focus-visible:outline-red-600 "
          >
            Logout
          </button>
        </div>
        <div className="w-[97%] max-h-[85vh] min-h-[85vh]  flex justify-center flex-col items-center  gap-5 md:w-[100%] lg:w-[85%] mx-auto  bg-[#000]   md:pt-8 overflow-y-auto rounded-2xl">
          <div className="max-h-[85vh] min-h-[85vh] w-full flex flex-col items-center ">
            <div className="w-full flex flex-col items-center ">
              <img
                src={aOne}
                alt="a-1"
                className=" object-contain w-[100px] h-[30px] mb-7 mt-6"
              />
              <div
                className={`flex justify-center gap-0 pb-5 w-[90%]  mx-auto sm:mx-0 mb-3`}
              >
                <button
                  onClick={() => setIsTab1Active(true)}
                  className={`px-6 bg-[#DB363A] rounded-2xl focus:outline-none text-[10px] md:text-[15px]  font-dm-sans z-10 transition w-full  h-[50px] duration-300 ease-in-out shadow-lg ${
                    isTab1Active
                      ? "bg-[#DB363A] hover:bg-[#2a2222] text-white"
                      : "bg-white text-[#B4B4B4] hover:bg-gray-100"
                  } `}
                >
                  Add something new
                </button>
                <button
                  onClick={() => setIsTab1Active(false)}
                  className={`px-6 font-dm-sans text-[10px] tab-btn md:text-[15px] focus:outline-none h-[50px] ml-[-15px]  w-full transition duration-300 ease-in-out shadow-lg ${
                    !isTab1Active
                      ? "bg-[#DB363A] hover:bg-red-600 text-white"
                      : "bg-white text-[#B4B4B4] hover:bg-gray-100"
                  } rounded-r-lg`}
                >
                  Edit an exisiting one
                </button>
              </div>
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
