import CodeMockup from "./CodeMockup";

export default function Hero() {
  return (
    <div className="hero mt-8 md:mt-20 lg:mt-48 hero-content flex-col lg:flex-row-reverse">
      {/* <img
          src="/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        /> */}
      <div className="w-full">
        <h1 className="text-6xl lg:text-8xl font-primary font-bold text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Hi
          </span>
          , I'm Russ
        </h1>
        <h1 className="text-4xl lg:text-6xl font-primary font-normal text-gray-300">
          I am a software engineer
        </h1>

        <div className="mt-4 lg:mt-10">
          <CodeMockup />
        </div>
      </div>
    </div>
  );
}
