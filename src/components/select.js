import React from "react";

const Select = ({ name, label }) => {
  return (
    <div className="mt-4">
      <label htmlFor={name} className="p-1 mr-6 font-bold ml-1">{label}</label>
      <select className="border rounded p-2 bg-white" name={name}>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
    </div>
  );
};

export default Select;
