import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Main from "./components/Main/Main";
import Routes from "./routes/routes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <SideDrawer /> */}
      <Main>
        <Routes />
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
