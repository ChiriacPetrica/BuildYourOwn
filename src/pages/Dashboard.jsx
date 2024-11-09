import { Outlet, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const Dashbboard = () => {
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
      <div className="border-l border-slate-700 px-8 py-12">
        <aside className="flex flex-col gap-4 px-8 py-12">
          <h2 className="text-2xl font-semibold">Account</h2>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Username</p>
            <p className="text-slate-500">user123</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Password</p>
            <p className="text-slate-500">********</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashbboard;
