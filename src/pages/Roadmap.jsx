import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import useRoadmaps from "../hooks/useRoadmaps";
// import { useState,useEffect } from "react";
import { useRoadmapsContext } from "../context/RoadmapsContext";

const Roadmap = () => {
  const {roadmaps,updateTaskStatus} = useRoadmapsContext();

  const navigate = useNavigate();
  const id = useParams().id;

  const roadmap = roadmaps.find(r=>r.id===parseInt(id));


  console.log(roadmaps[id-1]);
  

  return (
    <div>
    
        <button
        onClick={() => navigate(-1)}
        className="text-gray-500 hover:text-gray-200"
        >
        <RiArrowGoBackLine />
      </button>
      <h1>Roadmap {id}</h1>
      { roadmap && (        
        <div className="border-2 border-red-500 p-2">
        <h2>{roadmap.title}</h2>
        <p>{roadmap.description}</p>
        <p>
          <strong>Obiective:</strong> {roadmap.objective}
        </p>
        <p>
          <strong>Total XP:</strong> {roadmap.totalXP}
        </p>
        <div>
        <h3>Quests</h3>
        <ul className="border-2 border-red-500 p-2" >
          {roadmap.quests.map((quest) => (
            <li key={quest.id}>
              <h4>{quest.title}</h4>
              <p>{quest.objective}</p>
              <p>XP: {quest.xp}</p>
              <h5>Tasks:</h5>
              <ul className="border-2 border-red-500 p-2" >
                {quest.tasks.map((task) => (
                  <li key={task.id} className="border-2 border-red-500 p-2" >
                    <strong>{task.title}</strong>
                    <p>{task.description}</p>
                    <p>XP: {task.xp}</p>
                    <p>
                      <strong>Objective:</strong> {task.objective}
                    </p>
                    <p>
                      <strong>Documents Required:</strong>{" "}
                      {task.documentsRequired.join(", ")}
                    </p>
                    <p>
                      <strong>Location:</strong> {task.location}
                    </p>
                    <label htmlFor={`${id}-${quest.id}-${task.id}`} className="cursor-pointer" >
                    <input id={`${id}-${quest.id}-${task.id}`} type="checkbox" checked={task.isDone} className="mr-4" onChange={() => updateTaskStatus(roadmap.id,quest.id, task.id)} />
                    Am completat
                    </label>
                    <pre>is done: {task.isDone.toString()}</pre>
                  </li>
                ))}
              </ul>
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
