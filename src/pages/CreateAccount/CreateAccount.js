import React, { useEffect } from "react";
import "../../styles/css/CreateAccount.css";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Button, CircularProgress } from "@material-ui/core";
import api from "../../services/api";
import MytextField from "../../components/TextField/TextField";
import PasswordField from "../../components/PasswordField/PasswordField";
import { Cpf, Phone, ZipCode } from "../../components/NumberFormat";

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
  confirmPassword: yup
    .string()
    .required()
    .min(8)

    .label("Confirm password")
    .test("passwords-match", "Passwords must match", function(value) {
      return this.parent.password === value;
    }),
  phone_number: yup.string().required(),
  cpf: yup
    .string()
    .max(11)
    .min(11)
    .required("Cpf is a required field"),
  addressLine: yup
    .string()
    .required()
    .label("Address Line"),
  city: yup
    .string()
    .required()
    .label("City"),
  zip: yup
    .string()
    .required()
    .label("Zip"),
  country: yup
    .string()
    .required()
    .label("Country"),
  state: yup
    .string()
    .required()
    .label("State")
});

export default function CreateAccount({ history }) {
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
        cpf: "",
        addressLine: "",
        city: "",
        zip: "",
        country: "",
        state: "",
        confirmPassword: ""
      }}
      validationSchema={validationSchema}
      onSubmit={async (data, { setSubmitting, resetForm }) => {
        try {
          const response = await api.post("/api/customer", {
            first_name: data.first_name,
            last_name: data.last_name,
            email_address: data.email_address,
            password: data.password,
            confirmPassword: data.confirmPassword,
            phone_number: data.phone_number,
            cpf: data.cpf,
            customerAddress: {
              street_address: data.addressLine,
              city: data.city,
              zip: data.zip,
              country: data.country,
              state: data.state
            }
          });
          if (response.data) {
            sessionStorage.setItem("authorization", response.data.access_token);
            sessionStorage.setItem("id", response.data.user.id);
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
        <div className="crete-account-page">
          <Form className="crete-account-form">
            <h1 className="createAccount-form-title">Create an Account</h1>

            <MytextField
              name="first_name"
              id="first_name"
              type="input"
              label="First name"
            />

            <MytextField
              name="last_name"
              id="last_name"
              type="input"
              label="Last name"
            />

            <MytextField
              name="email_address"
              type="email"
              id="email_address"
              label=" Email address"
            />

            <MytextField
              name="phone_number"
              type="input"
              id="phone_number"
              label="Phone number"
              InputProps={Phone}
            />

            <MytextField
              name="cpf"
              id="cpf"
              type="input"
              label="CPF"
              InputProps={Cpf}
            />

            <MytextField
              name="addressLine"
              id="addressLine"
              type="input"
              label="Address line"
            />

            <MytextField name="city" id="city" type="input" label="City" />

            <MytextField
              name="zip"
              id="zip"
              type="input"
              label="Zip"
              InputProps={ZipCode}
            />

            <MytextField
              name="country"
              id="country"
              type="input"
              label="Country"
            />

            <MytextField name="state" id="state" type="input" label="State" />

            <PasswordField name="password" id="password" label="Password" />
            <PasswordField
              name="confirmPassword"
              id="confirmPassword"
              label="Confirm password"
            />
            {isSubmitting ? (
              <CircularProgress disableShrink />
            ) : (
              <Button
                variant="contained"
                className="submit_button"
                type="submit"
                disabled={isSubmitting}
              >
                Create an Account
              </Button>
            )}
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
