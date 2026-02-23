import gsap from "gsap";

export const homeEnter = () => {
  const tl = gsap.timeline({
    defaults: {ease: "power3.out"},
  });

  // 🔹 Background overlay fade-in
  tl.to(".home-overlay", {
    opacity: 1,
    duration: 1.2,
  });

  // 🔹 Floating particles (independent infinite animation)
  gsap.utils.toArray(".particle").forEach((particle, i) => {
    gsap.fromTo(
      particle,
      {opacity: 0},
      {
        opacity: 1,
        x: gsap.utils.random(-30, 30),
        y: gsap.utils.random(-40, 40),
        duration: gsap.utils.random(6, 10),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      },
    );
  });

  // 🔹 Side decorative elements
  tl.fromTo(
    ".home-side-text",
    {opacity: 0, y: 20},
    {opacity: 1, y: 0, duration: 0.8},
    "-=0.8",
  )

    // 🔹 Status badge
    .fromTo(
      ".home-status",
      {opacity: 0, y: 10},
      {opacity: 1, y: 0, duration: 0.6},
      "-=0.5",
    )

    // 🔹 Accent line
    .fromTo(
      ".home-line",
      {scaleX: 0, transformOrigin: "left center"},
      {scaleX: 1, duration: 0.6},
      "-=0.4",
    )

    // 🔹 Greeting + Name
    .fromTo(
      ".home-greeting",
      {opacity: 0, y: 10},
      {opacity: 1, y: 0, duration: 0.5},
      "-=0.4",
    )
    .fromTo(
      ".home-name",
      {opacity: 0, y: 14},
      {opacity: 1, y: 0, duration: 0.6},
      "-=0.3",
    )

    // 🔹 Role & description
    .fromTo(
      ".home-role",
      {opacity: 0, y: 10},
      {opacity: 1, y: 0, duration: 0.5},
      "-=0.4",
    )
    .fromTo(
      ".home-desc",
      {opacity: 0, y: 10},
      {opacity: 1, y: 0, duration: 0.5},
      "-=0.4",
    )

    // 🔹 CTA buttons
    .fromTo(
      ".home-cta",
      {opacity: 0, y: 12},
      {opacity: 1, y: 0, stagger: 0.1, duration: 0.4},
      "-=0.3",
    )

    // 🔹 Stats
    .fromTo(
      ".home-stat",
      {opacity: 0, y: 10},
      {opacity: 1, y: 0, stagger: 0.08},
      "-=0.3",
    )

    // 🔹 Bottom navigation pills
    // .fromTo(
    //   ".bottom",
    //   {opacity:0,y:6},
    //   {opacity:1, y:0}
    // )
    // .fromTo(
    //   ".home-nav-pill",
    //   {opacity: 0, y: 6},
    //   {opacity: 1, y: 0, stagger: 0.05},
    //   "-=0.4",
    // );

  return tl;
};
