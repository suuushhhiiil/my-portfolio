import { CgDesktop } from "react-icons/cg";
import { MdAnimation, MdWeb } from "react-icons/md";
import { FaPaintBrush, FaReact, FaJsSquare } from "react-icons/fa";
import { SiAdobecreativecloud, SiNextui, SiTailwindcss } from "react-icons/si";

export const services = [
  {
    title: "Frontend Development",
    icon: <CgDesktop size={25}/>,
    level: 5,
  },
  {
    title: "UI/UX Designing",
    icon: <MdWeb  size={25}/>,
    level: 5,
  },
  {
    title: "Graphics Designing",
    icon: <FaPaintBrush  size={20}/>,
    level: 5,
  },
];

export const skills = [
  {
    title : 'React.js',
    icon: <FaReact size={20}/>,
  },
  {
    title : 'JavaScript',
    icon: <FaJsSquare size={20}/>,
  },
  {
    title : 'UI/UX',
    icon: <SiNextui size={25}/>,
  },
  {
    title : 'TailwindCSS',
    icon: <SiTailwindcss size={20}/>,
  },
  {
    title : 'Next.js',
    icon: <SiAdobecreativecloud size={20}/>,
  },
  {
  title : 'GSAP',
  icon: <MdAnimation size={20}/>,
  },
  {
    title : 'Adobe Creative Cloud',
    icon: <SiAdobecreativecloud size={20}/>,
  },
]
 
