import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const RegisterForm = ({ setModalType }) => {
  const { signUp } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [registerError, setRegisterError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password, username);
      toast.loading("Creating your account...", {
        duration: 2000,
        icon: "⌛",
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast("Your account has been created! Please login.", {
        duration: 3000,
        icon: "✅",
      });
      setModalType("login");
    } catch (error) {
      setRegisterError(error.message);
    }
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} gutter={8} />
      {registerError && <p className="mb-4 text-red-500">{registerError}</p>}
      <form className="space-y-4" onSubmit={handleRegister}>
        <h2 className="text-center text-2xl font-semibold">Register</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border p-2 focus:border-blue-600 focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full rounded-md border p-2 focus:border-blue-600 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full rounded-md border p-2 focus:border-blue-600 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 p-2 text-white"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
