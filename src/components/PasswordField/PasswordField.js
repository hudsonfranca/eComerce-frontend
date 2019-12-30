import React, { useState } from "react";
import { useField } from "formik";
import { TextField, makeStyles, InputAdornment } from "@material-ui/core";
import { RemoveRedEye } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
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
  eye: {
    cursor: "pointer"
  }
}));

const PasswordField = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const classes = useStyles();
  const errorText = meta.error && meta.touched ? meta.error : "";
  const [passwordIsMasked, setPasswordIsMasked] = useState(false);
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
      label={label}
      type={passwordIsMasked ? "password" : "text"}
      variant="filled"
      required
      className={classes.textField}
      InputProps={{
        className: classes.multilineColor,
        endAdornment: (
          <InputAdornment position="end">
            <RemoveRedEye
              className={classes.eye}
              onClick={() => setPasswordIsMasked(!passwordIsMasked)}
            />
          </InputAdornment>
        )
      }}
      InputLabelProps={{ className: classes.InputLabelProps }}
    />
  );
};

export default PasswordField;
