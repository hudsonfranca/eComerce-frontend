import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideDrawer />
      <main />
    </div>
  );
}

export default App;
