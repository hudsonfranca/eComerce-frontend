import React, { useEffect } from "react";
import "../../styles/css/CreateAccount.css";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import api from "../../services/api";
import MytextField from "../../components/TextField/TextField";
import PasswordField from "../../components/PasswordField/PasswordField";

const validationSchema = yup.object({
  first_name: yup.string().required("First name is a required field"),
  last_name: yup.string().required("Last name is a required field"),
  email_address: yup
    .string()
    .email("Email address must be a valid email")
    .lowercase()
    .required("Email address is a required field"),
  password: yup
    .string()
    .min(8)
    .required("Password is a required field"),
  phone_number: yup.string().required(),
  cpf: yup
    .string()
    .max(11)
    .min(11)
    .required("Cpf is a required field")
});

export default function CreateAccount({}) {
  useEffect(() => {
    document.title = "Create Account";
  }, []);
  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email_address: "",
        password: "",
        phone_number: "",
        cpf: ""
      }}
      validationSchema={validationSchema}
      onSubmit={async (data, { setSubmitting, resetForm }) => {
        try {
          const response = await api.post("/api/customer", {
            first_name: data.first_name,
            last_name: data.last_name,
            email_address: data.email_address,
            password: data.password,
            phone_number: data.phone_number,
            cpf: data.cpf
          });
          if (response) {
            localStorage.setItem("authorization", response.data.access_token);
            setSubmitting(false);
            resetForm();
          }
        } catch (err) {
          console.log(err);
        }
      }}
    >
      {({ values, errors, isSubmitting, touched }) => (
        <div className="crete-account-page">
          <Form className="crete-account-form">
            <h1 className="createAccount-form-title">Create an Account</h1>

            <MytextField
              name="first_name"
              id="first_name"
              type="input"
              label="First name"
              icon="person"
            />

            <MytextField
              name="last_name"
              id="last_name"
              type="input"
              label="Last name"
              icon="person"
            />

            <MytextField
              name="email_address"
              type="email"
              id="email_address"
              label=" Email address"
              icon="email"
            />

            <PasswordField name="password" id="password" label="Password" />

            <MytextField
              name="phone_number"
              type="input"
              id="phone_number"
              label="Phone number"
              icon="phone"
            />
            <label htmlFor="cpf" className="label" />
            <MytextField name="cpf" id="cpf" type="input" label="CPF" />
            <Button
              variant="contained"
              className="submit_button"
              type="submit"
              disabled={isSubmitting}
            >
              Create an Account
            </Button>
          </Form>

          <div className="create-account-sidebar">
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
          </div>
        </div>
      )}
    </Formik>
  );
}
