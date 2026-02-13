export default function TextHeadingHero({ TitleBlog }: { TitleBlog: string }) {
  return (
    <>
      <h2 className="font-semibold text-3xl tracking-tight text-center sm:text-left mb-">
        {TitleBlog}
      </h2>
    </>
  );
}
