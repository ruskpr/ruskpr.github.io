import { useEffect } from "react";
import Hero from "./Hero";
import SkillsSection from "./SkillsSection";
import { Button, ButtonType } from "../../ui/Button";
import { Link } from "react-router-dom";

export default function HomePage() {
  useEffect(() => {
    document.title = "ruskpr";
  }, []);

  return (
    <div className="flex flex-col justify-center items-start w-full mb-48">
      <Hero />
      <SkillsSection />

      <div className="flex justify-center items-center w-full">
        <Button type={ButtonType.Primary} className="mt-16">
          <Link to={`/projects`}>Go To Projects</Link>
        </Button>
      </div>
    </div>
  );
}
