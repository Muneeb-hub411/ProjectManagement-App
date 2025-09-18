const Projectsidebars = ({
  handleProjectStart,
  projects,
  handleselectedProject,
  selectedProjectId, // 👈 get this from parent
}) => {
  return (
    <aside className="w-1/3 bg-stone-900 text-stone-50 px-10 py-16 md:w-72 rounded-r-xl">
      <h2 className="font-bold text-stone-200 mb-8 md:text-xl uppercase">
        Your Projects
      </h2>

      {/* Add Project Button */}
      <div>
        <button
          onClick={handleProjectStart}
          className="px-4 py-2 text-sm md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 mb-8"
        >
          + Add Project
        </button>
      </div>

      {/* Project List */}
      <ul className="space-y-1">
        {projects.map((project) => {
          const isActive = selectedProjectId === project.id;

          return (
            <li key={project.id}>
              <button
                onClick={() => handleselectedProject(project.id)}
                className={`w-full text-left py-2 px-3 rounded-md border-b border-stone-700 transition-colors 
                  ${
                    isActive
                      ? "bg-stone-700 text-white font-semibold shadow-md"
                      : "text-stone-300 hover:text-stone-100 hover:bg-stone-800"
                  }`}
              >
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
