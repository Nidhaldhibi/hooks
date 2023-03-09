import "./App.css";
import { movieData } from "./data";
import { useState } from "react";
import { Home } from "./component/Home";


function App() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const addMovie = (newMovie) => {
    movieData.push(newMovie);
  };
  return (
    <div className="card">
      <Home
        title={title}
        setTitle={setTitle}
        rating={rating}
        setRating={setRating}
        addMovie={addMovie}
        movieData={movieData}
      />
    </div>
  );
}

export default App;
