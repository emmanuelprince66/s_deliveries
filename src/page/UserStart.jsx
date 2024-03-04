import React from "react";
import search from "../images/search.svg";
const UserStart = () => {
  return (
    <div className="sm:w-[50%] sm:bg-white  mx-auto h-screen p-4">
      <div className="flex w-full h-full items-start justify-center">
        <form action="" className="w-full sm:w-[80%]">
          <div className="relative rounded-2xl bg-[#ffefef] w-full">
            <input
              type="text"
              className="rounded-2xl outline-none border-none h-[40px]  pl-4 pr-10 bg-[#ffefef] w-full"
              placeholder="Type a key word here..."
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none ">
              <img
                src={search}
                alt="search-img"
                className="object-contain rounded-2xl bg-red-700 p-2"
                width={30}
                height={30}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserStart;
