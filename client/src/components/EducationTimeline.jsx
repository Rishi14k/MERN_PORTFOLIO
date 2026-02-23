import React from 'react'

const education = [
  {
    year: "2025 — 2026",
    level: "BSc CS & IT — Final Year",
    institution: "Silver Oak University",
    scoreLabel: "CGPA",
    score: "Pursuing",
  },
  {
    year: "2024 — 2025",
    level: "BSc CS & IT — Second Year",
    institution: "Silver Oak University",
    scoreLabel: "CGPA",
    score: "9.45 / 10",
  },
  {
    year: "2023 — 2024",
    level: "BSc CS & IT — First Year",
    institution: "Silver Oak University",
    scoreLabel: "CPI",
    score: "9.30 / 10",
  },

  {
    year: "2021",
    level: "Higher Secondary (HSC)",
    institution: "MJCKR",
    scoreLabel: "Percentage",
    score: "88.53%",
  },
];


const EducationTimeline = () => {
  return (
    <div className="mt-10 px-6">
      <h3 className="text-2xl font-semibold mb-10 text-yellow-300">
        Education
      </h3>
      <div className="relative border-l border-white/20 ml-4 space-y-12">
        {education.map((edu, index) => (
          <div key={index} className="relative pl-10 story-block">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-yellow-300 shadow-[0_0_15px_rgba(253,224,71,0.6)] border-4 border-indigo-600" />

            {/* Content */}
            <span className="text-sm font-mono text-yellow-200/80 mb-2 block">
              {edu.year}
            </span>

            <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>

            <p className="text-indigo-100 font-medium mb-2">
              {edu.institution}
            </p>

            {/* Score Badge */}
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-wider text-indigo-200">
                {edu.scoreLabel}
              </span>
              <span className="text-sm font-semibold text-yellow-300">
                {edu.score}
              </span>
            </div>

            <p className="text-indigo-100/70 text-sm leading-relaxed max-w-md">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationTimeline
