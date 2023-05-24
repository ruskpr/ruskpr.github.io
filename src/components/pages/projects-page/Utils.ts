import data from "./project-data.json";

export interface IProjectData {
    id: number; // required
    title: string; // required
    subtitle: string; // required
    description: string; // required
    description2?: string;
    description3?: string;
    images?: string[];
    tags?: string[];
    links?: {
      github?: string;
      website?: string;
    };
    languages?: string[];
  }
  

export const getDataFromFile = () => {
    const projectData: IProjectData[] = [];
    
    data.forEach((project: any) => {
        const newProject: IProjectData = {
            id: project.id, 
            title: project.title,
            subtitle: project.subtitle,
            description: project.description,
            description2: project.description2,
            description3: project.description3,
            images: project.images,
            languages: project.languages,
            tags: project.tags,
            links: project.links,
        };
        projectData.push(newProject);
    });
    return projectData;
}




