import React, { useState } from "react";
import { Typography, Button, makeStyles, IconButton } from "@material-ui/core";
import {
  ArrowRight,
  ArrowLeft,
  DoneAllOutlined,
  Done
} from "@material-ui/icons";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { Steper } from "../../components";
import "../../styles/css/Checkout.css";

function getSteps() {
  return ["Shipping address", "Payment details", "Review your order"];
}

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1)
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [addressLine, setAddressLine] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState();
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState();

  const addressValues = {
    addressLine,
    city,
    zip,
    country,
    state,
    firstName,
    lastName
  };

  const paymentValues = {
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv
  };

  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const handleStep = step => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  //Handle fiels change
  const handleChange = e => {
    if (e.target.name === "addressLine") {
      setAddressLine(e.target.value);
    } else if (e.target.name === "city") {
      setCity(e.target.value);
    } else if (e.target.name === "zip") {
      setZip(e.target.value);
    } else if (e.target.name === "country") {
      setCountry(e.target.value);
    } else if (e.target.name === "state") {
      setState(e.target.value);
    } else if (e.target.name === "firstName") {
      setFirstName(e.target.value);
    } else if (e.target.name === "lastName") {
      setLastName(e.target.value);
    } else if (e.target.name === "nameOnCard") {
      setNameOnCard(e.target.value);
    } else if (e.target.name === "cardNumber") {
      setCardNumber(e.target.value);
    } else if (e.target.name === "expiryDate") {
      setExpiryDate(e.target.value);
    } else if (e.target.name === "cvv") {
      setCvv(e.target.value);
    }
  };

  return (
    <div className="checkout">
      <div className="checkout_pages">
        <div className="stepper">
          <Steper
            activeStep={activeStep}
            completed={completed}
            handleStep={handleStep}
            steps={steps}
          />
        </div>

        {(() => {
          switch (activeStep) {
            case 0:
              return (
                <AddressForm
                  handleChange={handleChange}
                  values={addressValues}
                />
              );
            case 1:
              return (
                <PaymentForm
                  handleChange={handleChange}
                  values={paymentValues}
                />
              );
            case 2:
              return (
                <Review
                  addressValues={addressValues}
                  paymentValues={paymentValues}
                />
              );
            case 3:
              return <h1>Success</h1>;
            default:
              break;
          }
        })()}
        <div className="step_buttons">
          {allStepsCompleted() ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
                color="secondary"
                variant="contained"
                startIcon={<ArrowLeft>Back</ArrowLeft>}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
                endIcon={<ArrowRight>Next</ArrowRight>}
              >
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={handleComplete}
                  >
                    {completedSteps() === totalSteps() - 1 ? (
                      <DoneAllOutlined fontSize="large" />
                    ) : (
                      <Done fontSize="large" />
                    )}
                  </IconButton>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
