import Hero from "@/components/hero";
import TextPseudo from "@/components/text-pseudo";
import TextHero from "@/components/text/text.hero";
import CardHero from "@/components/card";

export default function HomePage() {
  return (
    <>
      {/* Hero Section  */}
      <Hero />
      {/* Text Pseudo  */}
      <TextPseudo />

      {/* TextHero  */}
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-8 place-items-center">
          <TextHero
            title="Attractive, Modern & Minimalist Design."
            subtitle="Clean & Intuitive"
            description="Keep the User Interface clean with a modern touch without compromising
          the User Experience."
          />
          <TextHero
            title="Structured, Secure & High-Performance Backend Systems."
            subtitle="Reliable & Performant"
            description="Design scalable APIs and server architecture with clean code principles to ensure stability, efficiency, and long-term maintainability."
          />
        </div>
      </div>

      {/* Card Content  */}
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-7 place-items-center">
          <CardHero
            badge="R"
            top="HIGH"
            title="Read the Documentation"
            description="You must read the documentation when learning new technology to
          avoid making mistakes."
            footer="12:00 AM • Tomorrow"
          />
          <CardHero
            badge="W"
            top="HIGH"
            title="Watch and Practice"
            description="You must read the documentation when learning new technology to
          avoid making mistakesYou should follow tutorials and practice directly when learning new technology to build real understanding faster."
            footer="10:00 AM • Tomorrow"
          />
        </div>
      </div>

      {/* TextHero  */}
      <div className="my-15">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center  gap-5 gap-y-8 ">
          <TextHero
            title="For Front-End Developer."
            subtitle="Users Interface"
            description="User Interface or user interface is very important for web developers, because it's pointless to create a design if it cannot be interacted with by users."
          />
          <TextHero
            title="For Back-End Developer"
            subtitle="Focus Language"
            description="For beginners, you should focus on one programming language first. Beginners can start by learning the JavaScript programming language first."
          />
        </div>
      </div>
    </>
  );
}
