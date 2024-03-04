import React from "react";
import CustomButton from "./CustomButton";

const Add = () => {
  const handleSubmit = () => {};
  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className=" flex flex-col items-start gap-3 justify-center w-[90%] mx-auto sm:mx-0 sm:w-[80%]"
    >
      <input
        type="text"
        className="rounded-2xl input-placeholder outline-none border-none h-[40px] pt-4 pl-4 bg-[#ffefef] p-2 w-full"
        placeholder="Enter a New word/phrase/acronym..."
      />
      <input
        type="text"
        className="rounded-2xl input-placeholder outline-none border-none h-[90px] pt-4 pl-4 bg-[#ffefef] p-2 w-full"
        placeholder="Meaning..."
      />
      <input
        type="text"
        className="rounded-2xl input-placeholder  outline-none border-none h-[40px] pt-4 pl-4 bg-[#ffefef] p-2 w-full"
        placeholder="Add a link (Optional)"
      />

      <CustomButton
        text="Add"
        onClick={handleSubmit} // Pass handleSubmit as onClick
        style="bg-red-600 w-[70px] text-white hover:bg-red-400 focus-visible:outline-red-600"
      />
    </form>
  );
};

export default Add;
