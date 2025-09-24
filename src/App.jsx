import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import Addproject from "./components/Addproject.jsx";
import Projectsidebars from "./components/Projectsidebars.jsx";
import ProjectSelect from "./components/ProjectSelect.jsx";

function App() {
  const [selectProject, setSelectProject] = useState({
    projectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddtask = (text) => {
    const newTask = {
      text: text,
      id: Math.random().toString(),
    };

    setSelectProject((prevState) => ({
      ...prevState,
      projectId: prevState.projectId,
      tasks: [newTask, ...prevState.tasks],
    }));
    console.log(selectProject);
    console.log("this is new task :", newTask);
  };
  const handleDeleteTask = (id) => {
    setSelectProject((prevState) => ({
      ...prevState,
      projectId: prevState.projectId,
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  const handleStartProject = () => {
    setSelectProject((prevState) => ({
      ...prevState,
      projectId: null,
    }));
  };

  const handleAddProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Math.random().toString(),
    };
    setSelectProject((prevState) => ({
      ...prevState,
      projectId: undefined,
      projects: [...prevState.projects, newProject],
    }));
    console.log(selectProject);
    console.log("this is new project :", newProject);
  };

  const handleCancel = () => {
    setSelectProject((prevState) => ({
      ...prevState,
      projectId: undefined,
    }));
  };

  const handleSelectedProject = (id) => {
    setSelectProject((prevState) => ({
      ...prevState,
      projectId: id,
    }));
  };

  const handleDeleteProject = () => {
    setSelectProject((prevState) => ({
      ...prevState,
      projectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.projectId
      ),
    }));
  };

  let projectSelected = selectProject.projects.find(
    (project) => project.id === selectProject.projectId
  );
  console.log("this is selected project :", selectProject);

  let content = (
    <ProjectSelect
      project={projectSelected}
      handleDelete={handleDeleteProject}
      onAddTask={handleAddtask}
      onDeleteTask={handleDeleteTask}
      tasks={selectProject.tasks}
    />
  );
  if (selectProject.projectId === undefined) {
    content = <NoProjectSelected handleProjectStart={handleStartProject} />;
  } else if (selectProject.projectId === null) {
    content = (
      <Addproject handleCancel={handleCancel} handleSave={handleAddProject} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Projectsidebars
        handleselectedProject={handleSelectedProject}
        handleProjectStart={handleStartProject}
        projects={selectProject.projects}
        selectedProjectId={selectProject.projectId}
        onAddTask={handleAddtask}
      />
      {content}
    </main>
  );
}

export default App;
