import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="px-4 transition duration-300 ease-in-out">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div>
          <Link to="/">
            <img
              src={Logo}
              alt="Build Your Own Logo"
              className="h-24 w-24 text-xl transition duration-300 ease-in-out"
            />
          </Link>
        </div>

        <ul className="flex items-center gap-4">
          <li>
            <a
              href="#about"
              className="text-white transition duration-300 ease-in-out hover:text-blue-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-white transition duration-300 ease-in-out hover:text-blue-500"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#newsletter"
              className="text-white transition duration-300 ease-in-out hover:text-blue-500"
            >
              Newsletter
            </a>
          </li>
          <li>
            <a
              href="#footer"
              className="text-white transition duration-300 ease-in-out hover:text-blue-500"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
