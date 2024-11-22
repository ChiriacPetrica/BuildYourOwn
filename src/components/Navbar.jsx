import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png";
import Button from "./Button";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // 'login' or 'register'

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType("");
  };
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
        <div className="flex gap-4">
          <Button variant="full" onClick={() => openModal("login")}>
            Log In
          </Button>
          <Button variant="light" onClick={() => openModal("register")}>
            Register
          </Button>
        </div>
        {modalOpen && (
          <Modal onClose={closeModal}>
            {modalType === "login" ? (
              <LoginForm setModalType={setModalType} />
            ) : (
              <RegisterForm setModalType={setModalType} />
            )}
          </Modal>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
