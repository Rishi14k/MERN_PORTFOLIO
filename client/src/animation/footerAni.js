import gsap from "gsap"

export const footerAni = ()=>{
     const ctx = gsap.context(() => {
       gsap
         .timeline({
           scrollTrigger: {
             trigger: ".footer",
             start: "top 80%",
           },
           defaults: {ease: "power3.out"},
         })
         .fromTo(
           ".footer-title",
           {opacity: 0, y: 60, scale: 0.95},
           {opacity: 1, y: 0, scale: 1, duration: 0.8},
         )
         .fromTo(
           ".footer-sub",
           {opacity: 0, y: 20},
           {opacity: 1, y: 0, duration: 0.5},
           "-=0.4",
         )
         .fromTo(
           ".footer-link",
           {opacity: 0, y: 10},
           {opacity: 1, y: 0, stagger: 0.08, duration: 0.4},
           "-=0.3",
         )
         .fromTo(
           ".footer-copy",
           {opacity: 0},
           {opacity: 1, duration: 0.4},
           "-=0.2",
         );
     });

     return () => ctx.revert();
}