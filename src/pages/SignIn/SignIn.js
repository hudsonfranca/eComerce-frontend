import React, { useEffect } from "react";
import "../../styles/css/SignIn.css";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

import * as yup from "yup";
import TextField from "../../components/TextField/TextField";
import PasswordField from "../../components/PasswordField/PasswordField";
import { Button, Close, CircularProgress } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import api from "../../services/api";

const validationSchema = yup.object({
  email_address: yup
    .string()
    .email("Email address must be a valid email")
    .lowercase()
    .required("Email address is a required field"),
  password: yup
    .string()
    .min(8)
    .required("Password is a required field")
});

export default function SignIn({ history }) {
  useEffect(() => {
    document.title = "Sign in";
  }, []);
  return (
    <div className="signIn-page">
      <Formik
        initialValues={{
          email_address: "",
          password: ""
        }}
        validationSchema={validationSchema}
        onSubmit={async (data, { setSubmitting, resetForm }) => {
          try {
            const response = await api.post("/api/sessions", {
              email_address: data.email_address,
              password: data.password
            });

            if (response.data) {
              sessionStorage.setItem(
                "authorization",
                response.data.access_token
              );

              sessionStorage.setItem("id", response.data.customer.id);

              setSubmitting(false);
              resetForm();
              history.push("/");
            }
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {({ values, errors, isSubmitting, touched }) => (
          <Form className="signIn-page-form">
            <h1 className="sign-form-title">Sign In</h1>
            <TextField
              name="email_address"
              type="email"
              id="email_address"
              label=" Email address"
              icon="email"
            />

            <PasswordField name="password" id="password" label="Password" />

            {isSubmitting ? (
              <CircularProgress disableShrink />
            ) : (
              <Button
                variant="contained"
                className="btn"
                type="submit"
                disabled={isSubmitting}
              >
                Sign In
              </Button>
            )}
          </Form>
        )}
      </Formik>

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
