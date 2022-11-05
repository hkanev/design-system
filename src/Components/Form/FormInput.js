import React from "react";
import "./FormInput.scss";
import FormLabel from "./FormLabel";

const FormInput = ({ element, updateValue }) => {
  function changeValue(e) {
    updateValue(e.target.value, element);
  }

  return (
    <div className="field">
      <label htmlFor={element.name} className="field_label">
        {element.label} {element.required ? "*" : ""}
      </label>
      <input
        onChange={changeValue}
        type={element.inputType}
        name={element.name}
        id={element.name}
      />
    </div>
  );
};

export default FormInput;
