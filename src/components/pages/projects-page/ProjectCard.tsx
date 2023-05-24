import { IProjectData } from "./Utils";
import LanguageIcon from "./LanguageIcon";

type Props = {
  project: IProjectData;
};

export default function ProjectCard({ project }: Props) {
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

  const renderedLanguages = project.languages?.map((lang, index) => {
    return <LanguageIcon language={lang} key={index} />;
  });

  let upperContent = <></>;
  if (project.images && project.images?.length > 0) {
    upperContent = (
      <img src={project.images ? project.images[0] : ""} alt={project.title} />
    );
  } else {
    console.log("no image available");
    upperContent = <div className="text-white">no image available</div>;
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="h-64 border-b border-gray-500">{upperContent}</figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-primary">
          {project.title}
          <div className="flex gap-2">{renderedLanguages}</div>
        </h2>
        <p>{project.subtitle}</p>
        <div className="card-actions justify-end">{renderedTags}</div>
      </div>
    </div>
  );
}
