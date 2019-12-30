import React from "react";
import { useField } from "formik";
import { TextField, makeStyles, InputAdornment } from "@material-ui/core";
import { ContactMail, Person, Phone } from "@material-ui/icons";
import "../../styles/css/TextField.css";

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

const MytextField = ({ type, label, placeholder, icon, ...props }) => {
  const [field, meta] = useField(props);
  const classes = useStyles();
  const errorText = meta.error && meta.touched ? meta.error : "";

  function customIcon(name) {
    if (name === "email") {
      return <ContactMail className={classes.cursor} />;
    }
    if (name === "person") {
      return <Person className={classes.cursor} />;
    }
    if (name === "phone") {
      return <Phone className={classes.cursor} />;
    }
  }

  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
      label={label}
      type={type}
      variant="filled"
      required
      className={classes.textField}
      InputProps={{
        className: classes.multilineColor,
        endAdornment: (
          <InputAdornment position="end">
            {icon && customIcon(icon)}
          </InputAdornment>
        )
      }}
      InputLabelProps={{ className: classes.InputLabelProps }}
    />
  );
};

export default MytextField;
