import { Route, Routes } from "react-router-dom";

// page components
import ContactPage from "../pages/contact-page/ContactPage";
import HomePage from "../pages/home-page/HomePage";
import ProjectsPage from "../pages/projects-page/ProjectsPage";
import AboutPage from "../pages/about-page/AboutPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/projects" Component={ProjectsPage} />
      <Route path="/about" Component={AboutPage} />
      <Route path="/contact" Component={ContactPage} />
    </Routes>
  );
}
