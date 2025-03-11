import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen w-full bg-zinc-900 text-white mx-auto px-6 py-10">
      <div className="max-w-4xl mx-auto">
    <div className="flex flex-col items-center justify-start min-h-screen pt-20">
      <h1 className="text-4xl font-bold mb-8">404 - Page Not Found</h1>
      <p className="mb-6">Oops! The page you’re looking for doesn’t exist.</p>
    <Link to="/" className="underline">Go Home</Link>

    </div>
    </div>
    </div>
  );
}

export default NotFound;
