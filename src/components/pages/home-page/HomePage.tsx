import { useEffect } from "react";
import Hero from "./Hero";
import SkillsSection from "./SkillsSection";

export default function HomePage() {
  useEffect(() => {
    document.title = "ruskpr";
  }, []);

  return (
    <div className="flex flex-col justify-center items-start w-full mb-48">
      <Hero />
      <SkillsSection />
    </div>
  );
}
