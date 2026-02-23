// import {homeEnter} from "@/animation/homeEnter";
import {useEffect} from "react";
import gsap from "gsap"

function FloatingNav({items = [], onNavigate, className = ""}) {
  useEffect(() => {
    const tl = gsap.timeline({defaults: {ease: "power3.out"}});
    tl.fromTo(".bottom", {opacity: 0, y: 6}, {opacity: 1, y: 0}).fromTo(
      ".home-nav-pill",
      {opacity: 0, y: 6},
      {opacity: 1, y: 0, stagger: 0.05},
      "-=0.4",
    );
  }, []);

  return (
    <div
      className={`
        bottom
        w-fit max-w-full
        rounded-full px-0 py-2 md:px-4 md:py-3
        bg-white/10 backdrop-blur-2xl
        border border-white/20
        shadow-lg
        flex items-center gap-1
        opacity-0
        z-50
        ${className}
      `}
    >
      {items.map((item) => (
        <button
          key={item.key}
          onClick={() => onNavigate(item.key)}
          className="home-nav-pill text-sm px-3 py-2 rounded-full uppercase font-bold text-white hover:bg-white/15"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
export default FloatingNav;
