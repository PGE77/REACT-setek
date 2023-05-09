import { useParams, Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";
import { useState, useEffect } from "react";

const OneMovie = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    projectFirestore
      .collection("movies")
      .doc(movieId)
      .get()
      .then((document) => {
        if (document.exists) {
          setData(document.data());
          console.log(document.data())
        } else {
          setError("Nenašli jsme tento film");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [movieId]);

  return (
    <section className="one-movie-section">
      {error && <p>{error}</p>}
      <h1>{data.title}</h1>
      <p>{data.minage}</p>
      <p>{data.time}</p>
      <Link to="/all-movies/">Zpět na seznam filmů</Link>
    </section>
  );
};

export default OneMovie;
