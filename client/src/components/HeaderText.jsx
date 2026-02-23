import React from 'react'
import { useNavigate } from 'react-router-dom';

const HeaderText = ({upperText = "PORTFOLIO", title1, title2, desc}) => {
  const navigate = useNavigate();
  return (
    <div className="mb-16 px-6 mt-6">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
        {/* Left content */}
        <div className="text-center lg:text-left">
          <h2 className="skills-subtitle text-yellow-300 font-mono text-sm tracking-[0.3em] uppercase mb-2">
            {upperText}
          </h2>

          <h1 className="skills-title text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-2 drop-shadow-md">
            {title1} <span className="text-yellow-300">{title2}</span>
          </h1>

          <p className="skills-desc text-indigo-50/80 max-w-2xl text-base sm:text-lg leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Right button */}
        <div className="flex justify-center lg:justify-start">
          <button
            className="
          nav-pill
          text-base sm:text-lg
          font-semibold
          text-chart-4
        "
            onClick={() => navigate("/")}
          >
            ← Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderText
