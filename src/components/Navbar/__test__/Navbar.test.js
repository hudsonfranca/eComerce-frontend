import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Navbar } from "../Navbar";

afterEach(cleanup);

it("Navbar renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Navbar />, div);
});

it("Navbar matches snapshot", () => {
  const tree = renderer.create(<Navbar />).toJSON();

  expect(tree).toMatchSnapshot();
});
