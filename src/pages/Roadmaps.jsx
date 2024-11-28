import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useRoadmapsContext } from "../context/RoadmapsContext";

const Roadmaps = () => {
  const { profile } = useAuth();
  const { roadmaps } = useRoadmapsContext();

  return (
    <div className="max-w-7xl space-y-2 text-lg sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Explore our business roadmaps</h1>
      <p>
        We have a wide range of roadmaps to help you on your entrepreneurial
        journey.
      </p>
      <p>
        Click on a roadmap to get started and unlock the potential of your
        business.
      </p>
      <div>
        <h2 className="text-2xl font-bold">Business Roadmaps</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
          {roadmaps.map((roadmap) => (
            <Link
              key={roadmap.id}
              to={`/dashboard/roadmaps/${roadmap.id}`}
              className="block rounded-lg border border-gray-300 p-4 hover:bg-gray-100"
            >
              <h3 className="text-lg font-semibold">{roadmap.title}</h3>
              <p>{roadmap.description}</p>
            </Link>
          ))}
          {/* <Link
            to="/dashboard/roadmaps/1"
            className="block rounded-lg border border-gray-300 p-4 hover:bg-gray-100"
          >
            <h3 className="text-lg font-semibold">Roadmap 1</h3>
            <p>Description of Roadmap 1</p>
          </Link>
          <Link
            to="/dashboard/roadmaps/2"
            className="block rounded-lg border border-gray-300 p-4 hover:bg-gray-100"
          >
            <h3 className="text-lg font-semibold">Roadmap 2</h3>
            <p>Description of Roadmap 2</p>
          </Link>
          <Link
            to="/dashboard/roadmaps/3"
            className="block rounded-lg border border-gray-300 p-4 hover:bg-gray-100"
          >
            <h3 className="text-lg font-semibold">Roadmap 3</h3>
            <p>Description of Roadmap 3</p>
          </Link>
          <Link
            to="/dashboard/roadmaps/4"
            className="block rounded-lg border border-gray-300 p-4 hover:bg-gray-100"
          >
            <h3 className="text-lg font-semibold">Roadmap 4</h3>
            <p>Description of Roadmap 4</p>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Roadmaps;
