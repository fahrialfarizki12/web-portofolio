import HeroAbout from "@/components/hero-about";
import HeroText from "@/components/hero-text";
import Timeline from "@/components/timeline";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaBox } from "react-icons/fa";
import { TbAward } from "react-icons/tb";

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://fahrialfarizki.vercel.app"),
  title: {
    default: "Fahri Alfa Rizki | About Me",
    template: "%s | Fahri Alfa Rizki",
  },
  icons: {
    icon: "/profile.jpeg",
  },
  description:
    "Lihat Sejarah Cerita Fahri Sarung kenapa dia progammer yang terus belajar, dan haus akan ilmu teknologi",
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

export default function AboutPage() {
  return (
    <>
      <HeroText
        title="About Me"
        description="Here is a brief overview about myself and why I became a programmer"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-10">
        <Card className="border-accent/80 w-full relative rounded ">
          <Badge className="absolute top-0 left-0 rounded">Front-End</Badge>
          <Badge className="absolute top-0 right-0 rounded">Back-End</Badge>
          <Badge className="absolute bottom-0 right-0 rounded">
            Designer Database
          </Badge>
          <Badge className="absolute bottom-0 left-0 rounded">
            Designer Website
          </Badge>
          <CardHeader>
            <CardTitle>
              <div className="flex justify-center">
                <TbAward className="text-5xl sm:text-7xl" />
              </div>
            </CardTitle>
            <CardDescription className="text-center">6 Years</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-center">Experience</p>
          </CardContent>
        </Card>

        <Card className="border-accent/80 w-full relative rounded ">
          <Badge className="absolute top-0 left-0 rounded">Perfect</Badge>

          <CardHeader>
            <CardTitle>
              <div className="flex justify-center">
                <FaBox className="text-5xl sm:text-7xl" />
              </div>
            </CardTitle>
            <CardDescription className="text-center">
              10 Project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-center">
              Productions & Development
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="my-20">
        <HeroAbout HeroOne={true} />
      </div>

      <div>
        <Timeline />
      </div>

      <div className="my-20 mt-30">
        <HeroAbout HeroTwo={true} />
      </div>
    </>
  );
}
