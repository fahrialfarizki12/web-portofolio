import type { ITextHero } from "@/interface/text.interface";

export default function TextHero({ title, subtitle, description }: ITextHero) {
  return (
    <>
      <div>
        <p className="text-sm text-primary font-semibold">{subtitle}</p>
        <h1 className="text-xl max-w-md sm:text-md font-bold mb-3">{title}</h1>
        <p className="max-w-md text-sm text-foreground/80">{description}</p>
      </div>
    </>
  );
}
