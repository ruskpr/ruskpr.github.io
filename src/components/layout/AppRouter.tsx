import { Route, Routes } from "react-router-dom";

// page components
import ContactPage from "../pages/contact-page/ContactPage";
import HomePage from "../pages/home-page/HomePage";
import ProjectsPage from "../pages/projects-page/ProjectsPage";
import ProjectDetailPage from "../pages/projects-page/ProjectDetailPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/projects" Component={ProjectsPage} />
      <Route path="/projects/:slug" Component={ProjectDetailPage} />
      <Route path="/contact" Component={ContactPage} />
    </Routes>
  );
}
