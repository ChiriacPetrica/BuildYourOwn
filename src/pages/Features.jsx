import { BiCustomize } from "react-icons/bi";
import { GrResources } from "react-icons/gr";
import { MdOutlineLeaderboard } from "react-icons/md";
import { VscMilestone } from "react-icons/vsc";

const Features = () => {
  return (
    <section id="features">
      <div className="mx-auto max-w-7xl space-y-8 rounded-xl bg-cyan-50/75 px-4 py-12 text-center">
        <h1 className="text-4xl font-bold uppercase text-cyan-950">
          More than just a tool
        </h1>
        <h1 className="text-xl text-cyan-950">
          Explore what else we can do for you
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="space-y-4 rounded-xl bg-white px-6 py-12 text-center shadow-md transition-all duration-300 hover:scale-105">
            <BiCustomize size={48} className="mx-auto text-blue-500" />
            <h2 className="font-bold text-gray-900">Customizable Roadmaps</h2>
            <p>
              Choose your business type, and get a roadmap with step-by-step
              guidance.
            </p>
          </div>
          <div className="space-y-4 rounded-xl bg-white px-6 py-12 text-center shadow-md transition-all duration-300 hover:scale-105">
            <VscMilestone size={48} className="mx-auto text-amber-500" />
            <h2 className="font-bold text-gray-900">Milestone Rewards</h2>
            <p>
              Track your progress, unlock badges for completed steps, and stay
              motivated.
            </p>
          </div>
          <div className="space-y-4 rounded-xl bg-white px-6 py-12 text-center shadow-md transition-all duration-300 hover:scale-105">
            <GrResources size={48} className="mx-auto text-green-500" />
            <h2 className="font-bold text-gray-900">Guides & Resources</h2>
            <p>
              Access practical tips, tutorials, and case studies at each stage.
            </p>
          </div>
          <div className="space-y-4 rounded-xl bg-white px-6 py-12 text-center shadow-md transition-all duration-300 hover:scale-105">
            <MdOutlineLeaderboard size={48} className="mx-auto text-cyan-500" />
            <h2 className="font-bold text-gray-900">
              Community & Leaderboards
            </h2>
            <p>
              Connect with other entrepreneurs and track your rank for added
              motivation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
