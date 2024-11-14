import { useParams } from "react-router-dom";

const Roadmap = () => {
  const id = useParams().id;
  return <div>Roadmap {id}</div>;
};

export default Roadmap;
