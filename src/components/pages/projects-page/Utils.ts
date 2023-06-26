import data from "./project-data.json";

export interface IProjectData {
    id: number; // required
    slug: string; // required
    title: string; // required
    type: string; // required
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
    downloads?: DownloadObject[];
}

export interface DownloadObject {
    title: string;
    type: string;
    name: string;
    url: string;
    size: string;
    version: string;
    isLatest: boolean;
}
  

export const getDataFromFile = () => {
    const projectData: IProjectData[] = [];
    
    data.forEach((project: any) => {
        const newProject: IProjectData = {
            id: project.id, 
            slug: project.slug, 
            title: project.title,
            type: project.type,
            subtitle: project.subtitle,
            description: project.description,
            description2: project.description2,
            description3: project.description3,
            images: project.images,
            languages: project.languages,
            tags: project.tags,
            links: project.links,
            downloads: project.downloads
        };
        projectData.push(newProject);
    });
    return projectData;
}


export const getProjectDataBySlug = (slug: string | undefined) => {
    const projectData = getDataFromFile();
    const project = projectData.find((project) => project.slug === slug);
    return project;
}




