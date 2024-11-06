import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="grid h-screen place-content-center space-y-4">
      <h1 className="text-5xl font-bold">Page Not Found</h1>
      <p className="text-lg">
        404 - The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="block max-w-max rounded-full bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
