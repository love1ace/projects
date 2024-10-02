interface ProjectData {
    id: number;
    name: string;
    description: string;
    logo: string;
    tags: string[];
    link: string;
}

export const webProjects: ProjectData[] = [
    {
        id: 8,
        name: "KIM",
        description: "Dongyeong Kim's Portfolio",
        logo: "./emoji.png",
        tags: ["Active", "2024"],
        link: "https://dongyeongkim.com/"
    },
    {
        id: 7,
        name: "PLY",
        description: "Video link-based playlist sharing platform",
        logo: "./ply.png",
        tags: ["2024"],
        link: "https://github.com/Dev-FE-1/Toy_Project_3_Team3"
    },
    {
        id: 6,
        name: "woochee",
        description: "Payroll and task management platform",
        logo: "./woochee.png",
        tags: ["2024"],
        link: "https://github.com/Dev-FE-1/woowahan-siblings"
    },
    {
        id: 5,
        name: "Clock App",
        description: "Electron desktop clock app",
        logo: "./clock.png",
        tags: ["2024"],
        link: "https://github.com/love1ace/electron-clock"
    },
    {
        id: 4,
        name: "Aucom",
        description: "Auto GitHub contribution graph.",
        logo: "./aucom.png",
        tags: ["Discontinued", "2024"],
        link: "https://github.com/love1ace/Auto-commit.com"
    },
    {
        id: 3,
        name: "Portfolio",
        description: "First portfolio site with Vanila JS",
        logo: "./kim.png",
        tags: ["2024"],
        link: "https://love1ace.github.io/DONGYEONG-KIM/en/html/index.html"
    },
    {
        id: 2,
        name: "pepe game",
        description: "pepe chrome dinosaur game",
        logo: "./pepe.png",
        tags: ["2024"],
        link: "https://love1ace.github.io/pepe-world/projects/pepedinogame/dino.html"
    },
    {
        id: 1,
        name: "Don't Click",
        description: "Don't click this button",
        logo: "./pepe.png",
        tags: ["2024"],
        link: "https://love1ace.github.io/pepe-world/projects/dontclick/index.html"
    },
];