import { IProjectData } from "./Utils";

export default function ProjectDetailInfo(props: {
  projectData: IProjectData;
}) {
  const data = props.projectData;

  return (
    <article className="prose w-full text-gray-300">
      <h1 className="hidden lg:block text-white font-primary text-5xl">
        {data.title}
      </h1>
      <p className="text-xl">{data.description}</p>
      {data.description2 && <p className="text-xl">{data.description2}</p>}
      {data.description3 && <p className="text-xl">{data.description3}</p>}
    </article>
  );
}
