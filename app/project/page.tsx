import Blog from "@/components/blog";
import HeroText from "@/components/hero-text";
import TextHeadingHero from "@/components/text-heading-blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://fahrialfarizki.vercel.app"),
  title: {
    default: "Fahri Alfa Rizki | Project",
    template: "%s | Fahri Alfa Rizki",
  },
  icons: {
    icon: "/profile.jpeg",
  },
  description:
    "Portfolio resmi Fahri Alfa Rizki, Web Developer Indonesia yang menggunakan Next.js untuk membangun website modern dan scalable.",
  keywords: [
    "Fahri Alfa Rizki",
    "Web Developer Indonesia",
    "Next.js Developer",
    "Fahri Sarung",
    "Fahri Sarung Developer",
    "NestJS Developer",
  ],
  openGraph: {
    title: "Fahri Alfa Rizki | Web Developer Indonesia",
    description:
      "Portfolio resmi Fahri Alfa Rizki, Fullstack Web Developer Indonesia.",
    url: "https://fahrialfarizki.vercel.app/",
    siteName: "Fahri Portfolio",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PageProject() {
  return (
    <>
      <HeroText
        title="My Portfolio"
        description="Here are some of the projects I have built. Every time I complete a
          new project, I upload and showcase it here as part of my continuous
          growth as a developer."
      />
      <div className="mx-auto max-w-(--breakpoint-xl) px-6 py-16 xl:px-0">
        <TextHeadingHero TitleBlog="Project Post" />
        <div className="mt-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Blog
            TitleCard="Personal Web Alya Narulita"
            DescriptionCard="This is a student's portfolio project that uses HTML, Tailwind, and JavaScript technology."
            imageUrl="/portofolio-1.png"
            imageAlt="Photo Alya Narulita"
            BadgeBlog={["Html", "Tailwind Css", "JavaScript"]}
            Visit={true}
            VisitUrl="https://alyanarulita.github.io/"
            ImageProfile="/profile.jpeg"
            ImageProfileAlt="Author Fahri Alfa Rizki"
            Author="Fahri Alfa Rizki"
            DateBlog="Nov, 2023"
          />
          <Blog
            TitleCard="Mosque AL-HIDAYAH"
            DescriptionCard="This is a Musollah Web Project in my village, using HTML, Tailwind, and JavaScript technology."
            imageUrl="/portofolio-2.png"
            imageAlt="Photo Mosque AL-HIDAYAH"
            BadgeBlog={["Html", "Tailwind Css", "JavaScript"]}
            Visit={true}
            VisitUrl="https://al-hidayah-kb.github.io/al-hidayah-kb/"
            ImageProfile="/profile.jpeg"
            ImageProfileAlt="Author Fahri Alfa Rizki"
            Author="Fahri Alfa Rizki"
            DateBlog="Des, 2023"
          />
          <Blog
            TitleCard="Personal Web Fahri Alfa Rizki"
            DescriptionCard="This is my first web portfolio project, which uses HTML, CSS, and JavaScript technologies."
            imageUrl="/portofolio-3.png"
            imageAlt="Photo Personal Web` Fahri Alfa Rizki"
            BadgeBlog={["Html", "Css", "JavaScript"]}
            Visit={true}
            VisitUrl="https://fahrisarung.github.io/"
            ImageProfile="/profile.jpeg"
            ImageProfileAlt="Author Fahri Alfa Rizki"
            Author="Fahri Alfa Rizki"
            DateBlog="Jan, 2022"
          />
          <Blog
            TitleCard="E-Commerce FahriStoreID"
            DescriptionCard="This was my first e-commerce website, built in 2020, where I offered digital services such as game hosting, domain registration, and server setup. It marked the beginning of my journey in web development, and even though it was built using only HTML, CSS, and JavaScript, it remains an important milestone in my growth as a developer."
            imageUrl="/portofolio-5.png"
            imageAlt="Photo E-Commerce FahriStoreID"
            BadgeBlog={["Html", "Css", "JavaScript"]}
            Visit={true}
            VisitUrl="https://fahrisarung.github.io/project/"
            ImageProfile="/profile.jpeg"
            ImageProfileAlt="Author Fahri Alfa Rizki"
            Author="Fahri Alfa Rizki"
            DateBlog="Apr, 2020"
          />
          <Blog
            TitleCard="Personal Web Fahri Alfa Rizki"
            DescriptionCard="This is my second portfolio website project, built using Tailwind CSS. In this project, I focused on creating a clean, modern, and responsive design while improving my frontend development skills and understanding of utility-first CSS styling."
            imageUrl="/portofolio-4.png"
            imageAlt="Photo Personal Web Fahri Alfa Rizki"
            BadgeBlog={["Html", "Tailwind Css", "JavaScript"]}
            Visit={true}
            VisitUrl="https://fahrialfarizki-github-io.vercel.app/"
            ImageProfile="/profile.jpeg"
            ImageProfileAlt="Author Fahri Alfa Rizki"
            Author="Fahri Alfa Rizki"
            DateBlog="May, 2023"
          />
          <Blog
            TitleCard="Absensi Prakerind"
            DescriptionCard="This is a student internship attendance web application that I am currently developing using Next.js for the frontend and Express.js for the backend. The application has already been completed and is fully functional. It is scheduled to be deployed in March, after the Eid al-Fitr holiday."
            imageUrl="/portofolio-6.png"
            imageAlt="Photo Absensi Prakerind"
            BadgeBlog={[
              "NextJs",
              "ExpressJs",
              "Tailwind Css",
              "ORM Sequalize",
              "MySQL",
            ]}
            Visit={false}
            ImageProfile="/profile.jpeg"
            ImageProfileAlt="Author Fahri Alfa Rizki"
            Author="Fahri Alfa Rizki"
            DateBlog="Des, 2025"
          />
        </div>
      </div>
    </>
  );
}
