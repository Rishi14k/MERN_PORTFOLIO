import React from "react";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import FloatingNav from "./components/FloatingNav";
import { NAV_ITEMS } from "./config/navigation";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";
// import { Route } from "lucide-react";

const App = () => {
  const navigate = useNavigate()

  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <FloatingNav
            items={NAV_ITEMS}
            onNavigate={(key) => navigate(`/${key}`)}
          />
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default App;
