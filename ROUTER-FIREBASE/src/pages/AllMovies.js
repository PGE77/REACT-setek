import { projectFirestore } from "../firebase/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const AllMovies = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = projectFirestore.collection("movies").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("Žádné filmy k vypsání");
          setData([]);
        } else {
          let result = [];
          snapshot.docs.forEach((oneMovie) => {
            result.push({ id: oneMovie.id, ...oneMovie.data() });
          });

          setData(result);
        }
      },
      (err) => {
        setError(err.message);
      }
    );
    //   .catch((err) => {
    //     console.log(err.message);
    //   });

    return () => {
      unsubscribe();
    };
  }, []);

  const deleteMovie = (id) => {
    projectFirestore.collection("movies").doc(id).delete();
  };

  return (
    <section>
      {error && <p>{error}</p>}
      {data.map((oneMovie) => {
        const { id, title} = oneMovie;
        return (
          <div key={id} className="one-movie">
            <h2>{title}</h2>
           
            <Link to={`/one-movie/${id}`}>Více informací</Link>
            <button onClick={() => deleteMovie(id)} type="button">
              Smazat film
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default AllMovies;
