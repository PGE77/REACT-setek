import { useEffect, useState } from "react";
import allMovies from "./data";
import categories from "./categories";
import spinner from "./images/spinner.svg"

const App = () => {
  const [typeOfMovie, setTypeOfMovie] = useState("komedie");
  const [active, setActive] = useState("komedie");
  const [loading, setloading] = useState(false);

  const vysledneFilmy = allMovies.filter((oneMovie) => {
    return oneMovie.category === typeOfMovie;
  });
  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div>
        <div className="all-buttons">
          {categories.map((oneCategory, index) => {
            return (
              <button
                key={index}
                className={`one-button ${active === oneCategory && "active"}`}
                onClick={() => {
                  setTypeOfMovie(oneCategory);
                  setActive(oneCategory);
                 
                }}
              >
                {oneCategory}
              </button>
            );
          })}
        </div>
        <div className="all-movies">
          {vysledneFilmy.map((oneMovie) => {
            const { id, image, title, age, tags, description } = oneMovie;

            return (
              <div className="one-movie" key={id}>
                <img src={image} alt="" />
                <h2>{title}</h2>
                <p>{age}</p>
                <p>{tags}</p>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {

    return <div className="loading">
      <img alt="" src={spinner} />
      </div>

  }
};

export default App;
