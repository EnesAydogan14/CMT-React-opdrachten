import { useState } from "react";

const Book = ({ title, description, images, category }) => {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
  const [liked, setLiked] = useState(false); 

  const verhoogTeller = () => {
    setAantalKeerGelezen((prev) => prev + 1);
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <section className="book-container">
      <h2>{title}</h2>
      <p>{description}</p>

      <p><strong>Categorie:</strong> {category}</p>

      <img className="book-image" src={images} alt={title} />

      <div className="favorite-section">
        <button onClick={toggleLike}>
          {liked ? "❤️" : "🤍"}
        </button>

        {liked && (
          <p className="favorited-text">Toegevoegd aan favorieten</p>
        )}
      </div>

      <button onClick={verhoogTeller}>Verhoog teller</button>
      <p>Aantal keer gelezen: {aantalKeerGelezen}</p>
    </section>
  );
};

export default Book;
