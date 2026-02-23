import React from "react";
import {ThreeDCardDemo} from "./ThreeDCardDemo";

const ProjectSection = ({project,index}) => {
const GRADIENTS = [
  "bg-linear-to-r from-pink-400 via-red-400 to-orange-400",
  "bg-linear-to-r from-rose-400 via-pink-400 to-red-400",
  "bg-linear-to-r from-orange-200 via-red-400 to-pink-600",
];


  return (
    <section
      className={`
        h-screen w-full sticky top-0
        grid place-content-center
       bg-gradient-to-br
      ${GRADIENTS[index % GRADIENTS.length]}
     text-white
     transition-colors duration-700 ease-in-out
        overflow-hidden
      `}
    >
      {/* GRID BACKGROUND (same as your demo) */}
      <div
        className="
        absolute inset-0
        bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
            linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
        bg-size-[54px_54px]
        mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
        pointer-events-none
      "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl w-full h-[100vh]">
        <ThreeDCardDemo project={project} index={index}/>

        <div className="absolute  left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-xs tracking-widest uppercase text-black/60 font-bold">
            Scroll
          </span>

          <div className="relative h-10 w-px bg-black/20 overflow-hidden">
            <span className="absolute top-0 left-0 w-px h-4 bg-black animate-scroll-line" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
