import React from "react";
import Rate from "./Rating";

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;
  return (
    <div className="Card">
      <div className="card-left">
        <img src={posterURL} />
      </div>
      <div className="card-right">
        <div className="card-rating">
          <Rate rating={rating} />
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="card-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
