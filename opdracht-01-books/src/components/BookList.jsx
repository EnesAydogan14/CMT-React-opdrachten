import Book from "./book";

const BookList = () => {
    return (
        <section className="book-list">
            <h2>Book List</h2>
         <Book className="book1" title="power" description="k.k rowlings" images='./images/book-1.png'/>
      <Book className="book2" title="pshycology of money" description="morgan housel" images="./images/book-2.png"/>
      <Book className="book3" title="surrounded by idiots" description="suzanne colins" images="./images/book-3.png"/>

        </section>
    );
}
 
export default BookList;