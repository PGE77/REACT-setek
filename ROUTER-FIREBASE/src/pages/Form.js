import { projectFirestore } from "../firebase/config";
import { useState } from "react";

const Form = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieAge, setMovieAge] = useState("");
  const [movieTime, setMovieTime] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();
    const newMovie = { title: movieTitle, minage: parseInt(movieAge), time: parseInt(movieTime) };
    try {
      await projectFirestore.collection("movies").add(newMovie);
      setMovieTitle("");
      setMovieAge("");
      setMovieTime("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <section className="form-section">
        <h1>Přidání filmu</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Title"
          value={movieTitle}
          onChange={(event) => setMovieTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Minimální věk"
          min="1"
          value={movieAge}
          onChange={(event) => setMovieAge(event.target.value)}
        />
        <input
          type="number"
          placeholder="Čas"
          min="1"
          value={movieTime}
          onChange={(event) => setMovieTime(event.target.value)}
        />
        <input type="submit" value="Přidat film" />
      </form>
    </section>
  );
};

export default Form;
