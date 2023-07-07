import CodeMockup from "./CodeMockup";
import HeroProjectList from "./HeroProjectList";

export default function Hero() {
  return (
    <div className="h-fit lg:h-96 hero mt-8 md:mt-20 lg:mt-48 hero-content flex flex-col lg:flex-row justify-between items-start lg:items-center">
      <div className="w-full h-full flex flex-col items-start">
        <h1 className="text-5xl lg:text-7xl font-primary font-normal text-white mb-4">
          Rustu Koprulu
        </h1>
        <p className="font-normal text-gray-300 pr-8">
          I'm a software developer from Edmonton, Alberta, Canada. <br />
          I enjoy building efficient software products and scalable web applications.
        </p>

        <div className="mt-4 lg:mt-10 w-fit">
          <CodeMockup />
        </div>
      </div>

      <HeroProjectList />
    </div>
  );
}
