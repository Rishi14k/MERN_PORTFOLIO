"use client";

import React from "react";
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";

export function ThreeDCardDemo({project, index}) {
  const GRADIENTS = [
    "bg-linear-to-r from-pink-300 via-red-300 to-orange-300",
    "bg-linear-to-r from-rose-300 via-pink-300 to-red-300",
    "bg-linear-to-r from-orange-200 via-red-300 to-pink-600",
  ];
  return (
    <CardContainer className="inter-var w-full flex justify-center px-6 sm:px-6">
      <CardBody
        className={`
      relative group/card
      w-full h-full
      max-w-7xl
      rounded-2xl
      p-5 sm:p-6 md:p-8
      border border-white/20
      bg-gradient-to-br
      ${GRADIENTS[index % GRADIENTS.length]}
      shadow-2xl
      grid grid-cols-1 md:grid-cols-12
      gap-6 md:gap-8
    `}
      >
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1 md:col-span-7 flex flex-col justify-between">
          {/* HEADER */}
          <div>
            {/* YEAR */}
            <CardItem
              translateZ={40}
              className="text-xs sm:text-sm tracking-widest text-black/60 uppercase"
            >
              {project.year}
            </CardItem>

            {/* TITLE */}
            <CardItem
              translateZ={60}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-2"
            >
              {project.title}
            </CardItem>

            {/* SUBTITLE */}
            <CardItem
              as="p"
              translateZ={70}
              className="text-xs sm:text-sm text-black/70 mt-2 max-w-lg"
            >
              {project.subtitle}
            </CardItem>

            {/* DESCRIPTION */}
            <CardItem
              as="p"
              translateZ={80}
              className="text-xs sm:text-sm text-black/70 mt-4 max-w-xl"
            >
              {project.description}
            </CardItem>

            {/* FEATURES */}
            <CardItem translateZ={90} className="mt-5 sm:mt-6">
              <ul className="space-y-2 text-xs sm:text-sm text-black/80">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardItem>
          </div>

          {/* STACK + LINKS */}
          <div className="mt-6">
            {/* TECH STACK */}
            <CardItem
              translateZ={100}
              className="flex flex-wrap gap-2 mb-5 sm:mb-6 mt-3"
            >
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="
                px-3 py-1
                text-[10px] sm:text-xs
                rounded-full
                bg-black/10 text-black/80
              "
                >
                  {tech}
                </span>
              ))}
            </CardItem>

            {/* LINKS */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <CardItem
                translateZ={30}
                as="a"
                href={project.links.live}
                target="_blank"
                className="
              px-5 sm:px-6 py-2
              rounded-xl
              text-[10px] sm:text-xs font-medium
              bg-white/70 text-black
              hover:underline
            "
              >
                Live →
              </CardItem>

              <CardItem
                translateZ={30}
                as="a"
                href={project.links.github}
                target="_blank"
                className="
              px-5 sm:px-6 py-2
              rounded-xl
              bg-black text-white
              text-[10px] sm:text-xs font-bold
            "
              >
                GitHub
              </CardItem>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <CardItem
          translateZ={120}
          className="order-1 lg:order-2 md:col-span-5 h-56 sm:h-72 md:h-full"
        >
          <img
            src={project.image}
            alt={project.title}
            className="
          w-full h-full
          object-cover
          rounded-xl
          shadow-xl
          group-hover/card:scale-[1.02]
          transition-transform duration-500
        "
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
