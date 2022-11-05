import { React, useState } from "react";
import FormInput from "./FormInput";
import Textarea from "./Textarea";
import "./Form.scss";
import { element } from "prop-types";
import Select from "./Select";

export const Form = ({ formData, submitForm }) => {
  const [formState, setFormState] = useState(() => formData.fields);
  function updateValue(value, element) {
    setFormState(
      formState.map((obj) => {
        if (obj.name === element.name) {
          obj.value = value;
        }

        return obj;
      })
    );
  }

  function loadInputType(element) {
    switch (element.type) {
      case "input":
        return (
          <FormInput
            key={element.name}
            element={element}
            updateValue={updateValue}
          />
        );
      case "textarea":
        return (
          <Textarea
            key={element.name}
            element={element}
            updateValue={updateValue}
          />
        );
      case "select":
        return <Select key={element.name} element={element} />;
    }
  }

  function submitFormHandler(e) {
    e.preventDefault();
    submitForm(formState);
  }

  return (
    <form className="form">
      {formState.map((element) => loadInputType(element))}
      {formData.submit.visible && (
        <button
          type="submit"
          className={formData.submit.class}
          onClick={submitFormHandler}
        >
          {formData.submit.name}
        </button>
      )}
    </form>
  );
};
