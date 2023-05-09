import MoviesContext from "./MoviesContext";

import { useContext } from "react";

const Movies = ({ /*data2 , deleteMovie*/ }) => {
  const {deleteMovie, movies} = useContext(MoviesContext);
 
 
  return (
    <div>
      {movies.map((oneMovie) => {
        const { id, name } = oneMovie;
        return (
          <div key={id}>
            <p>{name}</p>
            <button onClick={() => deleteMovie(id)}>Smazat</button>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
