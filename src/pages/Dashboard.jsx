import Logo from "../assets/logo.png";

import { Outlet, useNavigate } from "react-router-dom";
// import { FaHome, FaMap, FaLightbulb } from "react-icons/fa";
// import { FaPeopleGroup } from "react-icons/fa6";

import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";
import { useRoadmapsContext } from "../context/RoadmapsContext";

const Dashboard = () => {
  const { calculateTotalXP } = useRoadmapsContext();
  const { profile, logout } = useAuth();
  const navigate = useNavigate();

  const total = calculateTotalXP();

  const level = Math.floor(total / 2000);

  const rest = Math.floor(total % 2000);

  const percent = (rest * 100) / 2000;

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };
  // console.log(total);

  return (
    <div className="grid h-screen grid-cols-[auto_1fr] overflow-hidden bg-slate-800 text-xl text-white">
      <aside className="overlflow-auto flex flex-col gap-6 border-r border-slate-700 px-8 pb-12 pt-0">
        <div>
          <img src={Logo} alt="Build Your Own Logo" className="h-48" />
        </div>
        {/* <nav>
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
        </nav> */}
        <div className="flex flex-col items-center justify-between gap-4">
          {/* <pre>{user}</pre> */}
          <h3>{profile?.username}</h3>
          <h4>Points: {total || 0}</h4>
          <h4>Level {level}</h4>
          <progress value={rest} max="2000"></progress>
          <span>{percent}%</span>
          <div className="max-w-40 overflow-hidden rounded-full">
            <img src={profile?.avatar_url} alt="" className="block w-full" />
          </div>
          <Button variant="full" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </aside>
      <main className="overflow-y-auto px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <Outlet />
        </div>
      </main>
      {/* <div className="space-y-4 border-l border-slate-700 px-8 py-12">
        <h1>{user?.user_metadata?.display_name}</h1>
        <p>{user?.email}</p>
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
      </div>{" "}
      */}
    </div>
  );
};

export default Dashboard;
