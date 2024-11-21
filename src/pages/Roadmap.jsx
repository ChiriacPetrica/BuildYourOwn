import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import useRoadmaps from "../hooks/useRoadmaps";
// import { useState,useEffect } from "react";
import { useRoadmapsContext } from "../context/RoadmapsContext";

const Roadmap = () => {
  const { roadmaps, updateTaskStatus } = useRoadmapsContext();

  const navigate = useNavigate();
  const id = useParams().id;

  const roadmap = roadmaps.find((r) => r.id === parseInt(id));

  console.log(roadmaps[id - 1]);

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="text-gray-500 hover:text-gray-200"
      >
        <RiArrowGoBackLine />
      </button>
      <h2>Roadmap {id}</h2>
      {roadmap && (
        <div className="p-4 space-y-4">
          <h1 className="text-3xl font-bold" >{roadmap.title}</h1>
          <p>{roadmap.description}</p>
          <p>
            <strong>Obiective:</strong> {roadmap.objective}
          </p>
          <p>
            <strong>Total XP:</strong> {roadmap.totalXP}
          </p>
          <div>
            <h3 className="font-bold text-2xl">Misiuni:</h3>
            <ul className=" space-y-4 py-2 bg-slate-800 rounded-lg">
              {roadmap.quests.map((quest) => (
                <li key={quest.id} className="space-y-4">
                  <details>
                    <summary className="cursor-pointer font-bold">
                      <span className="text-2xl" >{quest.title}</span>
                    </summary>
                    <div className="space-y-4">
                  <p>{quest.objective}</p>
                  <p>XP: {quest.xp}</p>
                  <h5>Pași:</h5>
                  <ul className=" py-2">
                    {quest.tasks.map((task) => (
                      <li key={task.id} className=" py-4">
                        <details>
                          <summary className="cursor-pointer font-bold">
                            <strong>{task.title}</strong>
                          </summary>
                          <div className="ml-4 mt-2 space-y-4">
                            <p>{task.description}</p>
                            <p>Puncte de experiență: {task.xp}</p>
                            <p>
                              <strong>Obiective:</strong> {task.objective}
                            </p>
                            <p>
                              <strong>Documente necesare:</strong>{" "}
                              {task.documentsRequired.join(", ")}
                            </p>
                            <p>
                              <strong>Location:</strong> {task.location}
                            </p>
                            <label
                              htmlFor={`${id}-${quest.id}-${task.id}`}
                              className="cursor-pointer flex items-center"
                              >
                              <input
                                id={`${id}-${quest.id}-${task.id}`}
                                type="checkbox"
                                checked={task.isDone}
                                className="mr-4 w-5 h-5"
                                onChange={() =>
                                  updateTaskStatus(
                                    roadmap.id,
                                    quest.id,
                                    task.id,
                                  )
                                }
                                />
                              Am terminat
                            </label>
                          </div>
                        </details>
                      </li>
                    ))}
                  </ul>
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roadmap;
