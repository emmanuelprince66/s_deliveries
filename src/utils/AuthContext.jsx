import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import Cookies from "js-cookie";

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const refreshToken = Cookies.get("refreshToken");
    const authToken = Cookies.get("authToken");
    const role = Cookies.get("role");
    
    console.log(authToken)


    if (!refreshToken || !authToken || !role) {
      setIsLoading(false);
      return;
    }

    // Proceed with rendering if authenticated
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          width: "100%",
          height: "100vh",
          background: "#1e1e1e",
        }}
      >
        <CircularProgress
          size="3.2rem"
          sx={{
            color: "#DC0019",
            fontSize: "10rem",
          }}
        />
      </Box>
    );
  }

  // Redirect to login if not authenticated
  const isLoggedIn = !!Cookies.get("authToken");
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <>{children}</>; // Proceed to render children if authenticated
}
