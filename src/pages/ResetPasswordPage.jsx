import { useState } from "react";
import { supabase } from "../supabase/supabaseClient";

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { data, error } = await supabase.auth.updateUser({
        password: newPassword,
      });
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="grid h-screen place-content-center bg-blue-400">
      <form
        className="relative w-11/12 max-w-md space-y-4 rounded-md bg-white p-6 shadow-lg"
        onSubmit={handleResetPassword}
      >
        <h2 className="text-center text-2xl font-semibold">Reset Password</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            New password
          </label>
          <input
            type="email"
            id="email"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Confirm password
          </label>
          <input
            type="email"
            id="email"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
    </div>
  );
};

export default ResetPasswordPage;
