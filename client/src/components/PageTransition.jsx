import {useEffect, useRef} from "react";
import gsap from "gsap";
import {useLocation} from "react-router-dom";

export default function PageTransition({children}) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
      );
    });

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="page-transition">
      {children}
    </div>
  );
}
