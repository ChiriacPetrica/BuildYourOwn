import { useState } from "react";
import { supabase } from "../supabase/supabaseClient";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      let { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo:
          "https://chiriacpetrica.github.io/BuildYourOwn/reset-password",
      });
      console.log(data);
      if (error) throw error;
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      {error && <p className="mb-4 text-red-500">{error.message}</p>}
      <form className="space-y-4" onSubmit={handleResetPassword}>
        <h2 className="text-center text-2xl font-semibold">Reset Password</h2>
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

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 p-2 text-white"
        >
          Reset Password
        </button>
      </form>
    </>
  );
};

export default ResetPassword;
