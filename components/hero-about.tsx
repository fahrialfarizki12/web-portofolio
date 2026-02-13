import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiNestjs, SiPrisma } from "react-icons/si";

import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
export default function HeroAbout({
  HeroOne,
  HeroTwo,
}: {
  HeroOne?: boolean | undefined;
  HeroTwo?: boolean | undefined;
}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:place-items-center gap-5">
        {HeroOne && (
          <>
            <div className="bg-accent rounded aspect-square relative">
              <Image
                className="rounded-full w-[70%] mx-auto object-cover mask-b-from-3.5"
                src="/profile.jpeg"
                alt="Photo Fahri Alfa Rizki"
                width={200}
                height={200}
                quality={100}
              />
              <p className="font-semibold text-foreground/80 absolute bottom-0 text-center  w-full">
                Fahri Alfa Rizki
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-foreground/80">
                Hi, I’m Fahri Alfa Rizki, a Web Developer who enjoys exploring
                web development from front-end to back-end. I love building
                modern and visually appealing websites using the latest
                technologies. Currently, I use Next.js for front-end development
                and NestJS for back-end development. With this technology stack,
                I can build fast, well-structured, and scalable web
                applications. I have solid experience ensuring that web projects
                run smoothly, perform optimally, and maintain an attractive
                visual design. Beyond coding, I also have skills in graphic
                design using PixelLab and Canva, as well as designing
                user-friendly UI/UX interfaces. This combination of skills
                allows me to deliver the best results in every project I work
                on.
              </p>
            </div>
          </>
        )}
        {HeroTwo && (
          <>
            <div className="capitalize">
              <h1 className="font-semibold text-2xl mb-4">brief history</h1>
              <p className="text-sm text-foreground/80 max-w-md">
                My journey as a programmer started accidentally in the middle of
                COVID in 2020. It all began with playing Minecraft. At that
                time, my friends and I played together offline, but over time,
                playing Minecraft became boring. However, I once saw a YouTuber
                playing Minecraft online. I was curious—how did they do that?
                How could they play Minecraft online together? Since then, I
                started looking for information on websites and YouTube
                tutorials, and it turned out it was possible. To play Minecraft
                online, you need something called a server and a domain. In
                short, I learned about servers and domains, and eventually, I
                was able to create my first Minecraft server using Pocketmine MP
                software. This software is specifically for Minecraft MCPE or on
                Android/iOS. Since then, I've enjoyed tinkering with program
                code, such as Minecraft plugins, and even creating my own
                website.
              </p>
            </div>
            <div className="capitalize w-full">
              <h1 className="font-semibold text-2xl">my skills</h1>
              <p className="text-sm mb-4">professional skills</p>
              <div className="grid grid-cols-2  place-items-center gap-4">
                <Card className="w-full border-accent/50 rounded">
                  <CardHeader className="flex items-center gap-3">
                    <CardTitle>
                      <div>
                        <RiJavascriptFill className="text-5xl transition cursor-pointer ease-in-out fill-muted-foreground  hover:fill-yellow-500 active:fill-yellow-500" />
                      </div>
                    </CardTitle>
                    <div>
                      <CardAction>JavaScript</CardAction>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="w-full border-accent/50 rounded">
                  <CardHeader className="flex items-center gap-3">
                    <CardTitle>
                      <div>
                        <BiLogoTypescript className="text-5xl transition cursor-pointer ease-in-out fill-muted-foreground  hover:fill-[#3498db] active:fill-[#3498db]" />
                      </div>
                    </CardTitle>
                    <div>
                      <CardAction>TypeScript</CardAction>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="w-full border-accent/50 rounded">
                  <CardHeader className="flex items-center gap-3">
                    <CardTitle>
                      <div>
                        <RiNextjsFill className="text-5xl transition cursor-pointer ease-in-out fill-muted-foreground  hover:fill-black active:fill-black" />
                      </div>
                    </CardTitle>
                    <div>
                      <CardAction>NextJs</CardAction>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="w-full border-accent/50 rounded">
                  <CardHeader className="flex items-center gap-3">
                    <CardTitle>
                      <div>
                        <SiNestjs className="text-5xl transition cursor-pointer ease-in-out fill-muted-foreground  hover:fill-red-500 active:fill-red-500" />
                      </div>
                    </CardTitle>
                    <div>
                      <CardAction>NestJs</CardAction>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="w-full border-accent/50 rounded">
                  <CardHeader className="flex items-center gap-3">
                    <CardTitle>
                      <div>
                        <RiTailwindCssFill className="text-5xl transition cursor-pointer ease-in-out fill-muted-foreground  hover:fill-cyan-500 active:fill-cyan-500" />
                      </div>
                    </CardTitle>
                    <div>
                      <CardAction>Tailwind CSS</CardAction>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="w-full border-accent/50 rounded">
                  <CardHeader className="flex items-center gap-3">
                    <CardTitle>
                      <div>
                        <SiPrisma className="text-5xl transition cursor-pointer ease-in-out fill-muted-foreground  hover:fill-cyan-500 active:fill-cyan-500" />
                      </div>
                    </CardTitle>
                    <div>
                      <CardAction>Prisma ORM</CardAction>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
