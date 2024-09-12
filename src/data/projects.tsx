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
        id: 1,
        name: "KIM",
        description: "Dongyeong Kim's Portfolio",
        logo: "./emoji.png",
        tags: ["Active", "2024"],
        link: "https://dongyeongkim.com/"
    },
    {
        id: 2,
        name: "PLY",
        description: "Video link-based playlist sharing platform",
        logo: "./ply.png",
        tags: ["2024"],
        link: "https://github.com/Dev-FE-1/Toy_Project_3_Team3"
    },
    {
        id: 3,
        name: "byul",
        description: "It quickly and easily formats commit",
        logo: "./byul.png",
        tags: ["Active", "2024"],
        link: "https://www.npmjs.com/package/byul"
    },
    {
        id: 4,
        name: "byulhook",
        description: "byulhook is a tool for managing Git hooks",
        logo: "./byul.png",
        tags: ["Active", "2024"],
        link: "https://www.npmjs.com/package/byulhook"
    },
    {
        id: 5,
        name: "byul alias",
        description: "Simple git alias manager",
        logo: "./byul.png",
        tags: ["Active", "2024"],
        link: "https://www.npmjs.com/package/byul-alias"
    },
    {
        id: 6,
        name: "Aucom",
        description: "Auto GitHub contribution graph.",
        logo: "./aucom.png",
        tags: ["Discontinued", "2024"],
        link: "https://github.com/love1ace/Auto-commit.com"
    },
    {
        id: 7,
        name: "woochee",
        description: "Payroll and task management platform",
        logo: "./woochee.png",
        tags: ["2024"],
        link: "https://github.com/Dev-FE-1/woowahan-siblings"
    },
    {
        id: 8,
        name: "Clock App",
        description: "Electron Clock App",
        logo: "./electron.png",
        tags: ["2024"],
        link: "https://github.com/love1ace/electron-clock"
    },
    {
        id: 9,
        name: "Portfolio",
        description: "Vanila JS",
        logo: "./kim.png",
        tags: ["Discontinued", "2024"],
        link: "https://love1ace.github.io/DONGYEONG-KIM/en/html/index.html"
    },
    {
        id: 10,
        name: "Intranet Login",
        description: "Intranet login form design",
        logo: "./intranet.png",
        tags: ["2024"],
        link: "https://love1ace.github.io/intranet-login"
    },
    {
        id: 11,
        name: "Don't click",
        description: "Don't Click This Button",
        logo: "./dont.png",
        tags: ["2024"],
        link: "https://love1ace.github.io/dont-click/src/index.html"
    },
    {
        id: 12,
        name: "random pepe",
        description: "Random Pepe image npm package​",
        logo: "./pepe.png",
        tags: ["Active", "2024"],
        link: "https://www.npmjs.com/package/random-pepes"
    },
  ];