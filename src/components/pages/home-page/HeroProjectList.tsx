import { Link } from "react-router-dom";
import { Button, ButtonType } from "../../ui/Button";
import { BsArrowRight } from "react-icons/bs";

export default function HeroProjectList() {
  const linkStyles: string =
    "rounded-none border-b border-blue-600 pr-0 pb-0 mb-2 hover:text-white hover:border-white transition duration-300 ease-in-out";

  return (
    <div className="w-full lg:w-64 h-full flex flex-col items-end pt-16 lg:pt-7">
      <h1 className="text-5xl font-primary font-normal text-white">Projects</h1>

      <br />
      <ul className="w-full">
        <li className="flex justify-end">
          <Button
            type={ButtonType.Link}
            animate={false}
            className={`font-secondary` + " " + linkStyles}
          >
            <Link to="/projects/chess">Chess</Link>
          </Button>
        </li>

        <li className="flex justify-end">
          <Button
            type={ButtonType.Link}
            animate={false}
            className={`font-secondary` + " " + linkStyles}
          >
            <Link to="/projects/sql-linq-queries">SQL / LINQ queries</Link>
          </Button>
        </li>

        <li className="flex justify-end">
          <Button
            type={ButtonType.Link}
            animate={false}
            className={`font-secondary` + " " + linkStyles}
          >
            <Link to="/projects/marketio">market.io</Link>
          </Button>
        </li>
        <li className="flex justify-end">
          <Button
            type={ButtonType.Link}
            animate={false}
            className={`font-secondary` + " " + linkStyles}
          >
            <Link to="/projects/pws-company-website">PWS Company Website</Link>
          </Button>
        </li>
      </ul>

      <br />
      <br />
      <Button
        type={ButtonType.Link}
        animate={false}
        className={`font-secondary transition-all hover:translate-x-3`}
      >
        <Link to="/projects">View more</Link>
        <BsArrowRight className="ml-2 " />
      </Button>
    </div>
  );
}
