import { IProjectData } from "./Utils";

export default function ProjectDetailSidebar(props: {
  projectData: IProjectData;
}) {
  const data = props.projectData;

  return (
    <article className="prose w-full text-gray-600 bg-gray-200 p-0 lg:p-8 rounded-3xl bg-transparent lg:bg-gray-200">
      <h1 className="text-white lg:text-gray-700 font-primary">{data.title}</h1>
      
    </article>
  );
}
