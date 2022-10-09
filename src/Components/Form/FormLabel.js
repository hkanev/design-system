import React from "react";
import "./Form.scss";

const FormLabel = (props) => {
  return (
    <label className="field_label" for={props.fieldId}>
      {props.children}
    </label>
  );
};

export default FormLabel;
