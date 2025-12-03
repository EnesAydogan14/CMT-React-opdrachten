import { useState } from "react";
import animals from "../animals";
import Card from "../components/Card";

const HomePage = () => {
  const [searchInput, setSearchInput] = useState("");

  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">
        🦓 Dieren in de Zoo
      </h1>


      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Zoek een dier..."
          className="w-full p-3 border rounded-lg shadow-sm"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredAnimals.map((animal) => (
          <Card key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;