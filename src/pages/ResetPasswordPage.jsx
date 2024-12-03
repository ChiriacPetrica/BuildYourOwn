import { useState, useEffect } from "react";
import { supabase } from "../supabase/supabaseClient";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = window.location.href;
    const urlSearchParams = url.split("#")[2];
    const urlParams = new URLSearchParams(urlSearchParams);
    const accessToken = urlParams.get("access_token");
    const refreshToken = urlParams.get("refresh_token");

    if (accessToken) {
      supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    } else {
      navigate("/");
    }
  }, []);

  const navigate = useNavigate();

  const handlePasswordReset = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match. Please try again.");
      return;
    }
    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Password updated successfully! You can now log in.");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    setLoading(false);
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} gutter={8} />
      <div className="flex h-screen flex-col items-center justify-center bg-blue-300">
        <div className="flex w-96 flex-col space-y-3 rounded-lg bg-white p-6">
          <div className="text-center"></div>
          <h2 className="text-center text-2xl font-semibold">Reset Password</h2>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full rounded-md border border-gray-400 p-2"
              id="password"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              placeholder="New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-md border border-gray-400 p-2"
              id="confirmPassword"
            />
          </div>
          <button
            onClick={handlePasswordReset}
            disabled={loading}
            className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-all duration-300 hover:bg-blue-700"
          >
            {loading ? "Reseting..." : "Reset Password"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
