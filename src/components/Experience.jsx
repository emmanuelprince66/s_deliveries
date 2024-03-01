import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mui from "../assets/mui.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImg,
      title: "React Js",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: nextjs,
      title: "Next Js",
      style: "shadow-white",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: mui,
      title: "Material Ui",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full pt-5  md:pt-[200px]  "
    >
      <div className="max-w-screen-lg mx-auto p-4 justify-center w-full h-full text-white  flex flex-col ">
        <div className="pt-5">
          <p className="tborder-b-4 border-gray-500 p-2 inline text-4xl  font-bold  ">
            Experience
          </p>
          <p className="py-6">These are the technologies i've worked it</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {techs.map(({ id, style, title, src }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
