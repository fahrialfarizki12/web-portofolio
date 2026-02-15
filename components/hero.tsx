"use client";
import { SiPrisma } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, File } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { BackgroundPattern } from "./background-grid";
import { Badge } from "./ui/badge";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      <BackgroundPattern />
      <div className="flex mt-20 z-10  items-center  justify-center">
        <div className="mx-auto items-center grid w-full max-w-(--breakpoint-xl) gap-12 px-6 py-12 lg:grid-cols-2">
          <div>
            <h1 className="sm:text-lg capitalize">
              Hello everyone 👋 let me introduce myself
            </h1>
            <h2 className="mt-6 max-w-[17ch] font-semibold text-4xl leading-[1.2]! tracking-[-0.035em] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
              <TypeAnimation
                sequence={["Fahri Alfa Rizki", 2000, "Fahri Sarung", 2000]}
                speed={10}
                repeat={Infinity}
              />
            </h2>
            <p className="mt-6 max-w-[60ch] text-foreground/80 sm:text-lg">
              A Full-Stack JavaScript Developer focused on developing modern web
              applications using{" "}
              <span className="text-white font-semibold">
                Next.js and Nest.js
              </span>
              . Highly interested in technology, clean code, and building
              efficient and scalable systems.
            </p>
            <div className="mt-12 flex items-center gap-4">
              <Button className="rounded-full text-base" size="lg">
                Contact Us <ArrowUpRight className="h-5! w-5!" />
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant={"outline"}>
                    <File className="h-5! w-5!" /> Resume
                  </Button>
                </DialogTrigger>
                <DialogContent className="border-accent/50 text-left bg-background">
                  <DialogHeader>
                    <DialogTitle>Resume Fahri Alfa Rizki</DialogTitle>
                    <DialogDescription className="text-left">
                      Hello everyone, You can download Fahri Alfa Rizki’s resume
                      through the link below. It is available in two versions:
                      Indonesian and English. This resume is provided for
                      professional and company purposes.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="no-scrollbar text-sm -mx-4 max-h-[50vh] overflow-y-auto px-4">
                    <Button
                      asChild
                      variant={"secondary"}
                      className="w-full my-2"
                    >
                      <a
                        href="/cv/CV-FAHRI-ALFA-RIZKI-ID.pdf"
                        download="CV-FAHRI-ALFA-RIZKI-ID.pdf"
                        onClick={() => window.location.reload()}
                      >
                        Download Indonesian Resume
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant={"secondary"}
                      className="w-full my-2"
                    >
                      <a
                        href="/cv/CV-FAHRI-ALFA-RIZKI-EN.pdf"
                        download="CV-FAHRI-ALFA-RIZKI-EN.pdf"
                        onClick={() => window.location.reload()}
                      >
                        Download English Resume
                      </a>
                    </Button>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button className="mt-5">Close</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <div className="mt-5 px-2">
              <h1 className="text-xl font-semibold mb-3">
                My Go-To Tech Stack
              </h1>
              <div className="flex flex-wrap max-w-md gap-2 mt-2 mb-5 sm:mb-0">
                <RiJavascriptFill className="text-5xl transition cursor-pointer ease-in-out fill-muted-foreground  hover:fill-yellow-500 active:fill-yellow-500" />
                <BiLogoTypescript className="text-5xl transition cursor-pointer ease-in-out fill-muted-foreground  hover:fill-[#3498db] active:fill-[#3498db]" />
                <RiNextjsFill className="text-5xl transition cursor-pointer ease-in-out fill-muted-foreground  hover:fill-black active:fill-black" />
                <SiNestjs className="text-5xl transition cursor-pointer ease-in-out fill-muted-foreground  hover:fill-red-500 active:fill-red-500" />
                <RiTailwindCssFill className="text-5xl transition cursor-pointer ease-in-out fill-muted-foreground  hover:fill-cyan-500 active:fill-cyan-500" />
                <SiPrisma className="text-5xl transition cursor-pointer ease-in-out fill-muted-foreground  hover:fill-cyan-500 active:fill-cyan-500" />
              </div>
            </div>
          </div>
          <div className="aspect-square w-full relative rounded-xl bg-accent">
            <Badge className="absolute right-0 rounded w-50 font-semibold">
              FULL STACK WEB DEVELOPER
            </Badge>
            <h1 className="text-4xl hidden sm:block absolute capitalize left-[10%] top-[10%] tracking-[.50em]">
              <TypeAnimation
                sequence={["My Name Is", 2000, "Is Sarung?", 2000]}
                speed={10}
                repeat={Infinity}
              />
            </h1>
            <h1 className="text-2xl capitalize w-full left-[35%]  right-0 rotate-90 hidden  sm:block absolute top-[70%] tracking-[.50em]">
              <TypeAnimation
                sequence={["Fahri Alfa Rizki", 2000, "Fahri Sarung", 2000]}
                speed={10}
                repeat={Infinity}
              />
            </h1>

            <Image
              className="rounded bottom-0 absolute  max-w-xl sm:w-[70%] mask-[linear-gradient(to_top,transparent,black_50%)]"
              src="/profile.jpeg"
              alt="Fahri Alfa Rizki"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
}
