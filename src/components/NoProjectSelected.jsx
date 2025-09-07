import React from "react";
import img from "../assets/no-projects.png";

const NoProjectSelected = ({ handleProjectStart }) => {
  return (
    <div className="w-2/3 bg-stone-100 p-16 rounded-l-xl flex flex-col items-center  gap-8">
      <img src={img} className="h-44 w-44" alt="empty list" />
      <h2 className="text-3xl text-slate-600 font-bold">No Project Selected</h2>

      <button
        onClick={handleProjectStart}
        className="px-4 py-2 text-sm md:text-base rounded-md bg-stone-700 text-stone-100 hover:bg-stone-600 hover:text-stone-100 mb-8"
      >
        Create Project
      </button>
    </div>
  );
};

export default NoProjectSelected;
