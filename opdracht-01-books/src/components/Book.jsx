import {useState} from "react";

const Book = ({ title, description, images }) => {
     const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
     function verhoogTeller() {
         setAantalKeerGelezen(aantalKeerGelezen + 1);
     }
    return (  
    <section className="book-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <img className="book-image" src={images} alt={title} />
        <button onClick={verhoogTeller}>Verhoog teller</button>
        <p>Aantal keer gelezen: {aantalKeerGelezen}</p>
        </section>
    );
}
 
export default Book;