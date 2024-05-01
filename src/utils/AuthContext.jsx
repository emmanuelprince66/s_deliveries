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
        sx={{ display: "flex", justifyContent: "center", marginTop: "20vh" }}
      >
        <CircularProgress
          size="4.2rem"
          sx={{
            color: "#DC0019",
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
