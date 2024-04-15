import React from "react";
import CustomButton from "../components/CustomButton";

const Start = () => {
  return (
    <div className="sm:w-[50%] sm:bg-white  mx-auto h-screen">
      <div className="flex w-full p-1">
        <h1 className="font-signature">Sterling Dictionary</h1>
      </div>

      <div className="h-full w-full  flex items-center justify-center">
        <div className="flex justify-center flex-col items-center gap-3  w-[90%] md:w-[40%]">
          <h2 className="text-red-600 d-block">Continue as:</h2>

          <div className="flex gap-2 items-center w-full">
            <CustomButton
              path="/login-user"
              text="A User"
              style=" bg-red-600 w-full text-white hover:bg-red-400 focus-visible:outline-red-600 "
            />
            <CustomButton
              path="/login-admin"
              text="An Admin"
              style="bg-black w-full text-white hover:bg-black-400 focus-visible:outline-black-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
