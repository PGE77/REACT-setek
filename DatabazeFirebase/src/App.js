import { projectFirestore } from "./firebase/config";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  // usestate pro formulář
  const [movieTitle, setMovieTitle] = useState("");
  const [movieAge, setMovieAge] = useState("");
  const [movieTime, setMovieTime] = useState("");
  const [title1, setTitle1] = useState("");
  const [age1, setAge1] = useState("");
  const [time1, setTime1] = useState("");
  const [upravitData, setUpravitData] = useState(false);
  const [clickedId, setClickedId] = useState(0);

  useEffect(() => {
    const unsubscripe = projectFirestore.collection("movies").orderBy('title', 'asc').onSnapshot(
      (snapshot) => {
        console.log(snapshot);
        if (snapshot.empty) {
          setError("Žádné filmy k vypsání");
          setData([]);
        } else {
          let result = [];
          snapshot.docs.forEach((oneMovie) => {
            result.push({ id: oneMovie.id, ...oneMovie.data() });
            
          });
          
          setData(result);
          setError("");
        }
      },
      (err) => {
        setError(err.message);
      }
    );

    // .catch((error) => {
    //   setError(error.message);
    // });
    return () => {
      unsubscripe();
    };
  }, []);

  const deleteMovie = (id) => {
    projectFirestore.collection("movies").doc(id).delete();
  };

  const submitForm = async (event) => {
    event.preventDefault();

    if (movieTitle && movieAge && movieTime) {
      const newMovie = {
        title: movieTitle,
        minage: movieAge,
        time: movieTime,
      };

      try {
        await projectFirestore.collection("movies").add(newMovie);
        setMovieTitle("");
        setMovieAge("");
        setMovieTime("");
      } catch (err) {
        setError("Film nebyl přidán " + err.message);
      }

      // console.log(movieTitle);
      // console.log(movieAge);
      // console.log(movieTime);
    } else {
      setError("Nemůžete vyplnit prázdná políčka");
    }
  };

  const updateMovie = (id) => {
    if (title1 && age1 && time1) {
      const newMovie = {
        title: title1,
        minage: age1,
        time: time1,
      };
      projectFirestore
        .collection("movies")
        .doc(id)
        .update(newMovie)
        .then(() => console.log("Post updated successfully!"))
        .catch((error) => console.error("Error updating post:", error));

      setTitle1("");
      setAge1("");
      setTime1("");
    } else {
      setError("Nemůžete vyplnit prázdná políčka");
    }
  };



  const upravitMovie = (id) => {
    setClickedId(id);
    setUpravitData(true);
    setTitle1("");
    setAge1("");
    setTime1("");

    // if (close  === "Otevřít") {
    //   setClose("Zavřít");
    //   setUpravitData(true);
    // } else {
    //   setClose("Otevřít");
    //   setUpravitData(false);
    // }

  };

  

  return (
    <div className="all-movies">
      <form onSubmit={submitForm}>
        <label>Název filmu</label>
        <input
          type="text"
          placeholder="Název filmu"
          onChange={(e) => {
            setMovieTitle(e.target.value);
          }}
          value={movieTitle}
        />
        <br />
        <label>Minimální věk</label>
        <input
          type="number"
          placeholder="Minimální věk"
          onChange={(e) => {
            setMovieAge(e.target.value);
          }}
          min="0"
          value={movieAge}
        />
        <br />
        <label>Doba trvání filmu</label>
        <input
          type="number"
          placeholder="Doba trvání"
          min="0"
          onChange={(e) => {
            setMovieTime(e.target.value);
          }}
          value={movieTime}
        />
        <input type="submit" value="Přidat" />
      </form>
      {error && <p>{error}</p>}
      {data.map((oneMovie) => {
        const { id, minage, title, time } = oneMovie;
        const isToggled = clickedId === id;
        return (
          <div key={id} className="one-movie">
            <p>
              {title} {time} minut {minage}+
            </p>
            <div>
              <button onClick={() => upravitMovie(id)} type="button"  className={isToggled ? "Upravujete" : "Upravit" }>
              {isToggled ? "Upravujete" : "Upravit" }
              </button>
              <button onClick={() => deleteMovie(id)} type="button">
                Smazat
              </button>
           
            </div>
            {upravitData && isToggled && (
              <form className="upravit-form">
                <input
                  type="text"
                  value={title1}
                  onChange={(e) => {
                    setTitle1(e.target.value);
                  }}
                  placeholder={title}
                />
                <input
                  type="number"
                  value={age1}
                  onChange={(e) => {
                    setAge1(e.target.value);
                  }}
                  placeholder={minage}
                />
                <input
                  type="number"
                  value={time1}
                  onChange={(e) => {
                    setTime1(e.target.value);
                  }}
                  placeholder={time}
                />
                <button onClick={() => updateMovie(id)} type="button">
                  Update
                </button>
              </form>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default App;
