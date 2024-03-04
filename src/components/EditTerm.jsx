import React from "react";
import arrw from "../images/arrw.svg";
import del from "../images/del.svg";
import edit from "../images/edit.svg";
import { useState } from "react";
import CustomButton from "./CustomButton";

const termArray = [
  {
    id: 1,
    text: "A platform where local manufacturers in Nigeria showcase their product to a wide range of buyer across the globe. ",
    path: "www.mbn.ng...",
    bold: "MBN",
  },
  {
    id: 4,
    text: "A platform where local manufacturers in Nigeria showcase their product to a wide range of buyer across the globe. ",
    path: "www.mbn.ng...",
    bold: "MBN",
  },
  {
    id: 3,
    text: "A platform where local manufacturers in Nigeria showcase their product to a wide range of buyer across the globe. ",
    path: "www.mbn.ng...",
    bold: "MBN",
  },
  {
    id: 4,
    text: "A platform where local manufacturers in Nigeria showcase their product to a wide range of buyer across the globe. ",
    path: "www.mbn.ng...",
    bold: "MBN",
  },
  {
    id: 5,
    text: "A platform where local manufacturers in Nigeria showcase their product to a wide range of buyer across the globe. ",
    path: "www.mbn.ng...",
    bold: "MBN",
  },
];

const EditTerm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const openDelModal = () => {
    setIsDelOpen(true);
  };

  const closeDelModal = () => setIsDelOpen(false);

  return (
    <div className="flex flex-col items-start justify-center gap-4 w-[90%] sm-w-[100%] mx-auto sm:mx-0">
      <input
        type="text"
        className="rounded-2xl input-placeholder outline-none border-none h-[40px] pt-4 pl-4 bg-[#ffefef] p-2 w-full"
        placeholder="Search term..."
      />

      <h2 className="font-bold flex gap-2 items-center">
        A-Z
        <img
          src={arrw}
          alt="arrow"
          className="object-contain w-[15px] h-[15px]"
        />
      </h2>

      {termArray &&
        Array.isArray(termArray) &&
        termArray.map((term) => (
          <div
            className="w-full flex gap-4 items-center border-b border-gray-300 pb-1"
            key={term?.id}
          >
            <div className="flex-1 flex items-center gap-2 flex-wrap">
              <h2 className="font-bold">{term?.bold}</h2>
              <p className="font-normal text-[10px]  ">{term.text}</p>
              <p className="font-normal text-[10px] text-red-600  ">
                {term.path}
              </p>
            </div>

            <div className="flex items-center">
              <div
                onClick={openModal}
                className="p-2 bg-green-300 cursor-pointer flex items-center justify-center"
              >
                <img
                  src={edit}
                  alt="edit-img"
                  className="object-contain h-[14px] w-[14px]"
                />
              </div>
              <div
                onClick={openDelModal}
                className="p-2 bg-red-300 cursor-pointer flex items-center justify-center"
              >
                <img
                  src={del}
                  alt="del-img"
                  className="object-contain h-[14px] w-[14px]"
                />
              </div>
            </div>
          </div>
        ))}

      {isOpen && (
        <div class="fixed inset-0 z-50 flex items-center justify-center  bg-gray-900 bg-opacity-50">
          <div class="bg-white rounded-lg shadow-lg px-6 pb-6 pt-3 w-[90%] max-w-md">
            <div class="flex  justify-center mb-4">
              <h2 class="text-sm font-semibold">Edit</h2>
            </div>
            <div className="flex flex-col items-start justify-center gap-2 w-full">
              <input
                type="text"
                className="rounded-2xl outline-none border border-gray-400 h-[40px]  pl-4 bg-white p-2 w-full placeholder-black"
                placeholder="MBN"
              />
              <input
                type="text"
                className="rounded-2xl outline-none border border-gray-400 h-[40px]  pl-4 bg-white p-2 w-full placeholder-black"
                placeholder="A platform where local manufacturers in Nigeria showcase their product to a wide range of buyer across the globe. www.mbn.ng"
              />
            </div>
            <div class="flex gap-2 items-center max-w-[300px] mt-6">
              <CustomButton
                text="Go back!"
                style="bg-red-600 w-full text-white hover:bg-red-400  focus-visible:outline-red-600"
                onClick={closeModal}
              />
              <CustomButton
                text="Save"
                style="bg-white w-full  text-red-400 border border-red-400 w-full  focus-visible:outline-red-100"
              />
            </div>
          </div>
        </div>
      )}
      {isDelOpen && (
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div class="bg-white rounded-lg shadow-lg px-6 pb-6 pt-3 w-[90%] max-w-md">
            <div class="flex  justify-center mb-4">
              <h2 class="text-sm font-semibold">Edit</h2>
            </div>
            <div className=" flex justify-center w-full">
              <p className="font-normal">
                {" "}
                Are you sure you want to delete the word MBN from the database
              </p>
            </div>
            <div class="flex gap-2 items-center max-w-[300px] mt-6">
              <CustomButton
                text="Go back!"
                style="bg-red-600 w-full text-white hover:bg-red-400  focus-visible:outline-red-600"
                onClick={closeDelModal}
              />
              <CustomButton
                text="Yes! Delete"
                style="bg-white w-full  text-red-400 border border-red-400 w-full  focus-visible:outline-red-100"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditTerm;
