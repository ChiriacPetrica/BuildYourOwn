import { useAuth } from "../context/AuthContext";

const Start = () => {
  const { user } = useAuth();

  return <div>Welcome to dashboard, {user?.user_metadata.display_name}</div>;
};

export default Start;
