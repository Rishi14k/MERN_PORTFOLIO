import {useEffect, useRef} from "react";
import { useNavigate} from "react-router-dom";
import gsap from "gsap";
import Footer from "@/components/Footer";
import { SKILLS } from "@/config/skillsData";
import { pageHeaderAnimation } from "@/animation/pageHeaderAni";
import HeaderText from "@/components/HeaderText";


const Skill = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        opacity:0
      });
       gsap.from(".skill-item", {
         opacity: 0,
         y: 0,
         scale: 0.9,
         duration: 0.55,
         ease: "power3.out",
         stagger: {
           each: 0.1,
           from: "start",
         },
       });
    }, containerRef);
    pageHeaderAnimation();
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="relative min-h-screen 
  bg-linear-to-r from-indigo-700 via-purple-700 to-pink-700"
    >
      <section
        ref={containerRef}
        className="
     bg-linear-to-r from-indigo-700 via-purple-700 to-pink-700
    px-4 sm:px-6 md:px-8 lg:px-12
    py-10 sm:py-14 md:py-20
    min-h-screen
    max-w-full
  "
      >
        <div className="max-w-7xl mx-auto mt-6 sm:mt-8">
          {/* Header */}
          <HeaderText
            title1="Skills &"
            title2="Technologies"
            desc="  A refined collection of technologies powering scalable,
              performant, and user-focused digital products."
          />

          {/* Responsive Bento Grid */}
          <div
            className="
        skill-card
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6
        auto-rows-[110px] sm:auto-rows-[130px] md:auto-rows-[140px]
        gap-3 sm:gap-4
      "
          >
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className={`
            relative
            group
            rounded-3xl
            border border-white/10
            bg-black/80
            backdrop-blur-md
            p-4 sm:p-5 md:p-6
            flex flex-col
            items-center
            justify-center
            transition-all
            duration-500
            hover:border-white/60
            hover:bg-black/40

            ${skill.size === "large" ? "col-span-2 row-span-2" : ""}
            ${skill.size === "medium" ? "col-span-2" : ""}
          `}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]" />

                <div
                  className={`
              skill-item
              text-4xl md:text-6xl mb-3 sm:mb-4
              ${skill.color}
              transition-transform duration-500
              group-hover:scale-110
            `}
                >
                  {skill.icon}
                </div>

                <h3 className="text-white font-medium tracking-wide text-[20px] md:text-lg text-center">
                  {skill.name}
                </h3>

                {(skill.size === "large" || skill.size === "medium") && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 sm:w-12 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer title="SKILLS" />
    </div>
  );
};

export default Skill;




