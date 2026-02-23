import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramLine,
} from "react-icons/ri";
import {IoIosMailUnread} from "react-icons/io";

export const SOCIALS = [
    {
      name: "GitHub",
      icon: <RiGithubFill />,
      link: "https://github.com/rishi14k",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <RiLinkedinBoxFill />,
      link: "https://www.linkedin.com/in/rishi-kothari-12b074293/",
      color: "hover:text-blue-400",
    },
    {
      name: "Mail",
      icon: <IoIosMailUnread />,
      link: "mailto:rishuright14@gmail.com",
      color: "hover:text-sky-400",
    },
    {
      name: "Instagram",
      icon: <RiInstagramLine />,
      link: "https://www.instagram.com/_r1sh.i/",
      color: "hover:text-pink-400",
    },
  ];