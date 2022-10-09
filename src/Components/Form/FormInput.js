import React from "react";
import "./FormInput.scss";
import FormLabel from "./FormLabel";

const FormInput = (props) => {
  return (
    <div>
      <FormLabel></FormLabel>
      <input className="field" placeholder={props.placeholder} />
    </div>
  );
};

export default FormInput;
