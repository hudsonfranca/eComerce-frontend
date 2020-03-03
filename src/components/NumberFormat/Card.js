import React from "react";

import NumberFormat from "react-number-format";

export default function Card(props) {
  const { inputRef, onChange, name, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
            name
          }
        });
      }}
      isNumericString
      format="#### #### #### ####"
      mask="_"
    />
  );
}
