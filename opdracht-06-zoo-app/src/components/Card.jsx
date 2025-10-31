import { useNavigate } from "react-router-dom";

const Card = ({ animal }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/detail/${animal.id}`)}
      className="cursor-pointer bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition duration-200"
    >
      <img
        src={animal.imageUrl}
        alt={animal.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-xl font-semibold mt-3">{animal.name}</h2>
      <p className="text-gray-600 text-sm mt-1 line-clamp-2">
        {animal.description}
      </p>
    </div>
  );
};

export default Card;