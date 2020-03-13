import React, { useState, useEffect } from "react";
import { LinearProgress, makeStyles } from "@material-ui/core";
import api from "../../services/api";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    },
    height: "100%"
  }
}));

export function Submit({ addressValues, paymentValues, push }) {
  const classes = useStyles();
  const [response, setResponse] = useState(true);
  const [uploadPercentage, setUploadPercentage] = useState(50);

  const { city, zip, country, state, addressLine } = addressValues;

  async function handleSubmit() {
    try {
      const { data } = await api.post(
        "/api/orders",
        {
          id_payment_methods: 1,
          status: "Pending",
          orderAddress: {
            street_address: addressLine,
            city,
            zip,
            country,
            state
          }
        },
        {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("authorization")}`
          }
        }
      );
      if (data) {
        setUploadPercentage(100);
        push();
      } else {
        setResponse(false);
      }
    } catch (err) {
      setResponse(false);
      console.log(err);
    }
  }

  useEffect(() => {
    handleSubmit();
  }, []);

  useEffect(() => {
    console.log(uploadPercentage);
  }, [uploadPercentage]);

  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={uploadPercentage} />
      {response ? "" : <h1>Error</h1>}
    </div>
  );
}

export default React.memo(Submit);
