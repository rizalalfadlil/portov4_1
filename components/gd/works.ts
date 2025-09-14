"use client";
interface WorksProps {
  title?: string;
  category: string;
  description?: string;
  imageUrl: string[];
}

const works: WorksProps[] = [
  {
    title: "desain baju jurusan",
    category: "school project",
    imageUrl: ["/designFiles/school1.png", "/designFiles/school3.jpg"],
  },
  {
    title: "bisa ngopi app logo",
    category: "school project",
    imageUrl: ["/designFiles/school.png"],
  },
  {
    title: "seblak genyur product package",
    category: "school project",
    imageUrl: ["/designFiles/school2.png"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx.png"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx1.jpg"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx2.jpg"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx3.jpg"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx4.jpg"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx5.jpg"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx6.jpg"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx7.jpg"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx8.jpg"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx9.jpg"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx10.jpg"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx11.jpg"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx12.jpg"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx13.jpg"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx14.jpg"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx15.jpg"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx16.jpg"],
  },
  {
    category: "social media (facebook) banner",
    imageUrl: ["/designFiles/gfx17.jpg"],
  },
  {
    title: "old designer portfolio page design",
    category: "UI Design",
    imageUrl: ["/designFiles/ui.png"],
  },
  {
    title: "component library design concept",
    category: "UI Design",
    imageUrl: ["/designFiles/ui1.png"],
  },
  {
    title: "2024 developer portfolio page design",
    category: "UI Design",
    imageUrl: ["/designFiles/ui2.png"],
  },
  {
    title: "awal mula perjalanan seorang sepuh wengdev",
    category: "social media post",
    imageUrl: [
      "/designFiles/slide1-1.jpg",
      "/designFiles/slide1-2.jpg",
      "/designFiles/slide1-3.jpg",
      "/designFiles/slide1-4.jpg",
      "/designFiles/slide1-5.jpg",
      "/designFiles/slide1-6.jpg",
      "/designFiles/slide1-7.jpg",
      "/designFiles/slide1-8.jpg",
    ],
  },
  {
    title: "pura-pura ngoding padahal aslinya ngedit",
    category: "social media post",
    imageUrl: [
      "/designFiles/slide2-1.jpg",
      "/designFiles/slide2-2.jpg",
      "/designFiles/slide2-3.jpg",
      "/designFiles/slide2-4.jpg",
      "/designFiles/slide2-5.jpg",
      "/designFiles/slide2-6.jpg",
    ],
  },
  {
    title:
      "cara membuat tata letak dengan benar sehingga kamu nggak sengaja nge skip arc center div",
    category: "social media post",
    imageUrl: [
      "/designFiles/slide3-1.jpg",
      "/designFiles/slide3-2.jpg",
      "/designFiles/slide3-3.jpg",
      "/designFiles/slide3-4.jpg",
      "/designFiles/slide3-5.jpg",
      "/designFiles/slide3-6.jpg",
      "/designFiles/slide3-7.jpg",
      "/designFiles/slide3-8.jpg",
    ],
  },
  {
    title:
      "cara membuat tata letak yang rapi di semua layar biar nggak kayak website pemerintah",
    category: "social media post",
    imageUrl: [
      "/designFiles/slide4-1.jpg",
      "/designFiles/slide4-2.jpg",
      "/designFiles/slide4-3.jpg",
      "/designFiles/slide4-4.jpg",
      "/designFiles/slide4-5.jpg",
      "/designFiles/slide4-6.jpg",
    ],
  },
  {
    title: "cara menggunakan CLI biar jadi kayak hengker pripayer",
    category: "social media post",
    imageUrl: [
      "/designFiles/slide5-1.jpg",
      "/designFiles/slide5-2.jpg",
      "/designFiles/slide5-3.jpg",
      "/designFiles/slide5-4.jpg",
      "/designFiles/slide5-5.jpg",
      "/designFiles/slide5-6.jpg",
      "/designFiles/slide5-7.jpg",
      "/designFiles/slide5-8.jpg",
      "/designFiles/slide5-9.jpg",
      "/designFiles/slide5-10.jpg",
    ],
  },
];

const getRandomWorkImage = () => {
  const randomWork = works[Math.floor(Math.random() * works.length)];
  return randomWork.imageUrl[
    Math.floor(Math.random() * randomWork.imageUrl.length)
  ];
};

export { works, getRandomWorkImage };
export type { WorksProps };
