import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardContainer from "./ProjectCardContainer";
import { IProjectData, getDataFromFile } from "./Utils";

export default function ProjectsPage() {
  const [projectData, setProjectData] = useState<IProjectData[]>([]);

  let renderedProjectCards: JSX.Element[] = [];

  useEffect(() => {
    var data = getDataFromFile();
    setProjectData(data);
  }, []);

  renderedProjectCards = projectData.map((proj) => {
    return <ProjectCard project={proj} key={proj.id} />;
  });
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-white mt-16 mb-48">Projects</h1>

      <ProjectCardContainer>{renderedProjectCards}</ProjectCardContainer>
    </div>
  );
}
