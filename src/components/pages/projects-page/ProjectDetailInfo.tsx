import { IProjectData } from "./Utils";

export default function ProjectDetailInfo(props: {
  projectData: IProjectData;
}) {
  const data = props.projectData;

  return (
    <article className="text-gray-300">
      <h1 className="hidden lg:block text-white font-primary font-bold text-5xl mb-6">
        {data.title}
      </h1>
      <p className="text-xl">{data.description}</p><br/>
      {data.description2 && <p className="text-xl">{data.description2}</p>}<br/>
      {data.description3 && <p className="text-xl">{data.description3}</p>}<br/>
    </article>
  );
}
