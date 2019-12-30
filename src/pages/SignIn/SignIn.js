import React from "react";
import SignInFormConnect from "../../components/SignInForm/SignInForm";
import "../../styles/css/SignIn.css";
import { Link } from "react-router-dom";

export default function SignIn({}) {
  return (
    <div className="signin-page">
      <div className="signin-page-content">
        <SignInFormConnect />
      </div>
      <div className="signin-page-create-account-link">
        <h2>Don't have an account?</h2>
        <h4>Here are some of the benefits you’ll enjoy:</h4>
        <ul>
          <li>
            <i className="fas fa-fighter-jet " />
            <strong>Fast checkout.</strong>
            <p>Your payment info is saved and ready.</p>
          </li>
          <li>
            <i className="fas fa-map-marker-alt" />
            <strong>Easy tracking.</strong>
            <p>Keep an eye on your order.</p>
          </li>
          <li>
            <i className="fas fa-history" />
            <strong>Quick recap.</strong>
            <p>Your order history is a click away.</p>
          </li>
        </ul>
        <Link to="/createaccount">
          <h3>Create an account &gt; </h3>
        </Link>
      </div>
    </div>
  );
}
