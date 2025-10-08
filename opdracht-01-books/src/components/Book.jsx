const Book = ({ title, description, images }) => {
    return (  
    <section className="book-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <img className="book-image" src={images} alt={title} />
        </section>
    );
}
 
export default Book;