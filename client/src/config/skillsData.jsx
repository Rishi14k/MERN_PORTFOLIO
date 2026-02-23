import {
  RiReactjsLine,
  RiNodejsLine,
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiGithubFill,
} from "react-icons/ri";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiGreensock,
  SiSocketdotio,
  SiPython,
  SiNetlify,
  SiRender,
  SiReactrouter,
} from "react-icons/si";

export const SKILLS = [
  {
    name: "React",
    icon: <RiReactjsLine />,
    color: "text-cyan-400",
    size: "large",
  },
  {
    name: "Node.js",
    icon: <RiNodejsLine />,
    color: "text-green-500",
    size: "large",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-emerald-500",
    size: "medium",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "text-neutral-300",
    size: "medium",
  },
  {
    name: "GSAP",
    icon: <SiGreensock />,
    color: "text-green-400",
    size: "medium",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    color: "text-sky-400",
    size: "medium",
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio />,
    color: "text-white",
    size: "small",
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine />,
    color: "text-yellow-400",
    size: "small",
  },
  {
    name: "HTML5",
    icon: <RiHtml5Line />,
    color: "text-orange-500",
    size: "small",
  },
  {name: "CSS3", icon: <RiCss3Line />, color: "text-blue-500", size: "small"},
  {name: "Python", icon: <SiPython />, color: "text-blue-400", size: "small"},
  {
    name: "GitHub",
    icon: <RiGithubFill />,
    color: "text-neutral-400",
    size: "small",
  },
  {
    name: "React Router",
    icon: <SiReactrouter />,
    color: "text-red-500",
    size: "small",
  },
  // {name: "Netlify", icon: <SiNetlify />, color: "text-teal-400", size: "small"},
  {name: "Render", icon: <SiRender />, color: "text-indigo-400", size: "small"},
];
