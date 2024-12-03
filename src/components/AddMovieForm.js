import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [watch, setWatch] = useState("");

  const handleInputChange = (e) => {
    setWatch(e.target.value);  
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return; 

    const newMovie = {
      title: title.trim(),
      watched: false,
    };
    onAddMovie(newMovie);
    setTitle(""); 
  };

  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add a Movie</h3>

      <input
        type="text"
        placeholder="Movie Title"
        name="watch"
        id="watch"
        value={watch}
        onChange={handleInputChange}  
      />      
      <button type="submit">Add Movie</button>
    </form>
  ); // TODO: add a form to add a new movie
}
