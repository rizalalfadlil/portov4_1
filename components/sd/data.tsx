import { Project } from "./types";
import {
  SiFirebase,
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiTypescript,
} from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
export const projects: Project[] = [
  {
    id: 1,
    title: "Fita Pro",
    description:
      "Selamat datang di Fita Pro, aplikasi jurnal digital yang dikelola oleh Akademi Farmasi YPF, yang dirancang untuk memudahkan akademisi, peneliti, dan mahasiswa dalam mengakses dan berbagi informasi terkini seputar ilmu farmasi.",
    imageUrl: "./projectsThumbnail/fitapro.png",
    url: "https://fitapro.akfarypf.ac.id/",
    tags: ["typescript", "next", "tailwindcss", "firebase"],
    category: "commissioned",
  },
  {
    id: 2,
    title: "Laravel Image Gallery",
    description: "gallery app created with laravel",
    imageUrl: "./projectsThumbnail/gallery-laravel.png",
    tags: ["laravel", "php", "mysql", "react"],
    sourceCode: "https://github.com/rizalalfadlil/laravel-gallery",
    category: "personal",
  },
  {
    id: 3,
    title: "Characters api",
    description: "people/characters crud api with laravel",
    imageUrl: "./projectsThumbnail/api.png",
    tags: ["laravel", "php", "tailwindcss"],
    sourceCode: "https://github.com/rizalalfadlil/characters-api",
    category: "personal",
  },
  {
    id: 4,
    title: "Bisa Ngopi",
    description:
      "Coffee ordering app created as part of a competency test (UKK) and a graduation requirement.",
    imageUrl: "./projectsThumbnail/ngopi.png",
    url: "https://bisa-ngopi.vercel.app/",
    tags: ["typescript", "next", "tailwindcss", "shadcn", "pocketbase"],
    sourceCode: "https://github.com/rizalalfadlil/next-test",
    category: "academic",
  },
  {
    id: 5,
    title: "Hotel Hebat",
    description:
      "online hotel reservation app developed for pre-competency test practice.",
    imageUrl: "./projectsThumbnail/hotel.png",
    tags: ["javascript", "react", "antdesign", "mysql", "express", "bootstrap"],
    sourceCode: "https://github.com/rizalalfadlil/hotel-hebat",
    category: "academic",
  },
  {
    id: 6,
    title: "Lelang Online",
    description:
      "An online auction platform designed for transparent and fair bidding, also created as a practice project before the competency test.",
    imageUrl: "./projectsThumbnail/lelang.png",
    tags: ["javascript", "react", "antdesign", "mysql", "express", "bootstrap"],
    sourceCode: "https://github.com/rizalalfadlil/lelang-online-backend",
    category: "academic",
  },
  {
    id: 7,
    title: "Chat Singleplayer",
    description:
      "A chatbot application with AI using gemini api that simulates conversations with characters from popular games.",
    imageUrl: "./projectsThumbnail/halu.png",
    url: "https://chat-singleplayer.vercel.app/chat",
    tags: ["typescript", "next", "tailwindcss", "shadcn", "firebase", "gemini"],
    category: "personal",
  },
  {
    id: 8,
    title: "Undefeatable Tic Tac Toe",
    description:
      "Undefeatable Tic Tac Toe This app takes the timeless game of Tic Tac Toe and elevates it with an unbeatable AI opponent.",
    imageUrl: "./projectsThumbnail/ttt.png",
    url: "https://rizalalfadlil.github.io/undefeatable-tictactoe//",
    tags: ["html", "css", "javascript"],
    sourceCode: "https://github.com/rizalalfadlil/undefeatable-tictactoe",
    category: "personal",
  },
  {
    id: 9,
    title: "Ujian Online",
    description:
      "a online examination platform developed during an internship period as a product outcome.",
    imageUrl: "./projectsThumbnail/ujian.png",
    url: "https://bisa-ngopi.vercel.app/",
    tags: ["javascript", "react", "antdesign", "mysql", "express", "bootstrap"],
    sourceCode: "https://github.com/rizalalfadlil/aplikasi",
    category: "academic",
  },
  {
    id: 10,
    title: "Anagram Generator",
    description: "Generate anagram from a person name.",
    imageUrl: "./projectsThumbnail/anagram.png",
    url: "https://anagram-nama.pages.dev/",
    tags: ["javascript", "react", "antdesign"],
    sourceCode: "https://github.com/rizalalfadlil/anagram",
    category: "personal",
  },
  {
    id: 11,
    title: "Blog",
    description: "Personal blog platform",
    imageUrl: "./projectsThumbnail/blog.png",
    url: "https://blog-rizalalfadlil.vercel.app/",
    tags: ["typescript", "next", "tailwindcss", "shadcn"],
    sourceCode: "https://github.com/rizalalfadlil/blog-2",
    category: "personal",
  },
  {
    id: 12,
    title: "Tes Karbit",
    description: "random percentage generator",
    imageUrl: "./projectsThumbnail/bit.png",
    url: "https://rizalalfadlil.github.io/bit/",
    tags: ["react", "antdesign", "javascript"],
    sourceCode: "https://github.com/rizalalfadlil/bit",
    category: "personal",
  },
  {
    id: 13,
    title: "Tes Maker",
    description: "random percentage maker as requested by tes karbit user",
    imageUrl: "./projectsThumbnail/tes-maker.png",
    url: "https://persen.ism-smile.web.id/",
    tags: ["react", "antdesign", "javascript"],
    sourceCode: "https://github.com/rizalalfadlil/anything",
    category: "personal",
  },
];

export const tags = {
    html: <FaHtml5 size={32} color="#e34c26" />,
    css: <FaCss3Alt size={32} color="#1572B6" />,
    javascript: <SiJavascript size={32} color="#f7df1e" />,
    react: <FaReact size={32} color="#61dafb" />,
    typescript: <SiTypescript size={32} color="#3178c6" />,
    nodejs: <FaNodeJs size={32} color="#339933" />,
    firebase: <SiFirebase size={32} color="orange" />,
    next: <RiNextjsFill size={32} color="#252525" />,
    tailwindcss: <RiTailwindCssFill size={32} color="#178dbb" />,
    laravel: <SiLaravel size={32} color="red" />,
    php: <SiPhp size={32} color="lightsteelblue" />,
    pocketbase: (
      <img
        src="https://pocketbase.io/images/logo.svg"
        alt="pocketbase"
        width={32}
        height={32}
      />
    ),
    shadcn: (
      <img src="./stackicons/shadcn.webp" alt="shadcn" width={32} height={32} />
    ),
    bootstrap: (
      <img
        src="./stackicons/bootstrap.svg"
        alt="bootstrap"
        width={32}
        height={32}
      />
    ),
    antdesign: (
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        alt="antdesign"
        width={32}
        height={32}
      />
    ),
    express: (
      <img src="./stackicons/ex.webp" alt="express" width={32} height={32} />
    ),
    gemini: (
      <img src="./stackicons/gemini.png" alt="gemini" width={32} height={32} />
    ),
  };

  export const getRandomProjectThumbnails = () => {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4).map((project) => project.imageUrl);
  };