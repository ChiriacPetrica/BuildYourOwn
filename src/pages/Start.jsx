import { useAuth } from "../context/AuthContext";

const Start = () => {
  const { user } = useAuth();

  return <div>Welcome to dashboard, {user.username}</div>;
};

export default Start;
