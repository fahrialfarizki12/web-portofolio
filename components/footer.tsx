import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerSections = [
  {
    title: "Page Website",
    links: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Project",
        href: "/project",
      },
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Educations",
        href: "/educations",
      },
      {
        title: "Contact Us",
        href: "#",
      },
      {
        title: "Achievement",
        href: "/achievement",
      },
    ],
  },
  {
    title: "Learn (Comming Soon)",
    links: [
      {
        title: "NestJS",
        href: "#",
      },
      {
        title: "NextJS",
        href: "#",
      },
      {
        title: "TailwindCSS",
        href: "#",
      },
      {
        title: "Prisma ORM",
        href: "#",
      },
      {
        title: "Typescript",
        href: "#",
      },
      {
        title: "JavaScript",
        href: "#",
      },
    ],
  },
  {
    title: "Social Media",
    links: [
      {
        title: "Instagram",
        href: "https://www.instagram.com/fahrisarung/",
      },
      {
        title: "Facebook",
        href: "https://www.facebook.com/share/1ASSBU94Wv/",
      },
      {
        title: "Github",
        href: "https://github.com/fahrialfarizki12",
      },
      {
        title: "Lingkedln",
        href: "https://www.linkedin.com/in/fahri-alfa-rizki-rizki-3b72ab317/",
      },
      {
        title: "TikTok",
        href: "https://www.tiktok.com/@fahri.sarung?_r=1&_t=ZS-93r8DYaZUtY",
      },
      {
        title: "YouTube",
        href: "https://www.youtube.com/@fahrisarung",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex  flex-col ">
      <div className="grow bg-muted" />
      <footer className="">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="grid grid-cols-2   sm:place-items-center gap-x-8 gap-y-10 px-6 py-12 md:grid-cols-3  xl:px-0">
            {footerSections.map(({ title, links }) => (
              <div key={title}>
                <h6 className="font-medium">{title}</h6>
                <ul className="mt-6 space-y-4">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link
                        className="text-muted-foreground hover:text-foreground"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator />
          <div className="flex flex-col text-left sm:items-center justify-between gap-x-2 gap-y-4 px-6 py-8 sm:flex-row xl:px-0">
            {/* Logo */}
            <h1>Fahri Alfa Rizki | Software Enginner</h1>

            {/* Copyright */}
            <span className="text-muted-foreground">
              Copyright &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                Fahri Alfa Rizki
              </Link>
              . All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
