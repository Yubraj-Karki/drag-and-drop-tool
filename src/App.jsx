import React from "react";
import Test3 from "./Test3";
import { Canvas, ComponentsBar, StyleBar } from "./container/index";
import TopNavbar from "./components/TopNavBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <div className="wrapper bg-[#F0F0F0] grid grid-cols-5 gap-4 items-center justify-items-center h-[100vh] pt-[65px]">
        <ComponentsBar />
        <Canvas />
        <StyleBar />
      </div>
    </div>
  );
}

export default App;
