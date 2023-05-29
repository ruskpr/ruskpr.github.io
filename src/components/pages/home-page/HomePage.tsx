import { useEffect } from "react";
import Hero from "./Hero";

export default function HomePage() {
  useEffect(() => {
    document.title = "ruskpr";
  }, []);

  return (
    <div className="flex justify-center items-start w-full mb-48">
      <Hero />
    </div>
  );
}
