import { CATEGORIES } from "../utils/data/categories";
import prisma from "../lib/connect";
import { POST } from "../app/api/posts/route";

console.log(CATEGORIES);

const insertCategories = async () => {
  await prisma.category.createMany({
    data: [
      // Add a colon (:) after 'data'
      {
        id: "1",
        slug: "javascript",
        title: "JavaScript",
        image: "",
      },
      {
        id: "2",
        slug: "react",
        title: "React",
        image: "",
      },
      {
        id: "3",
        slug: "nextjs",
        title: "Next.js",
        image: "",
      },
      {
        id: "4",
        slug: "tailwindcss",
        title: "Tailwind CSS",
        image: "",
      },
      {
        id: "5",
        slug: "nodejs",
        title: "Node.js",
        image: "",
      },
    ],
  });
};

insertCategories();
