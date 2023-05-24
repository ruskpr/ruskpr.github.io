import { Button, ButtonType } from "../../ui/Button";
import { Link } from "react-router-dom";

export default function Error404Page() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="py-6">
            We couldn't find this page.
            <br />
            It may be unavailable or may not exist.
          </p>
          <div className="flex gap-3 justify-center">
            <Button type={ButtonType.Primary}>
              <Link to="/">Home</Link>
            </Button>
            <Button type={ButtonType.Secondary}>
              <Link to="/projects">Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
