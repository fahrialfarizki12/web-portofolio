import Image from "next/image";

export default function HeroAbout() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:place-items-center gap-5">
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
            Hi, I’m Fahri Alfa Rizki, a Web Developer who enjoys exploring web
            development from front-end to back-end. I love building modern and
            visually appealing websites using the latest technologies.
            Currently, I use Next.js for front-end development and NestJS for
            back-end development. With this technology stack, I can build fast,
            well-structured, and scalable web applications. I have solid
            experience ensuring that web projects run smoothly, perform
            optimally, and maintain an attractive visual design. Beyond coding,
            I also have skills in graphic design using PixelLab and Canva, as
            well as designing user-friendly UI/UX interfaces. This combination
            of skills allows me to deliver the best results in every project I
            work on.
          </p>
        </div>
      </div>
    </>
  );
}
