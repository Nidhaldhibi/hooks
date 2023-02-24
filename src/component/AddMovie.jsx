import React, { useState } from "react";

const AddMovie = ({ addMovie, setMovies }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      ...movie,
      rating: Number(movie.rating),
      id: Date.now(),
    };
    addMovie(newMovie);
    setMovies({
      id: "",
      rating: "",
      title: "",
      trailer: "",
      description: "",
    });
  };

  const [movie, setMovie] = useState({
    id: "",
    rating: "",
    title: "",
    trailer: "",
    description: "",
  });
  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const { title, rating, trailer, description } = movie;
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add your movie
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add movie
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    value={title}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="trailer" className="form-label">
                    Trailer
                  </label>
                  <input
                    value={trailer}
                    onChange={handleChange}
                    type="url"
                    className="form-control"
                    id="trailer"
                    name="trailer"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="rating" className="form-label">
                    Rating
                  </label>
                  <input
                    value={rating}
                    onChange={handleChange}
                    type="number"
                    min={0}
                    max={5}
                    className="form-control"
                    id="rating"
                    name="rating"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="descreption" className="form-label">
                    Description
                  </label>
                  <input
                    value={description}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
