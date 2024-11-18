import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Roadmap = () => {
  const navigate = useNavigate();
  const id = useParams().id;
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="text-gray-500 hover:text-gray-200"
      >
        <RiArrowGoBackLine />
      </button>
      <h1>Roadmap {id}</h1>
    </div>
  );
};

export default Roadmap;
