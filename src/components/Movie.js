import React from "react";

/**
 * TODO: implement the Movie component
 * A single movie item in the movie list, with a checkbox to mark it
 * watched, a text span for the title, and a delete button.
 */
export default function Movie({ movies, onToggleWatched, onDeleteMovie }) {

  return (
    <div className="list">
        <h2>Movies</h2>
      <ul>
        {movies.map ? movies.map((movie) => (
          <Movies 
          movie={movie}
          key={movie.id} 
          onToggleWatched={onToggleWatched}
          onDeleteMovie={onDeleteMovie} 
          />
        )) : null}
       </ul>
    </div>
    
  );
}

function Movies({movies, onToggleWatched, onDeleteMovie}) {
    return (
        <li>
            <input
            type="checkbox"
            value={movies.watched}
            onChange={() => onToggleWatched(movies.id)}
            />
            <span style={movies.watched ? {textDecoration: "line-through"} : {}}> {movies.title}</span>
            <button onClick={() => onDeleteMovie(movies.id)}>Delete</button>
        </li>
    );
}
