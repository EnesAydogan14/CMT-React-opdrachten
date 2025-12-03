import Book from "./book";
import { useState } from "react";
import data from "../book-data.js/";
import BookCounter from "./BookCounter";

const BookList = () => {
  const [books] = useState(data);               
  const [searchInput, setSearchInput] = useState(""); 

  
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <section className="book-list">
      <h2>Book List</h2>

      
      <input
        type="text"
        placeholder="Zoek een titel..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      
      <BookCounter aantal={filteredBooks.length} />

      
      {filteredBooks.map((book) => (
        <Book
          key={book.id}
          className={`book${book.id}`}
          title={book.title}
          description={book.author}
          images={book.image}
        />
      ))}
    </section>
  );
};

export default BookList;