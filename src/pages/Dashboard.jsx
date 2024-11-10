import Logo from "../assets/logo.png";

import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { supabase } from "../supabase/supabaseClient";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        navigate("/");
      } else {
        setUser(data.user);
      }
    };

    fetchCurrentUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="grid h-screen grid-cols-[auto_1fr_auto] bg-slate-800 text-xl text-white">
      <aside className="flex flex-col gap-6 border-r border-slate-700 px-8 py-12">
        <div>
          <img src={Logo} alt="Build Your Own Logo" className="h-48" />
        </div>
        <nav>
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink
                className="flex items-center gap-2 rounded-md px-4 py-2 text-slate-400"
                to={"/dashboard/start"}
              >
                <FaHome />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-2 rounded-md px-4 py-2 text-slate-400"
                to={"/dashboard/users"}
              >
                <FaUser />
                <span>Users</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <Outlet />
        </div>
      </main>
      <div className="space-y-4 border-l border-slate-700 px-8 py-12">
        <h1>{user?.user_metadata?.display_name}</h1>
        <p>{user?.email}</p>

        <button
          onClick={handleLogout}
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
