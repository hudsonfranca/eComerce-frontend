import React from "react";
// import SignInForm from "../components/SignInForm/SignInForm";

export const SideDrawerReducer = (state = {}, { type }) => {
  switch (type) {
    case "mobileCategories":
      return {
        ...state,
        isOpen: "open",
        content: "this components should display a list of categories"
      };

    case "mobileAccount":
      return {
        ...state,
        isOpen: "open"
        // content: <SignInForm />
      };

    case "close":
      return {
        ...state,
        isOpen: "",
        content: ""
      };

    default:
      return {
        ...state
      };
  }
};
