import { useState } from "react";
import "../src/index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SoicalLinks from "./components/SoicalLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />

      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SoicalLinks />
    </div>
  );
}

export default App;
