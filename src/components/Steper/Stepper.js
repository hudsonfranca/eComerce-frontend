import React from "react";
import { makeStyles, Stepper, Step, StepButton } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  Stepper: {
    backgroundColor: "#3E3E3E"
  },
  Step: {
    color: "#fafbfc"
  }
}));

export default function HorizontalNonLinearStepper({
  steps,
  activeStep,
  completed,
  handleStep
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep} className={classes.Stepper}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              onClick={handleStep(index)}
              completed={completed[index]}
            >
              <p className={classes.Step}>{label}</p>
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
