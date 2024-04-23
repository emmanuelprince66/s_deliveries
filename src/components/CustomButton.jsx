import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({ text, style, path, onClick , disabled }) => {
  return (
    <div className="w-full">
      {path ? (
        <Link to={path}>
          <button
            type="submit"
            className={`flex 
              justify-center 
              ${style}
              rounded-2xl px-3 py-2 
              text-sm font-semibold leading-6
              shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-700 ease-in-out`}
          >
            {text}
          </button>
        </Link>
      ) : (
        <button
          type="submit"
          disabled={disabled}
          onClick={onClick}
          className={`flex 
            justify-center 
            ${style}
            rounded-2xl px-3 py-2 
            text-sm font-semibold leading-6
            shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-700 ease-in-out`}
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default CustomButton;
