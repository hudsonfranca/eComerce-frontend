import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { SideDrawer } from "../SideDrawer";

afterEach(cleanup);

it(" SideDrawer renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<SideDrawer />, div);
});

it("SideDrawer matches snapshot", () => {
  const tree = renderer.create(<SideDrawer />).toJSON();

  expect(tree).toMatchSnapshot();
});
