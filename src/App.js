import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import { ToobarHbClick } from "./actions/toobar";

function App() {
  const ToobarHamburguer = useSelector(state => state.ToobarReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar HbClick={() => dispatch(ToobarHbClick())} />

      <SideDrawer
        open={ToobarHamburguer}
        close={() => dispatch(ToobarHbClick())}
        content=""
      />
      <main />
    </div>
  );
}

export default App;
