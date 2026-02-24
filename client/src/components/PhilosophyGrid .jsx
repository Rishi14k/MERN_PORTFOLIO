import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PhilosophyGrid = ({items}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const figures = containerRef.current.querySelectorAll("figure");

    figures.forEach((figure) => {
      const img = figure.querySelector("img");
      const caption = figure.querySelector("figcaption");

      gsap.fromTo(
        figure,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: figure,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Image subtle scale + unskew
      gsap.fromTo(
        img,
        {
          scale: 1.1,
        },
        {
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: figure,
            start: "top 85%",
          },
        },
      );

      // Caption float-in
      gsap.fromTo(
        caption,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: figure,
            start: "top 80%",
          },
        },
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid gap-12 mb-4 font-bold px-4 md:px-0 overflow-clip"
    >
      {items.map((item, index) => (
        <figure
          key={index}
          className={`
        relative grid place-content-center
        /* Reduce skew on mobile to prevent horizontal overflow */
        ${index % 2 === 0 ? "-skew-x-6 md:-skew-x-12" : "skew-x-6 md:skew-x-12"}
      `}
        >
          <img
            src={item.image}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            /* Changed w-80 to w-full max-w-sm to be fluid on mobile */
            className="w-70 max-w-sm md:w-80 h-[18rem] md:h-96 object-cover rounded-2xl"
          />

          <figcaption
            className="
          absolute bottom-6 left-6 right-6
          bg-black/60 backdrop-blur-md
          text-white text-base md:text-lg leading-relaxed
          p-4 rounded-xl
          /* Make width 80% on mobile, back to 30% on desktop */
          w-[85%] md:w-[30%]
          mx-auto md:mx-0
        "
          >
            {item.text}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default PhilosophyGrid;
