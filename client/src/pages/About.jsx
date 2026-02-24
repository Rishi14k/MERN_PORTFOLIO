import React, {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
import EducationTimeline from "@/components/EducationTimeline";
import { pageHeaderAnimation } from "@/animation/pageHeaderAni";
import HeaderText from "@/components/HeaderText";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the big background text
      gsap.from(".about-bg-text", {
        opacity: 0,
        x: -100,
        scrollTrigger: {
          trigger: ".about-bg-text",
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });

      // Stagger animate the story blocks
      gsap.from(".story-block", {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".story-container",
          start: "top 70%",
        },
      });
    }, sectionRef);
    
    pageHeaderAnimation();
    return () => ctx.revert();

    
  }, []);

 return (
   <>
     <section
       className="  px-4 sm:px-6 md:px-8 lg:px-12
    py-10 sm:py-14 md:py-20 bg-linear-to-r  from-indigo-900 via-purple-900 to-pink-900"
     >
       <div
         ref={sectionRef}
         className="min-h-screen max-w-7xl mx-auto text-white pt-12 pb-20 relative"
       >
         {/* Background Large Text - Lower opacity so it doesn't fight with the foreground */}
         <h1 className="about-bg-text absolute top-50 left-40 text-[5vw] font-bold text-white/10 whitespace-nowrap pointer-events-none uppercase tracking-tighter hidden sm:block">
           Passionate Developer
         </h1>

         <HeaderText
           title1="About"
           title2="Me"
           desc=" I turn ideas into engaging digital experiences through clean
                 code."
         />

         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 relative z-10 px-6">
           {/* LEFT: Sticky Profile Section */}
           <div className="sticky lg:sticky lg:top-32 h-fit">
             <div className="skills-title relative w-64 h-64 md:w-80 md:h-80 mb-8 mx-auto lg:mx-0">
               {/* Glossy Photo Frame */}

               <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-primary rounded-3xl rotate-6 opacity-20" />

               <div className="absolute inset-0 border border-white/20 rounded-3xl backdrop-blur-sm overflow-hidden shadow-2xl">
                 <img
                   src="/me.webp" // Replace with your image
                   alt="Rishi Kothari"
                   loading="lazy"
                   decoding="async"
                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 />
               </div>
             </div>

             <h2 className="skills-desc text-4xl font-bold mb-4">
               Rishi Kothari
             </h2>

             <p className="skills-desc text-chart-4 font-mono mb-6 uppercase tracking-widest text-sm">
               Based in India • Final Year BSC CS IT
             </p>

             <div className="skills-desc flex gap-4">
               <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs">
                 Full-Stack
               </div>

               <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs">
                 Python
               </div>
             </div>
           </div>

           {/* RIGHT: The Journey (Scrolling Story) */}
           <div className="story-container space-y-5">
             <div className="border-dashed border-2 story-block p-6 rounded-2xl transition-colors hover:bg-white/5">
               <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
                 The Origin
               </h3>
               <p className="skills-desc text-indigo-100/80 max-w-2xl text-base sm:text-lg leading-relaxed">
                 I’m a developer who enjoys turning ideas into clean, immersive
                 digital experiences. I focus on building scalable,
                 high-performance applications where thoughtful design meets
                 reliable engineering.
               </p>
               <p className="text-indigo-100 leading-relaxed text-lg font-light">
                 I didn’t start with the goal of “just building websites.” What
                 excited me was the idea of creating experiences — how a few
                 lines of code could turn a blank screen into something people
                 enjoy using.
               </p>
             </div>

             <div className="story-block p-6 rounded-2xl transition-colors hover:bg-white/5">
               <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
                 The Academic Path
               </h3>
               <p className="text-indigo-100 leading-relaxed text-lg font-light">
                 Currently in my final year of{" "}
                 <span className="text-chart-4 font-semibold">BSC CS IT</span>,
                 I’ve learned to balance academic fundamentals with real-world
                 development — building and deploying projects that solve
                 practical problems.
               </p>
             </div>

             <EducationTimeline />

             <div className="story-block border-l-4 border-yellow-300/50 pl-8 py-6 bg-white/5 rounded-r-2xl">
               <h3 className="text-2xl font-semibold mb-4 text-white italic">
                 "Clean code meets cinematic design."
               </h3>
               <p className="text-indigo-100/90 leading-relaxed">
                 For me, great products sit at the intersection of clean code
                 and thoughtful design. If something doesn’t feel good to use,
                 it’s not finished — no matter how good the code looks.
               </p>
             </div>

             <div className="story-block p-6 rounded-2xl transition-colors hover:bg-white/5">
               <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
                 What's Next?
               </h3>
               <p className="text-indigo-100 leading-relaxed text-lg font-light">
                 I’m looking to collaborate on meaningful projects — whether
                 freelance or full-time — where I can continue growing,
                 learning, and pushing the boundaries of modern web experiences.
               </p>
             </div>
           </div>
         </div>
       </div>
     </section>
     <Footer title="ABOUT ME" />
   </>
 );
};

export default About;
