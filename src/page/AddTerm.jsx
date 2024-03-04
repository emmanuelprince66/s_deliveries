import React from "react";
import { useState } from "react";
import Add from "../components/Add";
import EditTerm from "../components/EditTerm";

const AddTerm = () => {
  const [isTab1Active, setIsTab1Active] = useState(true);
  return (
    <div className="sm:w-[50%]  sm:bg-white mx-auto h-full">
      <div className="flex flex-col items-start justify-center mt-[2rem] sm:mt-[5rem]">
        <div className="flex justify-center gap-0 py-5 max-w-[90%] mx-auto sm:mx-0">
          <button
            onClick={() => setIsTab1Active(true)}
            className={`px-6 py-2 text-white focus:outline-none transition  w-[230px]  duration-300 ease-in-out shadow-lg ${
              isTab1Active
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-red-300 text-red-500 hover:bg-red-300"
            } rounded-l-lg`}
          >
            Add a new term
          </button>
          <button
            onClick={() => setIsTab1Active(false)}
            className={`px-6 py-2 text-white focus:outline-none h-[60px] transition duration-300 ease-in-out shadow-lg ${
              !isTab1Active
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-red-300 text-red-500 hover:bg-red-300"
            } rounded-r-lg`}
          >
            Edit/Delete Existing term
          </button>
        </div>

        {isTab1Active ? <Add /> : <EditTerm />}
      </div>
    </div>
  );
};

export default AddTerm;
