import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const onAddMovie = (newMovie) => {
    // TODO: Implement adding a new movie to the list
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const onToggleWatched = (id) => {
    setMovies((prevMovies) => {
      if (Array.isArray(prevMovies)) {
        return prevMovies.map((movie) =>
          movie.id === id ? { ...movie, watched: !movie.watched } : movie
        );
      }
      return prevMovies;
    });
  };

  const onDeleteMovie = (id) => {
    // TODO: Implement deleting a movie from the list
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      {/* TODO: Add AddMovieForm Component */}
      <AddMovieForm onAddMovie={onAddMovie} />
      {/* TODO: Add MovieList Component */}
      <MovieList
        movies={movies}
        onToggleWatched={onToggleWatched}
        onDeleteMovie={onDeleteMovie}
      />
    </div>
  );
}

export default App;
