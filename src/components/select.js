import React from "react";

const Select = ({ name, label, onChange }) => {
  return (
    <div className="mt-4">
      <label htmlFor={name} className="p-1 mr-6 font-bold ml-1">{label}</label>
      <select className="border rounded p-2 bg-white" name={name} onChange={onChange} >
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
    </div>
  );
};

export default Select;
