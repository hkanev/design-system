import React from "react";
import "./Form.scss";
import FormLabel from "./FormLabel";

const TextField = (props) => {
  return (
    <div>
      <FormLabel></FormLabel>
      <input className="field textarea" placeholder={props.placeholder} />
    </div>
  );
};

export default TextField;
