
import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import { useNavigate } from 'react-router-dom';
import {ReactLenis} from "lenis/react";
import ProjectSection from '@/components/ProjectSection';
import PhilosophyGrid from '@/components/PhilosophyGrid ';
import { PHILOSOPHY_ITEMS } from '@/config/philosophyData';
import { projects } from '@/config/projectsData';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Footer from '@/components/Footer';


gsap.registerPlugin(ScrollTrigger);


const Project = () => {

  const containerRef = useRef(null);
  const navigate = useNavigate()

useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({defaults: {ease: "power3.out"}});
    tl.fromTo(
      ".proj-header",
      {opacity: 0, y: 30},
      {opacity: 1, y: 0, duration: 0.5},
    )
      .fromTo(
        ".projhero",
        {
          opacity: 0,
          scale: 0.92,
          y: 40,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power4.out",
        },
      );

      // .fromTo(".bottom", {opacity: 0, y: 20}, {opacity: 1, y: 0}, "-=0.4");
  }, containerRef);
  return () => ctx.revert();
}, []);



  return (
    <>
      <div
        ref={containerRef}
        className="scene w-full min-h-screen flex flex-col bg-slate-950 overflow-x-clip"
      >
        <div className="mx-auto w-screen h-full flex-1 flex flex-col">
          <ReactLenis root>
            <div className="proj-header flex flex-col md:flex-row mt-5 px-6 md:ml-20 text-white items-center md:items-center justify-between mb-8 gap-6 md:gap-0">
              {/* Title and Count Container */}
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-mono text-[10px] md:text-xs text-secondary tracking-[0.3em] uppercase mb-1">
                    Portfolio
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-none">
                    Projects
                  </h2>
                </div>

                {/* Project Counter */}
                <div className="proj-count flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-primary/30 bg-secondary/5">
                  <span className="font-mono text-base md:text-lg text-chart-4">
                    {projects.length}
                  </span>
                </div>
              </div>

              {/* Navigation Button */}
              <button
                className="nav-pill group flex items-center gap-2 text-chart-4 hover:text-white transition-colors duration-300 md:mr-10"
                onClick={() => navigate("/")}
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-300">
                  ←
                </span>
                Home
              </button>
            </div>
            <section className="text-white w-full bg-slate-950 py-20 md:py-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Sticky Hero Section */}
                <div className="projhero md:sticky top-0 h-fit md:h-screen flex flex-col items-start px-6 md:mx-auto justify-center mb-12 md:mb-0">
                  <h1 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold leading-tight">
                    What These Projects <br className="hidden md:block" />
                    Taught Me
                  </h1>

                  <p className="mt-6 text-white/70 max-w-md">
                    Every project here started with confusion, trade-offs, and a
                    lot of learning. Scroll to see how I think, not just what I
                    build.
                  </p>
                </div>

                {/* The Scrolling Grid */}
                <PhilosophyGrid className="imgCard" items={PHILOSOPHY_ITEMS} />
              </div>
            </section>
            <main className="bg-black">
              <div className="wrapper">
                {projects.map((project, index) => (
                  <ProjectSection
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </main>
          </ReactLenis>
        </div>
        <Footer title="PROJECTS" />
      </div>
    </>
  );
};

export default Project
