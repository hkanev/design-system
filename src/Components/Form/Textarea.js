import React from "react";
import "./Form.scss";
import FormLabel from "./FormLabel";

const TextField = ({data}) => {
  return (
  <div>
    <label for={data.name}>{data.label} {data.required ? '*' : ''}</label>
    <textarea name={data.name} id={data.name}/>
  </div>
  );
};

export default TextField;
