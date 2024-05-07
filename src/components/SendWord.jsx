import React from 'react'
import Spinner from "../utils/Spinner";
import { Box } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BaseAxios } from "../helpers/axiosInstance";
import Cookies from "js-cookie";
import CustomButton from "./CustomButton";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "12px",
  width: "100%",
  bgcolor: "background.paper",
  p: 3,
};

const SendWord = ({searchTerm , closeModal , setSearchTerm}) => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [changedWord , setChangedWord] = useState("");
  const [wordErr, setWordErr] = useState(false);
  const [wordMessage, setWordMessage] = useState("");


  const notifyError = (msg) => {
    toast.error(msg, {
      autoClose: 6000, // Time in milliseconds
    });
  };
  const notifySuccess = (msg) => {
    toast.success(msg, {
      autoClose: 6000, // Time in milliseconds
    });
  };

  const sendWordMutation = useMutation({
    mutationFn: async (payLoad) => {
      const token = Cookies.get("authToken");
      try {
        const response = await BaseAxios({
          url: "send-word-to-email",
          method: "POST",
          data: payLoad,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Response:", response);

        if (!response || !response?.data) {
          throw new Error("Invalid response received");
        }

        if (response?.status !== 200) {
          setShowSpinner(false);
          throw new Error("Request failed with status: " + response.status);
        }

        return response.data;
      } catch (error) {
        setShowSpinner(false);
        notifyError(error?.response?.data?.message);
        closeModal()
        throw error;
      }
    },
    onSuccess: (data) => {
      setShowSpinner(false);
      console.log(data);
      notifySuccess(data?.message);
      setSearchTerm("")
      closeModal()
      
    },
    onError: (error) => {
      setShowSpinner(false);
      console.error("An error occurred:", error);
    },
  });
  
    const handleSendWord = () => {

      const payload = {
        word: searchTerm || "",
      };

      console.log(payload);
      sendWordMutation.mutate(payload);
      setShowSpinner(true);
    };
    
    const handleWordChange = (e) => {
      const newValue = e.target.value;

      const numberRegex = /^\d*$/;

      if (newValue === "") {
        setWordErr(true);
        setWordMessage("word cannot be empty");
      } else if (numberRegex.test(newValue)) {
        setWordErr(true);
        setWordMessage("word cannot be a number");
      } else {
        console.log(newValue); // Log the new value if it's not empty or a number
        setChangedWord(newValue);
        setWordErr(false); // Reset error state if the input is valid
        setWordMessage(""); // Reset error message
      }
    };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        handleSendWord()
   
      };    
    


  return (
    <Box style={style}>
      <div class="bg-[#1d1d1d] rounded-lg mx-auto border border-[#444444] shadow-lg px-6 pb-6 pt-3 w-[90%] md:w-[45%] lg:w-[35%]">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col items-start justify-center gap-2 w-full ">

            <input
              type="text"
              required
              className="rounded-md font-normal text-white outline-none h-[40px] mt-4  pl-4 bg-[#282828] p-2 w-full placeholder-[#636363]"
              placeholder="Word"
              value={searchTerm || ""}
              onChange={handleWordChange}
            />

            {wordErr && (
              <span className="text-red-500 text-xs mt-[-5px]">
                {wordMessage}
              </span>
            )}
          </div>
          <div className="flex gap-4 items-center max-w-[300px] mt-6">
            <CustomButton
              text="Cancel"
              style="bg-[#EB2529] w-full flex justify-center items-center text-white font-dm-sans  text-[20px] h-[50px] hover:bg-red-400  focus-visible:outline-red-600"
              onClick={closeModal}
            />

            <CustomButton
              text={
                showSpinner || sendWordMutation.isLoading ? <Spinner /> : "Send"
              }
              disabled={sendWordMutation.isLoading || showSpinner}
              type="submit"
              style="bg-transparent w-full flex justify-center text-[20px] items-center border border-[#444444]  hover:text-[#EB2529] h-[50px] text-white focus-visible:outline-red-600"
            />
          </div>
        </form>
      </div>
    </Box>
  );
}

export default SendWord