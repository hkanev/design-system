import React from "react";

function Select({ element }) {
  function getOptions() {
    if (element.plainOptions) {
      return element.plainOptions.map((option) => {
        return <option value={option}>{option}</option>;
      });
    }
    if (element.options) {
      return element.options.map((option) => {
        return (
          <option value={option[element.optionValue]}>
            {option[element.optionLabel]}
          </option>
        );
      });
    }
  }
  return (
    <div>
      <label className="field_label">{element.label}</label>

      <select name="" id="">
        {getOptions()}
      </select>
    </div>
  );
}

export default Select;
