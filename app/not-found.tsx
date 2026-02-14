export default function NotFound() {
  return (
    <>
      <div className="my-20 flex justify-center flex-col items-center min-h-screen ">
        <h1 className="text-3xl text-center">Upss! Page Not Found</h1>
        <p className="text-sm text-foreground/80 my-2">
          The page you are looking for does not exist
        </p>
      </div>
    </>
  );
}
