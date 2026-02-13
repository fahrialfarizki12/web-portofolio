import { IHeroText } from "@/interface/text.interface";

export default function HeroText({ title, description }: IHeroText) {
  return (
    <>
      <div className="my-30 sm:text-center">
        <h1 className="font-semibold text-2xl mb-2">{title}</h1>
        <p className="text-sm text-foreground/80 sm:text-center max-w-md sm:mx-auto">
          {description}
        </p>
      </div>
    </>
  );
}
