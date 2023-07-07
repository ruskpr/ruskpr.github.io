import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiReact,
  SiCsharp,
  SiTailwindcss,
  SiCss3,
  SiAngular,
  SiBootstrap,
  SiNextdotjs,
  SiNodedotjs,
  SiDotnet,
  SiMysql,
  SiPhp,
  SiExpress,
  SiRust,
  SiCplusplus,
} from "react-icons/si";

export default function SkillsSection() {
  const iconDivStyle =
    "relative overflow-hidden rounded-full w-24 h-24 text-6xl pt-1 bg-white flex justify-center items-center gap-1";

  const iconBgStyle =
    "absolute w-32 h-32 z-0 bg-gray-400 opacity-50 rotate-45 -top-16 -left-20";

  return (
    <section className="h-fit w-full mt-8 md:mt-20 lg:mt-48">
      <h2 className="text-3xl sm:text-4xl text-center font-primary font-normal text-white">
        My Skills
      </h2>
      <div className="w-full flex justify-center mb-4 sm:mb-0">
        <div className="w-48 border-b border-blue-600" />
      </div>
      <br />

      {/* FRONTEND */}
      <article className="text-white mb-24">
        <h1 className="text-5xl sm:text-6xl font-primary pl-0 sm:pl-4 text-center sm:text-left">
          Frontend
        </h1>
        <div className="flex justify-center sm:justify-start">
          <div className="w-72 border-b ml-0 sm:mr-4 border-blue-600 mb-8" />
        </div>

        <div
          className="relative flex flex-wrap justify-center gap-8 sm:gap-4 lg:gap-8 bg-transparent lg:bg-gray-500  
                     w-full lg:w-fit h-fit sm:h-48 mr-32 rounded-0 lg:rounded-e-full p-2 sm:p-6 sm:pr-16 pt-0 sm:pt-10 text-center"
        >
          <div className="skill-list-bar-l lg:bg-gray-500" />

          <div>
            <div className={iconDivStyle}>
              <SiHtml5 className="text-orange-600 z-10" />
              <div className={iconBgStyle} />
            </div>
            <span className="font-primary font-semibold">HTML</span>
          </div>

          <div>
            <div className={iconDivStyle}>
              <SiCss3 className="text-blue-500 z-10" />
              <div className={iconBgStyle} />
            </div>
            <span className="font-primary font-semibold">CSS</span>
          </div>

          <div>
            <div className={iconDivStyle}>
              <SiJavascript className="text-yellow-400 bg-black z-10" />
              <div className={iconBgStyle} />
            </div>
            <span className="font-primary font-semibold">JavaScript</span>
          </div>

          <div>
            <div className={iconDivStyle}>
              <SiTypescript className="text-blue-600 z-10" />
              <div className={iconBgStyle} />
            </div>
            <span className="font-primary font-semibold">TypeScript</span>
          </div>

          <div>
            <div className={iconDivStyle}>
              <SiReact className="text-sky-400 z-10" />
              <div className={iconBgStyle} />
            </div>
            <span className="font-primary font-semibold">React</span>
          </div>

          <div>
            <div className={iconDivStyle}>
              <SiAngular className="text-red-500 z-10" />
              <div className={iconBgStyle} />
            </div>
            <span className="font-primary font-semibold">Angular</span>
          </div>
        </div>
      </article>

      {/* BACKEND */}
      <article className="text-white mb-24">
        <h1 className="text-center sm:text-end text-5xl sm:text-6xl font-primary pr-4">
          Backend
        </h1>

        <div className="flex justify-center sm:justify-end">
          <div className="w-72 border-b ml-0 sm:ml-4 border-blue-600 mb-8" />
        </div>

        <div className="flex flex-wrap justify-end">
          <div
            className="relative flex flex-wrap justify-center gap-8 sm:gap-4 lg:gap-8 bg-transparent lg:bg-gray-500  
                     w-full lg:w-fit h-fit sm:h-48 rounded-0 lg:rounded-s-full p-2 sm:p-6 sm:pl-16 pt-0 sm:pt-10 text-center"
          >
            <div className="skill-list-bar-r transparent lg:bg-gray-500" />

            <div>
              <div className={iconDivStyle}>
                <SiNextdotjs className="text-zinc-800 z-10" />
                <div className={iconBgStyle} />
              </div>
              <span className="font-primary font-semibold">Next.js</span>
            </div>

            <div>
              <div className={iconDivStyle}>
                <SiNodedotjs className="text-green-500 z-10" />
                <div className={iconBgStyle} />
              </div>
              <span className="font-primary font-semibold">Node.js</span>
            </div>

            <div>
              <div className={iconDivStyle}>
                <SiExpress className="text-black z-10" />
                <div className={iconBgStyle} />
              </div>
              <span className="font-primary font-semibold">Express.js</span>
            </div>

            <div>
              <div className={iconDivStyle}>
                <SiDotnet className="text-white bg-violet-500 text-7xl rounded-full p-2 z-10" />
                <div className={iconBgStyle} />
              </div>
              <span className="font-primary font-semibold">ASP.NET</span>
            </div>

            <div>
              <div className={iconDivStyle}>
                <SiMysql className="text-cyan-700 z-10" />
                <div className={iconBgStyle} />
              </div>
              <span className="font-primary font-semibold">SQL</span>
            </div>

            <div>
              <div className={iconDivStyle}>
                <SiPhp className="text-indigo-700 z-10" />
                <div className={iconBgStyle} />
              </div>
              <span className="font-primary font-semibold">PHP</span>
            </div>
          </div>
        </div>
      </article>

      {/* DESKTOP & LOW LEVEL */}
      <article className="text-white mb-24">
        <div className="flex justify-center">
          <h1 className="border-b w-fit border-blue-600 text-3xl sm:text-5xl font-primary mb-8 mx-4 px-4 pb-1 text-center">
            Desktop & Low-Level Programming
          </h1>
        </div>

        <div
          className="relative flex justify-center gap-8 sm:gap-4 lg:gap-8 bg-transparent lg:bg-gray-500
                        w-full h-fit sm:h-48 p-2 sm:p-6 sm:pl-16 pt-0 sm:pt-10 text-center"
        >
          <div className="skill-list-bar-l-sm transparent lg:bg-gray-500" />
          <div className="skill-list-bar-r-sm lg:bg-gray-500" />

          <div>
            <div className={iconDivStyle}>
              <SiRust className="text-orange-600 z-10" />
              <div className={iconBgStyle} />
            </div>
            <span className="font-primary font-semibold">Rust</span>
          </div>

          <div>
            <div className={iconDivStyle}>
              <SiCplusplus className="text-blue-700 z-10" />
              <div className={iconBgStyle} />
            </div>
            <span className="font-primary font-semibold">C/C++</span>
          </div>

          <div>
            <div className={iconDivStyle}>
              <SiCsharp className="text-green-600 z-10" />
              <div className={iconBgStyle} />
            </div>
            <span className="font-primary font-semibold">C#</span>
          </div>
        </div>
      </article>
    </section>
  );
}
