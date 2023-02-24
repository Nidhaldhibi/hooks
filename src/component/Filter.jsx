import React from "react";

const Filter = ({ title, setTitle }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control "
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        placeholder="Movie name"
      />
    </div>
  );
};

export default Filter;
