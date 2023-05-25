import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IProjectData, getProjectDataBySlug } from "./Utils";
import Error404Page from "../404/404";
import ProjectDetailCarousel from "./ProjectDetailCarousel";
import ProjectDetailSidebar from "./ProjectDetailSidebar";
import ProjectDetailInfo from "./ProjectDetailInfo";
import { Button, ButtonType } from "../../ui/Button";
import Breadcrumb from "../../ui/Breadcrumb";

export default function ProjectDetailPage() {
  let { slug } = useParams();
  const projectData: IProjectData | undefined = getProjectDataBySlug(slug);

  if (!slug || !projectData) {
    return <Error404Page />;
  }

  return (
    <div className="pb-32">
      {/* breadcrumb */}
      <Breadcrumb>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to={`/projects/${projectData.slug}`}>
              {projectData.title}
            </Link>
          </li>
        </ul>
      </Breadcrumb>
      <div className="flex flex-col lg:flex-row gap-4 p-0 lg:p-8 mb-8">
        <ProjectDetailCarousel projectImages={projectData.images} />
        <ProjectDetailSidebar projectData={projectData} />
      </div>

      <div className="px-8 w-full">
        <ProjectDetailInfo projectData={projectData} />
      </div>

      <div className="flex justify-center items-center mt-24">
        <Button type={ButtonType.Primary}>
          <Link className="text-xl" to="/projects">
            Back to projects
          </Link>
        </Button>
      </div>
    </div>
  );
}
