import React from "react";

const AddTasks = () => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <input
        type="text"
        className="w-[30%] bg-gray-200 border-2 border-gray-700"
      />
      <button className="border-2 p-1 bg-blue-500 border-blue-700 w-20 text-white rounded-lg hover:bg-blue-600 hover:border-blue-800">
        Add
      </button>
    </div>
  );
};

export default AddTasks;
