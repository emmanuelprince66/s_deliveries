import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./page/Start";
import LoginAdmin from "./page/LoginAdmin";
import AddTerm from "./page/AddTerm";
import UserStart from "./page/UserStart";
import LandingPage from "./page/LandingPage";
import SignUpUser from "./page/SignUpUser";
import LoginUser from "./page/LoginUser";

const myRoutes = [
  { component: <Start />, path: "/start", name: "index Page" },
  { component: <LandingPage />, path: "/", name: "landing Page" },
  { component: <LoginAdmin />, path: "/login-admin", name: "Login admin Page" },
  { component: <LoginUser />, path: "/login-user", name: "Login user Page" },
  { component: <AddTerm />, path: "/add", name: "add page" },
  { component: <UserStart />, path: "/user", name: "user page" },
  { component: <SignUpUser />, path: "/user-signup", name: "user signup page" },
];

const RoutesContainer = () => {
  return (
    <>
      <Router>
        <Routes>
          {myRoutes.map((item) => {
            // For the login page, render without AuthProvider
            if (item.path === "/" || item.path === "/start") {
              return (
                <Route
                  key={item.name}
                  path={item.path}
                  element={item.component}
                />
              );
            } else {
              // For other pages, wrap with AuthProvider

              return (
                <Route
                  key={item.name}
                  path={item.path}
                  element={item.component}
                />
              );
            }
          })}
        </Routes>
      </Router>
    </>
  );
};

export default RoutesContainer;
