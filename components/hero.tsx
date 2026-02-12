"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, File } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { BackgroundPattern } from "./background-grid";
import { Badge } from "./ui/badge";

export default function Hero() {
  return (
    <>
      <BackgroundPattern />
      <div className="flex mt-20 z-10  items-center justify-center">
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
              <Button
                className="rounded-full text-base shadow-none"
                size="lg"
                variant="outline"
              >
                <File className="h-5! w-5!" /> Resume
              </Button>
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
              className="rounded bottom-0 absolute max-w-xl sm:w-[70%] "
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
