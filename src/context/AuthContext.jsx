import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to handle login with email and password
  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data.user;
  };

  // Function to handle sign up
  const signUp = async (email, password, username) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    await supabase
      .from("profiles")
      .update({ username: username })
      .eq("user_id", data.user.id)
      .select();

    return data.user;
  };

  // Function to handle logout
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const fetchUserProfile = async (userId) => {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("user_id", userId)
      .single();

    if (error) {
      console.error("Error fetching user profile:", error.message);
      return null;
    }

    return data;
  };

  // Function to get the current user
  const fetchUser = async () => {
    const { data } = await supabase.auth.getSession();
    const sessionUser = data.session?.user ?? null;

    if (sessionUser) {
      setUser(sessionUser);

      // Fetch user profile
      const profileData = await fetchUserProfile(sessionUser.id);
      setProfile(profileData);
    } else {
      setUser(null);
      setProfile(null);
    }
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      const sessionUser = session?.user ?? null;
      setUser(sessionUser);

      // If the sessionUser exists, fetch profile data
      if (sessionUser) {
        fetchUserProfile(sessionUser.id).then(setProfile);
      } else {
        setProfile(null);
      }
    });

    // Fetch user session and profile on initial load
    fetchUser().finally(() => setLoading(false));

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const value = {
    user,
    loading,
    login,
    signUp,
    logout,
    profile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
