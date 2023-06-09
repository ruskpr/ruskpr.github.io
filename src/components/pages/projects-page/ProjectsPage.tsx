import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardContainer from "./ProjectCardContainer";
import { IProjectData, getDataFromFile } from "./Utils";
import { Link } from "react-router-dom";
import Breadcrumb from "../../ui/Breadcrumb";
import SearchComponent from "./Search";

export default function ProjectsPage() {
  const [projectData, setProjectData] = useState<IProjectData[]>([]);

  let renderedProjectCards: JSX.Element[] = [];

  useEffect(() => {
    document.title = "ruskpr | Projects";
    window.scrollTo(0, 1);

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

      <SearchComponent data={projectData} setData={setProjectData} />
      <br />
      <ProjectCardContainer>{renderedProjectCards}</ProjectCardContainer>
    </div>
  );
}
