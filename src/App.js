import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Routes from "./routes/routes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Main>
        <Routes />
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
