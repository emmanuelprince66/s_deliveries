import React from "react";
import checkRetail from "../images/portfolio/checkretail.png";
import order from "../images/portfolio/order.png";
import hooliBank from "../images/portfolio/hoolibank.png";
import rlfm from "../images/portfolio/rlfm.png";
import ochiKit from "../images/portfolio/ochikitchen.png";
import modernAge from "../images/portfolio/modernAge.png";
import car from "../images/portfolio/car.png";

const portfolio = [
  {
    id: 1,
    src: hooliBank,
    demo: "https://github.com/emmanuelprince66/Hoo-bank.git",
    link: "https://hoolibank.netlify.app",
  },
  {
    id: 2,
    src: checkRetail,
    demo: "https://github.com/emmanuelprince66/check__retail.git",
    link: "https://app.checkretail.tech/",
  },
  {
    id: 3,
    src: rlfm,
    demo: "https://github.com/emmanuelprince66/reho_accord.git",
    link: "http://rlfm.netlify.app/",
  },
  {
    id: 4,
    src: order,
    demo: "https://github.com/emmanuelprince66/deliciouss.git",
    link: "https://chitech.netlify.app",
  },
  {
    id: 5,
    src: ochiKit,
    demo: "https://github.com/emmanuelprince66/kitchen-cd.git",
    link: "https://ochikitchen.netlify.app",
  },
  {
    id: 6,
    src: modernAge,
    demo: "https://github.com/emmanuelprince66/kitchen-cd.git",
    link: "https://ochitech.netlify.app",
  },
  {
    id: 7,
    src: car,
    demo: "https://github.com/emmanuelprince66/cars_showcase.git",
    link: "https://cars-showcase-iota-blond.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-5"
    >
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="p-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0  ">
          {portfolio.map(({ id, src, demo, link }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105"
            >
              <img src={src} alt="h-bank" className="rounded-md " />
              <div className="flex items-center justify-center">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 duration-200 m-4 hover:scale-105">
                    Demo
                  </button>
                </a>

                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 duration-200 m-4  hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
