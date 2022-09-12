import React from "react";

const Select = ({ name, label }) => {
  return (
    <div className="mt-4">
      <label htmlFor={name} className="p-1 mr-6 font-bold ml-1">{label}</label>
      <select className="border" name={name}>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
    </div>
  );
};

export default Select;
