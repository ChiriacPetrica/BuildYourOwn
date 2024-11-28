// import { useState, useEffect } from "react";

// const useFetchUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("/users.json");
//         if (!response.ok) throw new Error("Failed to fetch users");

//         const data = await response.json();
//         setUsers(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return { users, loading, error };
// };

// export default useFetchUsers;

import { useState, useEffect } from "react";

export interface Task {
  id: number;
  title: string;
  description: string;
  xp: number;
  objective: string;
  documentsRequired: string[];
  location: string;
}

export interface Quest {
  id: number;
  title: string;
  xp: number;
  objective: string;
  tasks: Task[];
}

export interface Roadmap {
  id: number;
  title: string;
  description: string;
  objective: string;
  totalXP: number;
  quests: Quest[];
}

const useRoadmaps = () => {
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const response = await fetch("/roadmaps.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch roadmaps: ${response.statusText}`);
        }
        const data = await response.json();
        setRoadmaps(data.roadmaps);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmaps();
  }, []);

  return { roadmaps, loading, error };
};

export default useRoadmaps;
