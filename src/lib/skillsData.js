import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaBootstrap,
    FaGitAlt,
    FaFigma
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiTypescript,
    SiNextdotjs
} from "react-icons/si";

export const skillsData = [
    {
        id: 1,
        name: "HTML",
        icon: <FaHtml5 className="text-orange-500 text-5xl" />,
    },
    {
        id: 2,
        name: "CSS",
        icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
    },
    {
        id: 3,
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
    },
    {
        id: 4,
        name: "Bootstrap",
        icon: <FaBootstrap className="text-purple-500 text-5xl" />,
    },
    {
        id: 5,
        name: "JavaScript",
        icon: <FaJsSquare className="text-yellow-400 text-5xl" />,
    },
    {
        id: 6,
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-400 text-5xl" />,
    },
    { id: 7, name: "Next.js", icon: <SiNextdotjs className="text-white text-5xl" /> },
    {
        id: 8,
        name: "React.js",
        icon: <FaReact className="text-sky-400 text-5xl animate-spin-slow" />,
    },
    {
        id: 9,
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500 text-5xl" />,
    },
    {
        id: 10,
        name: "Express.js",
        icon: <SiExpress className="text-gray-300 text-5xl" />,
    },
    {
        id: 11,
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600 text-5xl" />,
    },
    {
        id: 12,
        name: "Git & GitHub",
        icon: <FaGitAlt className="text-orange-400 text-5xl" />,
    },
    
];
