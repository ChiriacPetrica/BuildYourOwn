import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient";

function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "PASSWORD_RECOVERY" && session) {
          setIsAuthenticated(true);
          setMessage("Session restored. You can now update your password.");
        }
      },
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const handlePasswordUpdate = async () => {
    if (!isAuthenticated) {
      setMessage(
        "No valid session found. Please request a new password reset link.",
      );
      return;
    }

    if (!password) {
      setMessage("Password cannot be empty.");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMessage("Error updating password: " + error.message);
    } else {
      setMessage("Password updated successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 3000);
    }
  };

  return (
    <div>
      <h2>Reset Your Password</h2>
      {message && <p>{message}</p>}
      {isAuthenticated ? (
        <>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handlePasswordUpdate}>Update Password</button>
        </>
      ) : (
        <p>Validating session...</p>
      )}
    </div>
  );
}

export default ResetPasswordPage;
