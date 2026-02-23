import gsap from "gsap"

export const pageHeaderAnimation = ()=>{
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

        tl.from(".skills-subtitle", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        })
          .from(
            ".skills-title",
            {
              y: 40,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.3",
          )
          .from(
            ".skills-desc",
            {
              y: 20,
              opacity: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.4",
          );
      });

      return () => ctx.revert();
}