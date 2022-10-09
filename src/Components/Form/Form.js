import {React, useState} from "react";
import FormInput from "./FormInput";
import Textarea from "./Textarea";
import "./Form.scss";

export const Form = ({formData}) => {
  const [formState, setFormState] = useState(() => formData);
  function updateValue(value, element) {
      setFormState(   
      formState.map((obj) => {
        if (obj.name === element.name) {
          obj.value = value;
        }

        return obj;
      }))
  }


  function loadInputType(data) {
    switch(data.type) {
      case 'input':
       return <FormInput element={data} updateValue={updateValue}/>
      case 'textarea':
       return <Textarea data={data}/>
    }
  }

  return (
    <form className="form">
    {formData.map((item, index) =>
      (
        loadInputType(item)
      ) 
    )}
  </form>
  );
};
