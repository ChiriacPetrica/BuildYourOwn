import { useAuth } from "../context/AuthContext";

const Start = () => {
  const { profile } = useAuth();

  return <div>Welcome to dashboard, {profile?.username}</div>;
};

export default Start;
