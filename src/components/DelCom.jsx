import React from 'react'
import CustomButton from "./CustomButton";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BaseAxios } from "../helpers/axiosInstance";
import { Box } from "@mui/material";
import Spinner from "../utils/Spinner";
import { useState } from 'react';
import Cookies from "js-cookie";


import { toast, ToastContainer } from "react-toastify";


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

const DelCom = ({ deleteData, closeDelModal }) => {
  const [showSpinner, setShowSpinner] = useState(false);

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

  const deleteWordsMutation = useMutation({
    mutationFn: async (payLoad) => {
    const token = Cookies.get("authToken")
      try {
        const response = await BaseAxios({
          url: "delete-existing-word",
          method: "POST",
          data: payLoad,
          headers : {
          Authorization:`Bearer ${token}`
          }
        });

        console.log("Response:", response);

        if (!response || !response?.data) {
          throw new Error("Invalid response received");
        }

        if (response?.status !== 200) {
          setShowSpinner(false);
          closeDelModal()
          throw new Error("Request failed with status: " + response.status);
        }

        return response.data;
      } catch (error) {
        setShowSpinner(false);
        closeDelModal()
        notifyError(error?.response?.data?.message);
        throw error;
      }
    },
    onSuccess: (data) => {
      setShowSpinner(false);
      console.log(data);
      notifySuccess(data?.message)
      closeDelModal()
    },
    onError: (error) => {
      setShowSpinner(false);
      console.error("An error occurred:", error);
    },
  });

  const handleDeleteWord = () => {
    console.log("delete");
    
    const payload = {
    id:deleteData?.id
    }
    
    console.log(payload);
     deleteWordsMutation.mutate(payload);
    setShowSpinner(true);
  };
  

  return (
    <Box style={style}>
      <div class="bg-[#1d1d1d] border border-[#444444] rounded-lg shadow-lg px-10 pb-10 pt-[5%] mx-auto w-[90%] md:w-[45%] lg:w-[35%]">
        <div className=" flex justify-center text-center w-full mb-9">
          <p className="font-normal font-dm-sans text-white">
            {`Are you sure you want to delete  `}
            <span className="uppercase text-[#A1A1A1]">{deleteData?.word}</span>
            {` from the database`}
          </p>
        </div>
        <div class="flex gap-4 items-center max-w-[300px] mt-6">
          <CustomButton
            text="Go Back!"
            style="bg-[#DB363A] w-full flex justify-center items-center text-white font-dm-sans  text-[20px] h-[55px] hover:bg-red-400  focus-visible:outline-red-600"
            onClick={closeDelModal}
          />
          <CustomButton
            onClick={handleDeleteWord}
            text={
              showSpinner || deleteWordsMutation.isLoading ? (
                <Spinner />
              ) : (
                "Yes Delete"
              )
            }
            disabled={deleteWordsMutation.isLoading || showSpinner}
            style="bg-transparent w-full flex justify-center  items-center h-[55px] hover:text-[#DB363A] text-[#A1A1A1] font-dm-sans  border border-[#444444] w-full  focus-visible:outline-red-100"
          />
        </div>

        <ToastContainer
          theme="dark"
          toastStyle={{ background: "#333", color: "#fff" }}
        />
      </div>
    </Box>
  );
};

export default DelCom