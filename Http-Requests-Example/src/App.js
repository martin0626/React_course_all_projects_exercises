import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  let [movies, setMovies] = useState([]);
  let [isLoading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  let requestHanler = useCallback(async () => {
    setLoading(true);
    try {
      let response = await fetch(
        "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
      );

      let arrayResults = [];

      let data = await response.json();

      for (let id in data) {
        arrayResults.push({
          id: data[id],
          title: data[id].title,
          openingText: data[id].openingText,
          releaseDate: data[id].releaseDate,
        });
      }

      setMovies(arrayResults);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);

  let addMovieHandler = async (movie) => {
    let response = await fetch(
      "https://jstest-47ca2-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    requestHanler();
  };

  useEffect(() => {
    requestHanler();
  }, [requestHanler]);
  let content = <p>No results!</p>;

  if (!isLoading && movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={requestHanler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
