import { useEffect } from "react";
import Breadcrumb from "../../ui/Breadcrumb";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function ContactPage() {
  useEffect(() => {
    document.title = "ruskpr | Contact";
  }, []);

  return (
    <div className="h-full w-full pb-64">
      <Breadcrumb>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Breadcrumb>
      <div className="text-white mt-16">
        <div className="hero min-h-64">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-primary font-bold">Email</h1>
              <p className="py-6">
                Feel free to contact me at{" "}
                <Link className="link" to="mailto://russ.koprulu@gmail.com">
                  <span
                    data-tip="Open in mail app"
                    className="text-gray-300 underline tooltip tooltip-bottom"
                  >
                    russ.koprulu@gmail.com
                  </span>
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="hero min-h-64 mb-16 lg:mb-32">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold">Other Links</h1>
              <br />
              <div className="flex flex-col gap-3">
                <Link
                  className="text-gray-300 hover:underline"
                  to="https://github.com/ruskpr"
                >
                  <BsGithub className="inline-block" /> github.com/ruskpr
                </Link>
                <Link
                  className="text-gray-300 hover:underline"
                  to="https://www.linkedin.com/in/russ-koprulu-111165269/"
                >
                  <BsLinkedin className="inline-block" />{" "}
                  linkedin.com/in/russ-koprulu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
