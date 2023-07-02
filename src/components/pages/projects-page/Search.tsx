import { useState, useRef } from "react";
import { IProjectData } from "./Utils";
import { Button, ButtonType } from "../../ui/Button";
import { BsSearch } from "react-icons/bs";
import { getDataFromFile } from "./Utils";
interface ISearchProps {
  data: IProjectData[];
  setData: React.Dispatch<React.SetStateAction<IProjectData[]>>;
}

export default function SearchComponent(props: ISearchProps) {
  const [term, setTerm] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);

    if (e.target.value === "") {
      const data = getDataFromFile();
      props.setData(data);
      return;
    }

    const filteredData = props.data.filter(
      (project) =>
        project.tags?.some((tag) =>
          tag.toLowerCase().includes(term.toLowerCase())
        ) ||
        project.title?.toLowerCase().includes(term.toLowerCase()) ||
        project.subtitle?.toLowerCase().includes(term.toLowerCase())
    );
    props.setData(filteredData);
  };

  const handleReset = () => {
    setTerm("");
    inputRef.current?.focus();
    // clear text inside of input 
    inputRef.current!.value = "";
    const data = getDataFromFile();
    props.setData(data);
  };
  
  return (
    <section className="container mx-auto mb-3 px-3">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl text-white font-bold font-primary mb-3">
          Search
        </h1>
      </div>
      <div
        className="flex flex-row justify-start items-center"
      >
        <input
        ref={inputRef}
          onChange={(e) => handleChange(e)}
          className="rounded pl-3 h-8"
          type="text"
          placeholder="c#, react, sql..."
        />

        {term.length > 0 && (
          <Button
            onClick={handleReset}
            type={ButtonType.Info}
            className="h-8 ml-3"
          >
            Reset
          </Button>
        )}
      </div>

      <br />

      {term.length > 0 && props.data.length > 0 && (
        <h2>
          Showing {props.data.length} results for "{term}"
        </h2>
      )}

      {term.length > 0 && props.data.length === 0 && (
        <>
          <h2>Couldn't find any results for "{term}"</h2>
          <br />
          <Button
            onClick={handleReset}
            type={ButtonType.Info}
            className="h-8 ml-3"
          >
            Reset filters
          </Button>
        </>
      )}

      {term.length === 0 && <h2>Showing all projects ({props.data.length})</h2>}
    </section>
  );
}
