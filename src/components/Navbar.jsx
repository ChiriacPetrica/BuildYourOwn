import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="p-4 transition duration-300 ease-in-out">
      <div className="mx-auto flex w-9/12 items-center justify-between">
        <div>
          <a to="/main">
            <img
              src={Logo}
              alt="Build Your Own Logo"
              className="h-12 w-12 text-xl transition duration-300 ease-in-out"
            />
          </a>
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
            <a
              to="/support"
              className="text-white transition duration-300 ease-in-out hover:text-blue-500"
            >
              Support
            </a>
          </li>
          <li>
            <a
              to="/about"
              className="text-white transition duration-300 ease-in-out hover:text-blue-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              to="/newsletter"
              className="text-white transition duration-300 ease-in-out hover:text-blue-500"
            >
              Newsletter
            </a>
          </li>
          <li>
            <a
              to="/contact"
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
