import React from "react";
import Tasks from "./Tasks";

const ProjectSelect = ({ project, handleDelete }) => {
  console.log("this is a project :", project);

  const formattedDate = new Date(project.enteredDueDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
      {/* Header */}
      <header className="flex justify-between items-center border-b pb-3">
        <h2 className="text-2xl font-bold text-gray-800">
          {project.enteredTitle}
        </h2>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg shadow hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </header>

      {/* Body */}
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 text-base leading-relaxed">
          {project.enteredDescription}
        </p>
        <p className="text-gray-500 text-sm italic">Due on {formattedDate}</p>
      </div>
      <h3 className="text-4xl font-bold">Tasks</h3>
      <Tasks />
    </div>
  );
};

export default ProjectSelect;
