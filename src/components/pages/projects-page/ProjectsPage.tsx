import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardContainer from "./ProjectCardContainer";
import { IProjectData, getDataFromFile } from "./Utils";
import { Link } from "react-router-dom";
import Breadcrumb from "../../ui/Breadcrumb";

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
    <div className="w-full h-full pb-64">
      {/* breadcrumb */}
      <Breadcrumb>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </Breadcrumb>

      <ProjectCardContainer>{renderedProjectCards}</ProjectCardContainer>
    </div>
  );
}
