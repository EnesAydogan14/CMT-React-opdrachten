const Movie = ({ title, image, description }) => {
    return ( 
        <section className="movie-container">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
     );
}
 
export default Movie;