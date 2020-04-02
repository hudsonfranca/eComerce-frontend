import React from "react";
import { TextField, makeStyles } from "@material-ui/core";
import { Card, Cvv, CardExpiry } from "../../components/NumberFormat";
import "../../styles/css/PaymentForm.css";

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

export default function PaymentForm({ handleChange, values }) {
  const classes = useStyles();

  const { nameOnCard, cardNumber, expiryDate, cvv } = values;

  return (
    <form action="" className="payment_form">
      <h2>Payment method</h2>

      <TextField
        name="nameOnCard"
        label="Name on card"
        multiline
        rowsMax="4"
        value={nameOnCard}
        onChange={handleChange}
        variant="filled"
        className="textField"
        InputProps={{
          className: classes.multilineColor
        }}
        InputLabelProps={{ className: classes.InputLabelProps }}
      />

      <TextField
        name="cardNumber"
        label="Card number"
        multiline
        rowsMax="4"
        value={cardNumber}
        onChange={e => handleChange(e)}
        variant="filled"
        className="textField"
        InputProps={{
          inputComponent: Card,
          className: classes.multilineColor
        }}
        InputLabelProps={{ className: classes.InputLabelProps }}
      />

      <TextField
        name="expiryDate"
        label="Expiry date"
        multiline
        rowsMax="4"
        value={expiryDate}
        onChange={e => handleChange(e)}
        variant="filled"
        className="textField"
        InputProps={{
          inputComponent: CardExpiry,
          className: classes.multilineColor
        }}
        InputLabelProps={{ className: classes.InputLabelProps }}
      />

      <TextField
        name="cvv"
        label="CVV"
        multiline
        rowsMax="4"
        value={cvv}
        onChange={e => handleChange(e)}
        variant="filled"
        className="textField"
        InputProps={{
          inputComponent: Cvv,
          className: classes.multilineColor
        }}
        InputLabelProps={{ className: classes.InputLabelProps }}
      />
    </form>
  );
}
