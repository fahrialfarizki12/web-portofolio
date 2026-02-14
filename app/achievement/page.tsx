import HeroText from "@/components/hero-text";
import Blog from "@/components/blog";
import TextHeadingHero from "@/components/text-heading-blog";

export default function AchievementPage() {
  return (
    <>
      <HeroText
        title="My Achievement"
        description="Here are some of the achievements I have accomplished throughout my journey as a developer. Each milestone reflects my dedication, continuous learning, and commitment to improving my skills and delivering quality results."
      />
      <div className="mx-auto max-w-(--breakpoint-xl) px-6 py-16 xl:px-0">
        <TextHeadingHero TitleBlog="Achievement Post" />
        <div className="mt-4 grid gap-10 sm:grid-cols-2 ">
          <Blog
            TitleCard="Institut Teknologi Bandung"
            DescriptionCard="This certificate was awarded by Institut Teknologi Bandung (ITB) in recognition of my participation in a project they organized. In this project, I was involved in the installation of cameras, sirens, and panic buttons in a tourist area in Lampung Timur, specifically at Taman Nasional Way Kambas (TNWK). The system was designed to monitor the movement of wild elephants through the installed cameras, helping to enhance security and surveillance in the area."
            imageUrl="/sertifikat/certi-itb.jpeg"
            imageAlt="Photo Institut Teknologi Bandung"
            BadgeBlog={["Perfect", "ITB"]}
            Visit={false}
            ImageProfile="/profile.jpeg"
            ImageProfileAlt="Author Fahri Alfa Rizki"
            Author="Fahri Alfa Rizki"
            DateBlog="Des, 2024"
          />
          <Blog
            TitleCard="Learn JavaScript 30 Days"
            DescriptionCard="This certificate was obtained from Udemy as proof that I successfully completed a 30-day JavaScript learning program. I enrolled in this program to deepen and strengthen my understanding of JavaScript, allowing me to significantly improve my proficiency in using the programming language compared to before."
            imageUrl="/sertifikat/certi-js.jpeg"
            imageAlt="Photo Learn JavaScript 30 Days"
            BadgeBlog={["Udemy", "30 Days"]}
            Visit={false}
            ImageProfile="/profile.jpeg"
            ImageProfileAlt="Author Fahri Alfa Rizki"
            Author="Fahri Alfa Rizki"
            DateBlog="May, 2025"
          />
          <Blog
            TitleCard="Rank 1 in class"
            DescriptionCard="This certificate is an award recognizing my achievement of ranking first in school. I studied diligently and consistently to attain this accomplishment. In addition to focusing on academics, I also developed additional skills in coding to further enhance my abilities.
"
            imageUrl="/sertifikat/certi-peringkat.jpeg"
            imageAlt="Photo Rank 1 in class"
            BadgeBlog={["School"]}
            Visit={false}
            ImageProfile="/profile.jpeg"
            ImageProfileAlt="Author Fahri Alfa Rizki"
            Author="Fahri Alfa Rizki"
            DateBlog="Apr, 2024"
          />
          <Blog
            TitleCard="Driving Certificate"
            DescriptionCard="This certificate serves as proof that I completed a driving practice program at school and successfully passed with a good score. The training helped me understand the fundamentals of safe, disciplined, and responsible driving."
            imageUrl="/sertifikat/certi-stir.jpeg"
            imageAlt="Photo Driving Certificate"
            BadgeBlog={["School", "Driving"]}
            Visit={false}
            ImageProfile="/profile.jpeg"
            ImageProfileAlt="Author Fahri Alfa Rizki"
            Author="Fahri Alfa Rizki"
            DateBlog="Apr, 2024"
          />
        </div>
      </div>
    </>
  );
}
