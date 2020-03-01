import React from "react";
import { TextField, makeStyles } from "@material-ui/core";
import { Zip } from "../../components/NumberFormat";
import "../../styles/css/AddressForm.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
    padding: 10,
    width: "75%",
    height: 50
  },
  multilineColor: {
    color: "#fafbfc"
  },
  InputLabelProps: {
    color: "#fafbfc"
  },
  cursor: {
    cursor: "pointer"
  }
}));

export default function AddressForm({ handleChange, values }) {
  const classes = useStyles();
  const {
    step,
    addressLine,
    city,
    zip,
    country,
    state,
    firstName,
    lastName
  } = values;
  return (
    <form action="" className="address_form">
      <h2>Shipping address</h2>
      <TextField
        name="firstName"
        label="First name"
        multiline
        rowsMax="4"
        value={firstName}
        onChange={handleChange}
        variant="filled"
        className="textField"
        InputProps={{
          className: classes.multilineColor
        }}
        InputLabelProps={{ className: classes.InputLabelProps }}
      />

      <TextField
        name="lastName"
        label="Last name"
        multiline
        rowsMax="4"
        value={lastName}
        onChange={handleChange}
        variant="filled"
        className="textField"
        InputProps={{
          className: classes.multilineColor
        }}
        InputLabelProps={{ className: classes.InputLabelProps }}
      />
      <TextField
        id="addressLine"
        name="addressLine"
        label="Address line"
        multiline
        rowsMax="4"
        value={addressLine}
        onChange={handleChange}
        variant="filled"
        className="textField addressLine"
        InputProps={{
          className: classes.multilineColor
        }}
        InputLabelProps={{ className: classes.InputLabelProps }}
      />

      <TextField
        name="city"
        label="City"
        multiline
        rowsMax="4"
        value={city}
        onChange={handleChange}
        variant="filled"
        className="textField"
        InputProps={{
          className: classes.multilineColor
        }}
        InputLabelProps={{ className: classes.InputLabelProps }}
      />

      <TextField
        name="state"
        label="State"
        multiline
        rowsMax="4"
        value={state}
        onChange={handleChange}
        variant="filled"
        className="textField"
        InputProps={{
          className: classes.multilineColor
        }}
        InputLabelProps={{ className: classes.InputLabelProps }}
      />

      <TextField
        name="zip"
        label="Zip"
        multiline
        rowsMax="4"
        value={zip}
        onChange={handleChange}
        variant="filled"
        className="textField"
        InputProps={{
          inputComponent: Zip,
          className: classes.multilineColor
        }}
        InputLabelProps={{ className: classes.InputLabelProps }}
      />

      <TextField
        name="country"
        label="Country"
        multiline
        rowsMax="4"
        value={country}
        onChange={handleChange}
        variant="filled"
        className="textField"
        InputProps={{
          className: classes.multilineColor
        }}
        InputLabelProps={{ className: classes.InputLabelProps }}
      />
    </form>
  );
}
