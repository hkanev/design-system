import React from "react";
import FormInput from "./FormInput";
import Textarea from "./Textarea";
import "./From.scss";

const Form = (props) => {
  return (
    <form className="form">
      <div className="form-group">
        <FormInput />
        <FormInput />
      </div>
      <div className="form-group">
        <FormInput />
        <FormInput />
      </div>
      <div className="form-group">
        <Textarea />
      </div>
    </form>
  );
};
