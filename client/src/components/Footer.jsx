import { footerAni } from '@/animation/footerAni';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Footer = ({title,className=""}) => {
    useEffect(()=>{
        footerAni() 
    },[])
  return (
    <footer
      className={`
    bg-slate-950
    pb-6 sm:pb-8
    border-t border-white/10
    px-4 sm:px-6 lg:px-12
    overflow-x-hidden
    footer
    ${className}
  `}
    >
      {/* TITLE */}
      <h1
        className="
      footer-title
      uppercase font-semibold text-center
      text-[10vw] sm:text-[7vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw]
      leading-tight
      max-w-6xl
      mx-auto
      bg-linear-to-r from-neutral-400 to-neutral-800
      bg-clip-text text-transparent
    "
      >
        {title}
      </h1>

      {/* SUBTEXT */}
      <p
        className="
      footer-sub
      mt-3
      text-center
      text-neutral-400
      text-sm sm:text-base
      tracking-wide
      max-w-xl
      mx-auto
    "
      >
        Designed with intent. Built through iteration.
      </p>

      {/* LINKS */}
      <div
        className="
      footer-links
      mt-6 sm:mt-8
      flex flex-wrap
      justify-center
      gap-x-6 gap-y-3
      text-sm
      text-neutral-400
    "
      >
        <Link to="/" className="footer-link hover:text-white transition">
          Home
        </Link>
        <Link to="/about" className="footer-link hover:text-white transition">
          About
        </Link>
        <Link
          to="/projects"
          className="footer-link hover:text-white transition"
        >
          Projects
        </Link>
        <Link to="/skills" className="footer-link hover:text-white transition">
          Skills
        </Link>
        <Link to="/contact" className="footer-link hover:text-white transition">
          Contact
        </Link>
        <a
          href="https://github.com/rishi14k"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link hover:text-white transition"
        >
          GitHub
        </a>
      </div>

      {/* COPYRIGHT */}
      <div
        className="
      footer-copy
      mt-10 sm:mt-12
      text-center
      text-[11px] sm:text-[12px]
      text-neutral-500
    "
      >
        © {new Date().getFullYear()} — Built by Rishi (ME)
      </div>
    </footer>
  );
}

export default Footer
