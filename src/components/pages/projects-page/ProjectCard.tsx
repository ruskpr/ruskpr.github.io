import { useNavigate } from "react-router-dom";
import { IProjectData } from "./Utils";
import { CiImageOff } from "react-icons/ci";
import LanguageIcon from "./LanguageIcon";

type Props = {
  project: IProjectData;
};

export default function ProjectCard({ project }: Props) {
  const navigate = useNavigate();

  // tags
  const renderedTags = project.tags?.map((tag, index) => {
    return (
      <div
        className="badge border-0 bg-indigo-500 text-white py-2 font-primary"
        key={index}
      >
        {tag}
      </div>
    );
  });

  // languages
  const renderedLanguages = project.languages?.map((lang, index) => {
    return <LanguageIcon language={lang} key={index} />;
  });

  const handleCardClicked = () => {
    navigate(`/projects/${project.slug}`);
  };

  // image content
  let imageContent = <></>;
  if (project.images && project.images?.length > 0) {
    imageContent = (
      <img
        className="h-full"
        style={{ objectFit: "cover" }}
        src={project.images ? project.images[0] : ""}
        alt={project.title}
      />
    );
  } else {
    console.log("no image available");
    imageContent = (
      <div className="flex flex-col items-center ">
        <CiImageOff className="text-7xl" />
        <span className="text-xl">no image available</span>
      </div>
    );
  }

  return (
    <div
      onClick={handleCardClicked}
      className="card hover:scale-100 lg:hover:scale-105 transition-all m-3 border border-gray-300 w-full sm:w-96 bg-gray-200 cursor-pointer"
    >
      <figure className="h-64 border-b border-gray-300">{imageContent}</figure>
      <div className="card-body">
        <h2 className="card-title text-3xl text-gray-600 font-primary">
          {project.title}
          <div className="flex gap-2">{renderedLanguages}</div>
        </h2>
        <p className="pb-2 text-gray-500">{project.subtitle}</p>
        <div className="card-actions justify-end">{renderedTags}</div>
      </div>
    </div>
  );
}
