import React from "react";
import "./Form.scss";
import FormLabel from "./FormLabel";

const TextField = ({ element, updateValue }) => {
  function changeValue(e) {
    updateValue(e.target.value, element);
  }
  return (
    <div>
      <label htmlFor={element.name} className="field_label">
        {element.label} {element.required ? "*" : ""}
      </label>
      <textarea
        onChange={changeValue}
        name={element.name}
        id={element.name}
        className="textarea"
      />
    </div>
  );
};

export default TextField;
