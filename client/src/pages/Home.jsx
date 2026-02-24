import {homeEnter} from "@/animation/homeEnter";
import FloatingNav from "@/components/FloatingNav";
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient-animation";
import {NAV_ITEMS} from "@/config/navigation";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FaDownload} from "react-icons/fa6";

const Home = () => {
  useEffect(() => {
    homeEnter();
  }, []);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const navigate = useNavigate();

  const handleRouteNavigate = (route) => {
    navigate(route);
  };

  const stats = [
    {label: "Internship", value: "6 Months"},
    {label: "Projects", value: "10+"},
    {label: "Skills", value: "9+"},
    {label: "Certificates", value: "4+"},
  ];

  return (
    <div className="text-white min-h-screen flex items-center justify-center">
      <BackgroundGradientAnimation>
        <div className="home-overlay absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 text-2xl sm:text-3xl md:text-4xl lg:text-7xl min-h-screen">
          <div className="home-side-text absolute left-6  opacity-0 hidden sm:block">
            <p
              className="font-mono text-sm md:text-lg text-shadow-muted-foreground tracking-[0.4em] uppercase"
              style={{writingMode: "vertical-rl", textOrientation: "mixed"}}
            >
              Full-Stack Developer • MERN Specialist • 2024
            </p>
          </div>

          {/* Right decorative element */}
          <div className="home-side-text hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 opacity-0">
            <div className="flex flex-col items-center gap-3">
              <div className="w-[1px] h-16 bg-secondary/80" />
              <div className="w-2 h-2 rounded-full bg-secondary/40 animate-pulse" />
              <div className="w-[1px] h-16 bg-secondary/80" />
            </div>
          </div>

          <div className="relative z-10 max-w-6xl w-full px-4 sm:left-20 lg:left-50">
            {/* Status badge */}
            <div className="home-status flex items-center gap-3 mb-3 sm:mb-6 opacity-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary/85" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-300" />
              </span>
              <span className="font-mono text-sm sm:text-base lg:text-3xl tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase text-white/80">
                Available for Freelance
              </span>
              <span className="hidden md:block w-24 h-[1px] bg-primary/75" />
            </div>

            {/* Accent line */}
            <div
              className="home-line w-20 h-[2px] bg-gradient-to-r from-popover to-popover/20 mb-8"
              style={{transform: "scaleX(0)"}}
            />

            {/* Hero heading */}
            <p className="home-greeting text-sm sm:text-lg lg:text-2xl text-chart-4 font-medium mb-2 opacity-0">
              Hello, I'm
            </p>
            <h1 className="home-name text-4xl md:text-7xl lg:text-[6rem] font-bold tracking-wide leading-[0.95] mb-4 opacity-0">
              <span className="text-secondary">Rishi</span>{" "}
              <span className="text-primary text-glow relative">
                Kothari
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
              </span>
            </h1>

            {/* Role */}
            <div className="home-role flex items-center gap-4 mt-8 mb-6 opacity-0">
              <span className="font-mono text-sm sm:text-lg md:text-xl text-muted-primary-foreground tracking-wider">
                MERN Stack Developer
              </span>
              <span className="w-8 h-[1px] bg-chart-4 font-extrabold" />

              <span className="font-mono text-[14px] md:text-lg text-secondary md:text-primary hidden md:flex-initial">
                React • Node • MongoDB • Express
              </span>
            </div>

            {/* Description */}
            <p className="home-desc text-base md:text-lg text-muted-primary max-w-xl mb-10 font-light leading-relaxed opacity-0">
              I build fast, user-friendly web experiences with careful attention
              to detail, combining clean code with thoughtful design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-14 text-[16px] leading-relaxed md:text-xl lg:text-2xl">
              <button
                className="dark cursor-pointer home-cta cta-btn border-2 p-2 border-chart-3 rounded-lg group opacity-0
             transition-transform duration-300 ease-out hover:scale-105"
                onClick={() => handleRouteNavigate("/projects")}
              >
                <span className="relative z-10">Projects</span>
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
              <div className="dark home-cta cta-btn flex items-center justify-center cta-btn border-2 gap-2 p-2 border-chart-4 rounded-lg">
                <a
                  href="/resume.pdf"
                  download="Rishi_Kothari_MERN_Stack_Developer_Resume.pdf"
                >
                  <button
                    className="dark cursor-pointer home-cta cta-btn opacity-0
               transition-transform duration-300 ease-out hover:scale-105"
                  >
                    Resume{" "}
                  </button>
                </a>
                <span>
                  <FaDownload />
                </span>
              </div>

              <button
                className="dark cursor-pointer home-cta cta-btn border-2 p-2 border-sidebar rounded-lg opacity-0
             transition-transform duration-300 ease-out hover:scale-105 hidden md:inline-flex"
                onClick={() => handleRouteNavigate("/contact")}
              >
                Let’s Talk
              </button>
            </div>

            {/* Stats strip */}
            <div
              className=" flex flex-wrap
  gap-6 md:gap-10
 sm:justify-start
  text-center sm:text-left"
            >
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="home-stat opacity-0 group cursor-default"
                >
                  <p className="text-lg md:text-3xl font-bold text-secondary group-hover:text-secondary/60 transition-colors">
                    {item.value}
                  </p>
                  <p className="font-mono text-[12px] text-muted-primary-foreground/30 font-light uppercase tracking-wider mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom nav */}
          {/* <FloatingNav
            items={NAV_ITEMS}
            onNavigate={handleRouteNavigate}
            position="bottom"
          /> */}
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Home;
