import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthMessage from "./AuthMessage";

const LoginForm = ({ setModalType }) => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <>
      {loginError && <p className="mb-4 text-red-500">{loginError}</p>}
      <form className="space-y-4" onSubmit={handleLogin}>
        <h2 className="text-center text-2xl font-semibold">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 p-2 text-white transition-all duration-300 hover:bg-blue-800"
        >
          Log In
        </button>
        <div className="text-center">
          <p
            className="cursor-pointer text-blue-500 transition-all duration-300 hover:text-blue-700 hover:underline"
            onClick={() => setModalType("resetPassword")}
          >
            Forgot Password?
          </p>
        </div>
        <AuthMessage
          message="Don't have an account?"
          actionText="Register"
          onActionClick={() => setModalType("register")}
        />
      </form>
    </>
  );
};

export default LoginForm;
