import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    setTimeout(() => navigate("/"), 3000);
    return (
      <div className="flex h-screen items-center justify-center">
        <p>
          You must be logged in to access this page. Redirecting to login
          page...
        </p>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
