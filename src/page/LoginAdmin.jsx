import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";

const LoginAdmin = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Form submitted"); // Add your form submission logic here
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate back
  };

  return (
    <div className="sm:w-[50%]  sm:bg-white mx-auto h-full">
      <button onClick={handleGoBack} className="p-5 my-4">
        Go Back
      </button>

      <div className="w-full flex flex-col items-center justify-end gap-3 h-[60vh] ">
        <p>Login as an Administrator</p>

        <form
          onSubmit={handleSubmit}
          className="sm:w-[50%] flex flex-col items-center justify-center gap-3 w-[90%] "
        >
          <input
            type="text"
            className="rounded-2xl input-placeholder outline-none border-none h-[40px] pt-4 pl-4 bg-[#ffefef] p-2 w-full"
            placeholder="Enter your Email Address.."
          />
          <input
            type="text"
            className="rounded-2xl input-placeholder outline-none border-none h-[40px] pt-4 pl-4 bg-[#ffefef] p-2 w-full"
            placeholder="Enter your Password.."
          />

          <CustomButton
            text="Login"
            path="/add"
            // onClick={handleSubmit} // Pass handleSubmit as onClick
            style="bg-red-600 w-full hover:bg-red-400 text-white focus-visible:outline-red-600"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
