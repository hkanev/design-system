export const formConf = {
  fields: [
    {
      type: "input",
      inputType: "email",
      name: "email",
      label: "Email",
      required: false,
      disabled: false,
      error: false,
      errorMessage: "",
      value: "",
      class: "",
      wrapper: "",
      group: "contact",
      groupClass: "form-row",
    },
    {
      type: "input",
      inputType: "text",
      name: "name",
      label: "Name",
      required: true,
      disabled: false,
      error: false,
      errorMessage: "",
      value: "",
      class: "",
      wrapper: "",
      group: "contact",
      groupClass: "form-row",
    },
    {
      type: "textarea",
      name: "message",
      label: "Message",
      required: true,
      disabled: false,
      error: false,
      errorMessage: "",
      value: "",
      class: "",
      wrapper: "",
    },
    {
      type: "select",
      name: "select-plain",
      label: "Select Option",
      required: true,
      disabled: false,
      error: false,
      errorMessage: "",
      value: "",
      multiple: false,
      plainOptions: ["Ivan", "Petar"],
      class: "",
      wrapper: "",
    },
    {
      type: "select",
      name: "select",
      label: "Select Option",
      required: true,
      disabled: false,
      error: false,
      errorMessage: "",
      value: "",
      multiple: false,
      options: [
        {
          name: "Ivan",
          id: 0,
          age: 22,
        },
        {
          name: "Petar",
          id: 1,
          age: 24,
        },
      ],
      optionValue: "id",
      optionLabel: "name",
      class: "",
      wrapper: "",
    },
  ],
  submit: {
    name: "Submit",
    class: "submit-btn",
    visible: true,
    disabled: false,
  },
};
