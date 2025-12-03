import Book from "./book";
import { useState } from "react";
import booksData from "../book-data.js/"; 
import BookCounter from "./BookCounter";

const BookList = () => {
  
  const [books, setBooks] = useState(booksData);

  
  const [searchInput, setSearchInput] = useState("");

  
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  
  const categories = [
    "Alle",
    "Fantasy",
    "Avontuur",
    "Sciencefiction",
    "Thriller",
    "Romance",
  ];

  
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  
  const filterHandler = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === "Alle") {
      
      setBooks(booksData);
    } else {
      
      const filteredByCategory = booksData.filter(
        (book) => book.category === category
      );
      setBooks(filteredByCategory);
    }
  };


  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <section className="book-list">
      <h2>Book List</h2>

      
      <div className="search">
        <input
          type="text"
          placeholder="Zoek op titel..."
          value={searchInput}
          onChange={handleSearchChange}
        />
      </div>

      
      <div className="filter">
        <label htmlFor="category">Filter op categorie: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={filterHandler}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      
      <BookCounter aantal={filteredBooks.length} />

      
      {filteredBooks.map((book) => (
        <Book
          key={book.id}
          className={`book${book.id}`}
          title={book.title}
          description={book.author}
          images={book.image}
          category={book.category} 
        />
      ))}
    </section>
  );
};

export default BookList;
