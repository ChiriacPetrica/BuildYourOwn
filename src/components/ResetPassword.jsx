import { useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import toast from "react-hot-toast";

const ResetPassword = ({ setModalType }) => {
  const [email, setEmail] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo:
        "https://chiriacpetrica.github.io/BuildYourOwn/#/reset-password",
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Password reset email sent successfully.");
    }
  };

  return (
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
        className="w-full rounded-md bg-blue-600 p-2 text-white transition-all duration-300 hover:bg-blue-800"
      >
        Reset Password
      </button>
      <div className="text-center">
        <p
          className="cursor-pointer text-blue-500 transition-all duration-300 hover:text-blue-700 hover:underline"
          onClick={() => setModalType("login")}
        >
          Back to login
        </p>
      </div>
    </form>
  );
};

export default ResetPassword;
