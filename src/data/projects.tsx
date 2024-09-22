interface ProjectData {
    id: number;
    name: string;
    description: string;
    logo: string;
    tags: string[];
    link: string;
}

export const projects: ProjectData[] = [
    {
        id: 12,
        name: "byul 2.0",
        description: "commit message generator by byul AI",
        logo: "./byul.png",
        tags: ["npm package", "2024"],
        link: "https://www.npmjs.com/package/byul"
    },
    {
        id: 11,
        name: "Taskl",
        description: "Task management app",
        logo: "./taskl.png",
        tags: ["npm package", "2024"],
        link: "https://github.com/love1ace/taskl"
    },
    {
        id: 10,
        name: "KIM",
        description: "Dongyeong Kim's Portfolio",
        logo: "./emoji.png",
        tags: ["Active", "2024"],
        link: "https://dongyeongkim.com/"
    },
    {
        id: 9,
        name: "PLY",
        description: "Video link-based playlist sharing platform",
        logo: "./ply.png",
        tags: ["2024"],
        link: "https://github.com/Dev-FE-1/Toy_Project_3_Team3"
    },
    {
        id: 8,
        name: "byul alias",
        description: "Simple git alias manager",
        logo: "./byulalias2.png",
        tags: ["npm package", "2024"],
        link: "https://www.npmjs.com/package/byul-alias"
    },
    {
        id: 7,
        name: "byulhook",
        description: "byulhook is a tool for managing Git hooks",
        logo: "./byulhook.png",
        tags: ["npm package", "2024"],
        link: "https://www.npmjs.com/package/byulhook"
    },
    {
        id: 6,
        name: "byul",
        description: "It quickly and easily formats commit",
        logo: "./byul2.png",
        tags: ["npm package", "2024"],
        link: "https://www.npmjs.com/package/byul"
    },
    {
        id: 5,
        name: "woochee",
        description: "Payroll and task management platform",
        logo: "./woochee.png",
        tags: ["2024"],
        link: "https://github.com/Dev-FE-1/woowahan-siblings"
    },
    {
        id: 4,
        name: "Clock App",
        description: "Electron desktop clock app",
        logo: "./clock.png",
        tags: ["2024"],
        link: "https://github.com/love1ace/electron-clock"
    },
    {
        id: 3,
        name: "Aucom",
        description: "Auto GitHub contribution graph.",
        logo: "./aucom.png",
        tags: ["Discontinued", "2024"],
        link: "https://github.com/love1ace/Auto-commit.com"
    },
    {
        id: 2,
        name: "Portfolio",
        description: "First portfolio site with Vanila JS",
        logo: "./kim.png",
        tags: ["2024"],
        link: "https://love1ace.github.io/DONGYEONG-KIM/en/html/index.html"
    },
    {
        id: 1,
        name: "random pepe",
        description: "Random Pepe image npm package​",
        logo: "./pepe.png",
        tags: ["npm package", "2024"],
        link: "https://www.npmjs.com/package/random-pepes"
    },
  ];