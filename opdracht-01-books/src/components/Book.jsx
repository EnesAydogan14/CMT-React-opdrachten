import { useState } from "react";

const Book = ({ title, description, images }) => {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);

  const verhoogTeller = () => {
    setAantalKeerGelezen((prev) => prev + 1);
  };

  return (
    <section className="book-container">
      <h2>{title}</h2>
      <p>{description}</p>

      
      <img
        className="book-image"
        src={images}
        alt={title}
        onError={(e) => (e.target.src = "/fallback.jpg")}
      />

      <button onClick={verhoogTeller}>Verhoog teller</button>

      <p>Aantal keer gelezen: {aantalKeerGelezen}</p>
    </section>
  );
};

export default Book;