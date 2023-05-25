import Breadcrumb from "../../ui/Breadcrumb";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="w-full h-full pb-64">
      <Breadcrumb>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </Breadcrumb>
      <h1 className="pt-32 text-4xl font-bold text-gray-800 dark:text-gray-100">
        About
      </h1>
    </div>
  );
}
