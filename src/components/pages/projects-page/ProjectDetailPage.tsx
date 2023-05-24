import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IProjectData, getProjectDataBySlug } from "./Utils";
import Error404Page from "../404/404";
import ProjectDetailCarousel from "./ProjectDetailCarousel";
import ProjectDetailSidebar from "./ProjectDetailSidebar";
import ProjectDetailInfo from "./ProjectDetailInfo";

export default function ProjectDetailPage() {
  let { slug } = useParams();
  const projectData: IProjectData | undefined = getProjectDataBySlug(slug);

  if (!slug || !projectData) {
    return <Error404Page />;
  }

  return (
    <div className="px-8 pt-8 pb-64">
      {/* breadcrumb */}
      <div className="text-sm breadcrumbs p-8 pl-16">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>{projectData.title}</li>
        </ul>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 p-0 lg:p-8 mb-8">
        <ProjectDetailCarousel projectImages={projectData.images} />
        <ProjectDetailSidebar projectData={projectData} />
      </div>
      <ProjectDetailInfo projectData={projectData} />
    </div>
  );
}
