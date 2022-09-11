import React from "react";

const TodoCard = ({title, content, isCompleted}) => {
  return (
    <div className="rounded border bg-slate-800 text-white border-teal-200 rounded-lg m-2 shadow-xl">
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2 ml-4">Title of todo: {title}</div>
        <p className="m-1 text-gray-700 text-base text-center bg-blue-100 p-3 border rounded-2xl">
          {content}
        </p>
        <div className="ml-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-1">Edit</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-1">Delete</button>
        </div>
        <p className="text-right mr-4">
          Completed: {isCompleted}
        </p>
      </div>
    </div>
  );
};

export default TodoCard;
