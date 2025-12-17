import { useState } from "react";
import Book from "./Book";
import booksData from "../book-data";
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
      setBooks(booksData.filter((book) => book.category === category));
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
        <label>Filter op categorie: </label>
        <select value={selectedCategory} onChange={filterHandler}>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <BookCounter aantal={filteredBooks.length} />

      <div className="books-container">
        {filteredBooks.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            year={book.year}
            pages={book.pages}
            images={book.image}
            category={book.category}
          />
        ))}
      </div>
    </section>
  );
};

export default BookList;
