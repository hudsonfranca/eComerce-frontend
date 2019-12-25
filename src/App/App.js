import React from "react";
import "../styles/css/App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import Main from "../pages/Main/Main";
import Routes from "../routes/routes";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <SideDrawer />
        <Main>
          <Routes />
        </Main>
      </div>
    </BrowserRouter>
  );
}

export default App;
