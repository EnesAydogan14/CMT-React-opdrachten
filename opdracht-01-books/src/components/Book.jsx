import { useState } from "react";

const Book = ({ id, title, author, description, images, category, year, pages }) => {
  const [liked, setLiked] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const verhoogTeller = (e) => {
    e.stopPropagation();
    setAantalKeerGelezen((prev) => prev + 1);
  };

  return (
    <article
      className={`book book${id} ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="book-inner">

        <div className="book-front">
          <h2>{title}</h2>
          <p><strong>Auteur:</strong> {author}</p>
          <p><strong>Categorie:</strong> {category}</p>

          <img className="book-image" src={images} alt={title} />

          <div className="favorite-section">
            <button onClick={toggleLike}>
              {liked ? "❤️" : "🤍"}
            </button>
            {liked && <p className="favorited-text">Toegevoegd aan favorieten</p>}
          </div>

          <button onClick={verhoogTeller}>Verhoog teller</button>
          <p>Aantal keer gelezen: {aantalKeerGelezen}</p>
        </div>

     
        <div className="book-back">
          <h2>Details</h2>
          <p><strong>Publicatiejaar:</strong> {year}</p>
          <p><strong>Pagina's:</strong> {pages}</p>
          <p>{description}</p>
          <p className="back-hint">Klik om terug te gaan</p>
        </div>
      </div>
    </article>
  );
};

export default Book;
