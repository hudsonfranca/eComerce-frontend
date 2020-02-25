import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import api from "../../services/api";
import MytextField from "../../components/TextField/TextField";
import "../../styles/css/AddressPage.css";

const validationSchema = yup.object({
  street_address: yup.string().required("Street address is a required field"),
  city: yup.string().required("City is a required field"),
  zip: yup.string().required("Zip is a required field"),
  country: yup.string().required("Country is a required field"),
  state: yup.string().required("State is a required field")
});

export default function AddressPage() {
  return (
    <Formik
      initialValues={{
        street_address: "",
        city: "",
        zip: "",
        country: "",
        state: ""
      }}
      validationSchema={validationSchema}
      onSubmit={async (data, { setSubmitting, resetForm }) => {
        // try {
        //   const response = await api.post(`/api/customer/1/addresses`, {
        //     first_name: data.first_name,
        //     last_name: data.last_name,
        //     email_address: data.email_address,
        //     password: data.password,
        //     phone_number: data.phone_number,
        //     cpf: data.cpf
        //   });
        //   if (response) {
        //     localStorage.setItem("authorization", response.data.access_token);
        //     setSubmitting(false);
        //     resetForm();
        //   }
        // } catch (err) {
        //   console.log(err);
        // }
      }}
    >
      {({ values, errors, isSubmitting, touched }) => (
        <div className="crete-address-page">
          <Form className="crete-address-form">
            <h1 className="crete-address-form-title">Shipping address</h1>

            <MytextField
              name="street_address"
              id="street_address"
              type="input"
              label="Street address"
            />

            <MytextField name="city" id="city" type="input" label="City" />

            <MytextField name="zip" type="email" id="zip" label="Zip" />

            <MytextField
              name="country"
              type="input"
              id="country"
              label="Country"
            />

            <MytextField name="state" type="input" id="state" label="State" />

            <Button
              variant="contained"
              type="submit"
              color="secondary"
              disabled={isSubmitting}
              className="submit_button"
            >
              Continue to payment method method.
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
