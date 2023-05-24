import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiReact,
  SiRedux,
  SiCsharp,
} from "react-icons/si";

const getLanguageIcon = (language: string) => {
  switch (language.toLowerCase()) {
    case "javascript":
    case "js":
      return <SiJavascript className="text-yellow-500 bg-black" />;
    case "typescript":
    case "ts":
      return <SiTypescript className="text-blue-500 bg-black" />;
    case "html":
      return <SiHtml5 className="text-red-500" />;
    case "css":
      break;
    case "sass":
      break;
    case "react":
      return <SiReact className="text-blue-300" />;
    case "redux":
      return <SiRedux className="text-indigo-700" />;
    case "c#":
    case "csharp":
      return <SiCsharp className="text-green-500" />;
    default:
      throw new Error(`Language '${language}' not found`);
  }

  return <></>;
};

export default function LanguageIcon(props: {
  language: string;
  className?: string;
}) {
  return getLanguageIcon(props.language);
}
