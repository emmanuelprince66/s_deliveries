import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./page/Start";
import LoginAdmin from "./page/LoginAdmin";
import AddTerm from "./page/AddTerm";
import UserStart from "./page/UserStart";

const myRoutes = [
  { component: <Start />, path: "/", name: "index Page" },
  { component: <LoginAdmin />, path: "/admin", name: "Login Page" },
  { component: <AddTerm />, path: "/add", name: "add page" },
  { component: <UserStart />, path: "/user", name: "user page" },
];

const RoutesContainer = () => {
  return (
    <>
      <Router>
        <Routes>
          {myRoutes.map((item) => {
            // For the login page, render without AuthProvider
            if (item.path === "/") {
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
