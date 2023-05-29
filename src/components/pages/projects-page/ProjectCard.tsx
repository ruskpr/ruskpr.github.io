import { useNavigate } from "react-router-dom";
import { IProjectData } from "./Utils";
import { CiImageOff } from "react-icons/ci";
import LanguageIcon from "./LanguageIcon";
import TagBadge from "./TagBadge";

type Props = {
  project: IProjectData;
};

export default function ProjectCard({ project }: Props) {
  const navigate = useNavigate();

  // tags
  const renderedTags = project.tags?.map((tag, index) => {
    return <TagBadge tag={tag} key={index} />;
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
        className="h-full w-full object-cover"
        src={project.images ? project.images[0] : ""}
        alt={project.title}
      />
    );
  } else {
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
      className="card border border-zinc-600 hover:scale-100 lg:hover:scale-105 transition-all m-3 w-full sm:w-96 bg-zinc-800 cursor-pointer"
    >
      <figure className="h-64 border-b border-gray-500">{imageContent}</figure>
      <div className="card-body">
        <h2 className="card-title text-3xl text-gray-200 font-primary font-normal">
          {project.title}
          <div className="flex gap-2">{renderedLanguages}</div>
        </h2>
        <p className="hidden sm:block text-gray-400">{project.type}</p>
        <p className="block pb-2 text-gray-200">{project.subtitle}</p>
        <div className="card-actions justify-start sm:justify-end pt-4 sm:pt-0">
          {renderedTags}
        </div>
      </div>
    </div>
  );
}
