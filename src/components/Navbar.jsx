import { NavLink } from "react-router-dom";

import { useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 p-4 transition duration-300 ease-in-out">
      <div className="mx-auto flex w-9/12 items-center justify-between">
        <div>
          <NavLink to="/main">
            <img
              src={Logo}
              alt="Build Your Own Logo"
              className="h-12 w-12 text-xl transition duration-300 ease-in-out"
            />
          </NavLink>
        </div>

        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold text-white">
            {location.pathname === "/main"
              ? "Build Your Own"
              : location.pathname
                  .slice(1)
                  .replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                    letter.toUpperCase(),
                  )}
          </h1>
        </div>

        <ul className="flex items-center gap-4">
          <li>
            <NavLink
              to="/support"
              className="text-white transition duration-300 ease-in-out hover:text-blue-500"
            >
              Support
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-white transition duration-300 ease-in-out hover:text-blue-500"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className="text-white transition duration-300 ease-in-out hover:text-blue-500"
            >
              Newsletter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-white transition duration-300 ease-in-out hover:text-blue-500"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
