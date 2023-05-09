import { useEffect, useState } from "react";
import allMovies from "../data";
import { NavLink } from "react-router-dom";
import odstranDiakritiku from "../components/odstranDiakritiku"

const Movies = () => {
  const [searchingText, setSearchingText] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const moviesAfterFilter = allMovies.filter((oneMovie) => {
      return oneMovie.title.toLowerCase().includes(searchingText.toLowerCase());
    });

    setFilteredMovies(moviesAfterFilter);
  }, [searchingText]);



  return (
    <section>
      <div className="movies-box">
        <form>
          <input
            type="text"
            value={searchingText}
            placeholder="Hledaný film"
            onChange={(event) => setSearchingText(event.target.value)}
          />
        </form>
        <div className="all-movies">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((oneMovie) => {
              const { id, image, title, age, tags, description } = oneMovie;
              return (
                <NavLink
                  key={id}
                  to={`/all-movies/${id}/${odstranDiakritiku(title)}`}
                  className={({ isActive }) =>
                    isActive ? "activeLink one-movie" : "noActiveLink one-movie"
                  }
                >
                  <img src={image} alt="" />
                  <h2>{title}</h2>
                  <p>{age}</p>
                  <p>{tags}</p>
                  <p>{description}</p>
                </NavLink>
              );
            })
          ) : (
            <p>Nic nenalezeno</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Movies;
