import { useParams, Link, Navigate } from "react-router-dom";
import movies from "../data";
import odstranDiakritiku from "./odstranDiakritiku";
const OneMovie = () => {
  console.log(useParams());



  const { movieId, category } = useParams();
  const oneSpecificMovie = movies.find((oneMovie) => {
    return oneMovie.id === parseInt(movieId);
  });

  const oneSpecificMovieCategory = movies.find((oneMovie) => {
    return odstranDiakritiku(oneMovie.title) === odstranDiakritiku(category);
  });

  if (oneSpecificMovie === undefined) {
    return <Navigate to="/error" />;
  }

  if (oneSpecificMovieCategory === undefined) {
    return <Navigate to="/error" />;
  }

  console.log(oneSpecificMovieCategory);

  console.log(oneSpecificMovie);
  const { image, title, description, tags } = oneSpecificMovie;

  return (
    <section className="single">
      <aside>
      <img src={image} alt="" />
      </aside>
      <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{tags}</p>
      <Link to="/movies">Zpět na všechny filmy</Link>
      </article>
    </section>
  );
};

export default OneMovie;
