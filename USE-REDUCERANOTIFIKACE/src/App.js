import Modal from "./components/Modal";
// import data from "./data";
import { useState, useReducer } from "react";

const reducer = (state, action) => {
  const newMovies = [...state.movies, action.payload];

  if (action.type === "ADD_MOVIE") {
    return {
      ...state,
      movies: newMovies,
      showNotification: true,
      notificationContent: "Film byl přidán",
    };
  }

  if (action.type === "NO_MOVIE_NAME") {
    return {
      ...state,
      showNotification: true,
      notificationContent: "Neby zadaný název filmu",
    };
  }

  if (action.type === "CLOSE_NOTIFICATION") {
    return {
      ...state,
      showNotification: false,
    };
  }

  if (action.type === "REMOVE_MOVIE") {
    const filteredMovies = state.movies.filter((oneMovie) => {
      return oneMovie.id !== action.payload;
    });

    return {
      ...state,
      movies: filteredMovies,
    };
  }


  return new Error("Chyba, žádná shoda s action Type");
  // return state;
};

const defaultState = {
  movies: [],
  showNotification: false,
  notificationContent: "",
  
};

const App = () => {
  // const [movies, setMovies] = useState(data);
  // const [showNotification, setShowNotification] = useState(false);
  // nahradíme useReducer

  const [movieName, setMovieName] = useState("");

  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitForm = (event) => {
    event.preventDefault();

    if (movieName) {
      const newMovie = { id: new Date().getTime(), name: movieName };
      dispatch({ type: "ADD_MOVIE", payload: newMovie });
     
    } else {
      dispatch({ type: "NO_MOVIE_NAME" });
    }
 
   setMovieName("");
    
  };

  const closeNotification = () => {
    dispatch({ type: "CLOSE_NOTIFICATION" });
  };

  return (
    <section className="form">
      {state.showNotification && (
        <Modal
          notifContent={state.notificationContent}
          closeNotif={closeNotification}
        />
      )}

      <form onSubmit={submitForm}>
        <input
          type="text"
          value={movieName}
          onChange={(event) => {
            setMovieName(event.target.value);
          }}
        />
        <input type="submit" value="Přidat" />
      </form>
      <div>
        {state.movies.map((oneMovie) => {
          const { id, name } = oneMovie;

          return (
            <div key={id} className="all-movies">
              <p>{name}</p>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_MOVIE", payload: oneMovie.id })
                }
              >
                Smazat
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default App;
