import { Button, ButtonType } from "../../ui/Button";
import Panel from "../../ui/Panel";
import { DownloadObject } from "./Utils";

export default function ProjectDownloadSection(props: {
  downloads: DownloadObject[];
}) {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-primary text-white mb-8">Downloads</h1>
      </div>
      <div className="flex justify-center gap-4 p-0 lg:p-8 mb-8">
        {props.downloads.map((download, index) => (
          <Panel
            key={index}
            className="card w-64 h-56 p-3 flex flex-col items-center justify-center"
          >
            <h1 className="text-xl font-primary my-2 text-white">
              {download.title}
            </h1>
            <p>{download.name}</p>
            <p className="text-gray-300">
              Version <span className="font-bold">{download.version}</span>
            </p>

            <Button type={ButtonType.Success} className="mt-8">
              <a href={download.url} download={download.name}>
                Download {download.size}
              </a>
            </Button>
            {download.isLatest && (
              <span className="badge absolute left-2 top-2 bg-zinc-600 font-bold text-green-500">
                Newest
              </span>
            )}
          </Panel>
        ))}
      </div>
    </section>
  );
}
