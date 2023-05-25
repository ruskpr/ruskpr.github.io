import { Link } from "react-router-dom";
import { Button, ButtonType } from "../../ui/Button";
import LanguageIcon from "./LanguageIcon";
import { BsGithub } from "react-icons/bs";
import TagBadge from "./TagBadge";
import { IProjectData } from "./Utils";

export default function ProjectDetailSidebar(props: {
  projectData: IProjectData;
}) {
  const data = props.projectData;

  const renderedLanguages = data.languages?.map((lang, index) => {
    return (
      <div key={index} className="text-4xl">
        <LanguageIcon language={lang} />
      </div>
    );
  });

  const renderedTags = data.tags?.map((tag, index) => {
    return <TagBadge tag={tag} key={index} />;
  });

  let githubLink = <></>;

  if (data.links?.github != null) {
    githubLink = (
      <Link className="flex gap-2 items-center" to={data.links.github}>
        <BsGithub />
        Github Repository
      </Link>
    );
  }

  return (
    <article className="border-0 lg:border border-white prose w-full bg-gray-200 p-8 rounded-3xl bg-transparent lg:bg-base-300">
      <h1 className="text-white lg:text-gray-200 font-primary">{data.title}</h1>
      <p className="lg:text-gray-200 ">{data.subtitle}</p>

      <h3 className="text-gray-300">Languages / Frameworks</h3>
      <div className="flex gap-3 flex-wrap p-0">{renderedLanguages}</div>

      <h3 className="text-gray-300">Other Technologies</h3>
      <div className="flex gap-3 flex-wrap p-0">{renderedTags}</div>

      <h3 className="text-gray-300">Links</h3>
      <div className="flex flex-col flex-wrap p-0">{githubLink}</div>
    </article>
  );
}
