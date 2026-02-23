import gsap from "gsap";

export const contactAnimation = ({pageRef, leftRef, rightRef}) => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({defaults: {ease: "power3.out"}});

    // Header animation
    tl.from(".skills-subtitle", {
      y: 20,
      opacity: 0,
      duration: 0.6,
    })
      .from(
        ".skills-title",
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.3",
      )
      .from(
        ".skills-desc",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4",
      );
    tl.from(leftRef.current, {
      x: -80,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    })
      .from(
        leftRef.current.querySelectorAll("input, textarea"),
        {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.4",
      )

      /* RIGHT PANEL */
      .from(
        rightRef.current,
        {
          x: 80,
          opacity: 0,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .from(
        rightRef.current.querySelectorAll(".contact-animate"),
        {
          y: 30,
          opacity: 1,
          stagger: 0.12,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4",
      )
      .from(
        rightRef.current.querySelector(".ava-card"),
        {
          scale: 0.9,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.3",
      );
  }, pageRef);

  return () => ctx.revert();
};
