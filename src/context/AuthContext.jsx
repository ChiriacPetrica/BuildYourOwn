import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to handle login with email and password
  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    const { data: profileData } = await supabase
      .from("profiles")
      .select()
      .eq("id", data.user.id)
      .single();

    setUser(profileData);
    return data.user;
  };

  // Function to handle sign up
  const signUp = async (email, password, username) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    await supabase
      .from("profiles")
      .update({ username: username })
      .eq("id", data.user.id)
      .select();

    if (error) throw error;
    return data.user;
  };

  // Function to handle logout
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  // Function to get the current user
  const fetchUser = async () => {
    const { data } = await supabase.auth.getSession();
    setUser(data.session?.user ?? null);
  };

  // Listen to auth state changes
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

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
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
