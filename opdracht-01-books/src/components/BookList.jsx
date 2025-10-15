import Book from "./book";
import {useState} from 'react';
import data from "../book-data.js/";
import BookCounter from "./BookCounter";

const BookList = () => {
    const [books, setBooks] = useState(data);
    console.log(books);

    return (
        <section className="book-list">
            <h2>Book List</h2>
            <BookCounter aantal={books.length} />
            {books.map((book) => (
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
}


export default BookList;