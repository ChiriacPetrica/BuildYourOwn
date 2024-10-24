import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gray-800 p-4 transition duration-300 ease-in-out">
      <div>
        <Link to="/dashboard">
          <p className="h-8 text-xl transition duration-300 ease-in-out hover:scale-110">
            🚨
          </p>
        </Link>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link
              to="/support"
              className="text-white transition duration-300 ease-in-out hover:text-blue-500"
            >
              Support
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white transition duration-300 ease-in-out hover:text-blue-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/test"
              className="text-white transition duration-300 ease-in-out hover:text-blue-500"
            >
              TestPR
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
