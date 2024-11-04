import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="p-4 transition duration-300 ease-in-out">
      <div className="mx-auto flex w-9/12 items-center justify-between">
        <div>
          <a href="#footer">
            <img
              src={Logo}
              alt="Build Your Own Logo"
              className="h-12 w-12 text-xl transition duration-300 ease-in-out"
            />
          </a>
        </div>

        <ul className="flex items-center gap-4">
          <li>
            <a
              href="/support"
              className="text-white transition duration-300 ease-in-out hover:text-blue-500"
            >
              Support
            </a>
          </li>
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
