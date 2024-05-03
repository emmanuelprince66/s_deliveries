import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./page/Start";
import LoginAdmin from "./page/LoginAdmin";
import AddTerm from "./page/AddTerm";
import { queryClient } from "./helpers/queryClient";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserStart from "./page/UserStart";
import LandingPage from "./page/LandingPage";
import SignUpUser from "./page/SignUpUser";
import { AuthProvider } from "./utils/AuthContext";
import LoginUser from "./page/LoginUser";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import ForgetPassword from "./page/ForgetPassword";

const myRoutes = [
  { component: <Start />, path: "/start", name: "index Page" },
  { component: <LandingPage />, path: "/", name: "landing Page" },
  { component: <LoginAdmin />, path: "/login-admin", name: "Login admin Page" },
  { component: <LoginUser />, path: "/login-user", name: "Login user Page" },
  { component: <AddTerm />, path: "/add", name: "add page" },
  { component: <UserStart />, path: "/user", name: "user page" },
  { component: <SignUpUser />, path: "/user-signup", name: "user signup page" },
  {
    component: <ForgetPassword />,
    path: "/forget-password",
    name: "forget password",
  },
];

const RoutesContainer = () => {
console.log(Cookies.get("role"))
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {myRoutes.map((item) => {
            // For the login page, render without AuthProvider
            if (
              item.path === "/" ||
              item.path === "/start" ||
              item.path === "/forget-password" ||
              item.path === "/login-user" ||
              item.path === "/login-admin" ||
              item.path === "/user-signup" 
            ) {
              return (
                <Route
                  key={item.name}
                  path={item.path}
                  element={item.component}
                />
              );a
            } else {
              // For other pages, wrap with AuthProvider
              const ComponentWithAuth = (
                <AuthProvider>
                  {Cookies.get("role") === "user" && item.path === "/add" ? (
                    <Navigate to="/user" />
                  ) : (
                    item.component
                  )}
                </AuthProvider>
              );
              return (
                <Route
                  key={item.name}
                  path={item.path}
                  element={ComponentWithAuth}
                />
              );
            }
          })}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default RoutesContainer;
