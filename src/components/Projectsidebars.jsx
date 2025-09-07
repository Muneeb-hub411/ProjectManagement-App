const Projectsidebars = ({ handleProjectStart, projects }) => {
  return (
    <aside className=" w-1/3 bg-stone-900 text-stone-50 px-10 py-16 md:w-72 rounded-r-xl">
      <h2 className="font-bold text-stone-200 mb-8 md:text-xl uppercase">
        Your Projects
      </h2>
      <div>
        <button
          onClick={handleProjectStart}
          className="px-4 py-2 text-sm md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 mb-8"
        >
          + Add Projects
        </button>
      </div>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <button className="text-stone-300 w-full  hover:text-stone-100 text-left py-2 border-b border-stone-700">
                {project.enteredTitle}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Projectsidebars;
