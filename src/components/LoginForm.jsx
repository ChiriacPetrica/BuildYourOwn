import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchUsers from "../hooks/useFetchUsers";

const LoginForm = () => {
  const { users, loading, error } = useFetchUsers();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (loading || error) return;

    const user = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (user) {
      navigate("/dashboard");
    } else {
      setLoginError("Invalid username or password");
    }
  };
  return (
    <>
      {loginError && <p className="mb-4 text-red-500">{loginError}</p>}
      {error && (
        <p className="mb-4 text-red-500">Error loading users: {error}</p>
      )}
      <form className="space-y-4" onSubmit={handleLogin}>
        <h2 className="text-center text-2xl font-semibold">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          className="w-full rounded-md bg-blue-600 p-2 text-white"
        >
          Log In
        </button>
      </form>
    </>
  );
};

export default LoginForm;
