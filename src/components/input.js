import React from "react";

const Input = ({ htmlFor, label, type, name, id, value, placeholder }) => {
  return (
    <>
      <label
        className="block text-gray-700 text-sm font-bold ml-4"
        htmlFor={htmlFor}
      >{label}</label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
