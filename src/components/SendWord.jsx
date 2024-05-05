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
          url: "delete-existing-word",
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
  

  return (
    <Box style={style}>
    
    
    
    
    </Box>
  )
}

export default SendWord