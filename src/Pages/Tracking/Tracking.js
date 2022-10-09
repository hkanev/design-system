import Input from "Components/Forms/Inputs/Input";
import { React, useState } from "react";

const Tracking = () => {
  const [form, setForm] = useState([
    {
      name: "first_name",
      value: "",
      label: "First Name",
      class: "",
      type: "text",
      disabled: false,
      required: true,
    },
    {
      name: "second_name",
      value: "",
      label: "Second Name",
      class: "",
      type: "text",
      disabled: false,
      required: true,
    },
  ]);

  function handleChange(e, row) {
    setForm(
      form.map((obj) => {
        if (obj.name === row.name) {
          obj.value = e.target.value;
        }

        return obj;
      })
    );
  }

  return (
    <>
      {form.map((row) => (
        <Input data={row} handleChange={(e) => handleChange(e, row)}></Input>
      ))}
    </>
  );
};

export default Tracking;
