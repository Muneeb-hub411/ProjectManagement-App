import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import Addproject from "./components/Addproject.jsx";
import Projectsidebars from "./components/Projectsidebars.jsx";
function App() {
  const [selectProject, setSelectProject] = useState({
    projeectid: undefined,
    projects: [],
  });

  const handleStartProject = () => {
    setSelectProject((prevState) => ({
      ...prevState,
      projeectid: null,
    }));
  };
  const handleAddProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Math.random().toString(),
    };
    setSelectProject((prevState) => ({
      ...prevState,

      projects: [...prevState.projects, newProject],
    }));
  };
  const handleCancel = () => {
    setSelectProject((prevState) => ({
      ...prevState,
      projeectid: undefined,
    }));
  };

  console.log(selectProject);
  let content;
  if (selectProject.projeectid === undefined) {
    content = <NoProjectSelected handleProjectStart={handleStartProject} />;
  } else if (selectProject.projeectid === null) {
    content = (
      <Addproject handleCancel={handleCancel} handleSave={handleAddProject} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Projectsidebars handleProjectStart={handleStartProject} />
      {content}
    </main>
  );
}

export default App;
