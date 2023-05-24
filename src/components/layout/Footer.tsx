import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Button, ButtonType } from "../ui/Button";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 border-t border-gray-500 text-primary-content">
      <div>
        <p className="font-bold">Russ Koprulu</p>
        <Link to="mailto://russ.koprulu@gmail.com">
          <span className="link">russ.koprulu@gmail.com</span>
        </Link>
        <p>Copyright © {new Date().getFullYear()}</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link target="_blank" to="https://github.com/ruskpr">
            <BsGithub className="hover:scale-105 text-4xl" />
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/russ-koprulu-111165269/"
          >
            <BsLinkedin className="hover:scale-105 text-4xl text-blue-500 rounded" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
