import { useParams, Link } from "react-router-dom";
import animals from "../animals";

const DetailPage = () => {
  const { id } = useParams();
  const animal = animals.find((a) => a.id === parseInt(id));

  if (!animal) {
    return <p className="p-8 text-center">Dier niet gevonden.</p>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
        <Link to="/" className="text-blue-500 hover:underline">
          ← Terug naar overzicht
        </Link>

        <img
          src={animal.imageUrl}
          alt={animal.name}
          className="w-full h-64 object-cover rounded-xl mt-4"
        />

        <h1 className="text-3xl font-bold mt-4 text-green-800">
          {animal.name}
        </h1>

        <p className="mt-2">
          <span className="font-semibold">Leefgebied:</span> {animal.habitat}
        </p>
        <p className="mt-1">
          <span className="font-semibold">Dieet:</span> {animal.diet}
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          {animal.description}
        </p>
      </div>
    </div>
  );
};

export default DetailPage;