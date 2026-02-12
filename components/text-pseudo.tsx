export default function TextPseudo() {
  return (
    <>
      <div className="my-30 tracking-widest">
        <h1 className="text-center  text-3xl capitalize before:text-foreground/80 italic before:content-['〞'] text-foreground/80">
          beautiful
        </h1>
        <h2 className="text-center text-3xl capitalize before:text-white after:text-white before:content-['-'] after:content-['-'] text-white">
          Inside <span className="text-foreground/80">and</span> Out
        </h2>
        <h3 className="text-center text-3xl capitalize text-foreground/80">
          span is a <span className="text-white bg-foreground/50">must</span>
        </h3>
      </div>
    </>
  );
}
