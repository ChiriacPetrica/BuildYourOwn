import Logo from "../assets/logo.png";

import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaMap, FaLightbulb } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { profile, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
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
                to={"/dashboard/roadmaps"}
              >
                <FaMap />
                <span>Roadmaps</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-2 rounded-md px-4 py-2 text-slate-400"
                to={"/dashboard/resources"}
              >
                <FaLightbulb />
                <span>Resources</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex items-center gap-2 rounded-md px-4 py-2 text-slate-400"
                to={"/dashboard/community"}
              >
                <FaPeopleGroup />
                <span>Community</span>
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
        <h1>{profile?.username}</h1>
        <p>{profile?.total_xp}</p>
        <img src={profile?.avatar_url} className="h-48" />

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
