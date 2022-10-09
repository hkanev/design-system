import React from "react";

export default function Input({ data, handleChange }) {
  return (
    <div>
      <label for={data.name}>{data.label}</label>
      <input
        id={data.name}
        name={data.name}
        value={data.value}
        type={data.type}
        onChange={handleChange}
      ></input>
    </div>
  );
}
