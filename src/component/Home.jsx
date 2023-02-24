import React from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import Filter from "./Filter";
import Rate from "./Rating";

export const Home = ({
  title,
  setTitle,
  rating,
  setRating,
  addMovie,
  movieData,
}) => {
  return (
    <div>
      <h1>Movies</h1>
      <Filter title={title} setTitle={setTitle} />
      <Rate rating={rating} setRating={setRating} />
      <AddMovie addMovie={addMovie} />
      <MovieList movieData={movieData} title={title} rating={rating} />
    </div>
  );
};
