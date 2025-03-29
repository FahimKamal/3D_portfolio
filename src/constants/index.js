import { meta, shopify, starbucks, tesla, novalabs, instagram, boatBlitz, templeOfMasks, spellcaster } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        name: "C++",
        type: "Programming Language"
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
        name: "C#",
        type: "Programming Language"
    },    
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg",
        name: "Unreal Engine",
        type: "Game Engine"
    },    
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
        name: "Unity",
        type: "Game Engine"
    },    
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rider/rider-original.svg",
        name: "Rider",
        type: "Tools"
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },    
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg",
        name: "Blender",
        type: "Tools"
    },
];

export const experiences = [
    {
        title: "Jr. Game Engine Engineer",
        company_name: "Nova Labs",
        icon: novalabs,
        iconBg: "#e9f0f5",
        date: "Oct 2022 - Sept 2023",
        points: [
            "Reviewed and analyzed existing project codebases to understand company development standards.",
            "Identified bugs and potential improvements in legacy code, enhancing project stability.",
            "Assisted in feature development by translating pseudocode into C# implementations, reviewed and optimized by senior developers.",
            "Gained hands-on experience with Git, GitHub, and professional version control workflows for organizing projects.",
            "Developed problem-solving skills by tackling game development challenges presented by senior engineers.",
            "Successfully provided optimized solutions for complex gameplay mechanics by the end of the year.",
        ],
    },
    {
        title: "Game Engine Engineer",
        company_name: "Nova Labs",
        icon: novalabs,
        iconBg: "#e9f0f5",
        date: "Oct 2023 - Oct 2024",
        points: [
            "Worked on multiple projects, implementing assigned features independently while meeting deadlines.",
            "Wrote detailed documentation for each completed project, ensuring future developers could easily understand the codebase.",
            "Participated in project ideation meetings, contributing ideas on game mechanics, features, and story development.",
            "Collaborated with the team to transform selected ideas into fully developed games.",
        ],
    },
    {
        title: "Game Mechanic Engineer",
        company_name: "Nova Labs",
        icon: novalabs,
        iconBg: "#e9f0f5",
        date: "Nov 2024 - Feb 2025",
        points: [
            "Served as a lead developer, overseeing game mechanics implementation and feature development.",
            "Actively participated in project planning meetings, defining gameplay features, mechanics, and overall game themes.",
            "Assigned tasks to 3D designers, 2D artists, and developers, ensuring efficient workflow and collaboration.",
            "Led the creation of Game Design Documents (GDD) to guide project development.",
            "Monitored team progress, ensuring deadlines were met and assisting members in overcoming technical challenges.",
            "Led development of Falltastic, successfully managing feature implementation and game mechanics.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: instagram,
        link: 'https://www.instagram.com/fahimkamal63/',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/FahimKamal',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://linkedin.com/in/fk-ahmed',
    }
];

export const projects = [
    {
        iconUrl: "https://play-lh.googleusercontent.com/Xxqx6-wN-ROi5TQ0JxOcWmew99uA2AkeuWI3NvooVPgqq_pzzFvTuSdfWifmufGRagg=w2560-h1440-rw",
        theme: 'btn-back-red',
        name: 'FallTastic',
        description: 'As Lead Developer, I oversaw game design and mechanics, built the 3D world, implemented dynamic animations, and contributed UI ideas, ensuring a cohesive and engaging player experience.',
        link: 'https://play.google.com/store/apps/details?id=com.novalabs.falltastic',
    },
    {
        iconUrl: boatBlitz,
        theme: 'btn-back-green',
        name: 'Boat Blitz',
        description: 'Developed an infinite water and island system with dynamic terrain for an endless ocean. Implemented a day-night cycle with realistic lighting. Designed and integrated UI for a smooth player experience.',
        link: 'https://play.google.com/store/apps/details?id=com.novalabs.bb',
    },
    {
        iconUrl: templeOfMasks,
        theme: 'btn-back-blue',
        name: 'Temple Of Masks',
        description: 'Designed and developed 70 levels (31–100) under senior supervision. Documented C# classes and functions for future use. Added Mayan culture fact pop-ups to enhance player immersion.',
        link: 'https://play.google.com/store/apps/details?id=com.novalabs.tom',
    },
    {
        iconUrl: spellcaster,
        theme: 'btn-back-pink',
        name: 'Spellcaster',
        description: 'Spellcaster is a fast-paced top-down action survival game built in Unreal Engine with Blueprints. Play as a sorcerer’s apprentice, wield spells, fight waves of slimes, level up, and survive as long as possible!',
        link: 'https://github.com/FahimKamal/UE5_Survivor_io',
    },
];