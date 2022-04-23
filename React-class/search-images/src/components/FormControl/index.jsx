import React from "react";
import "./index.css";

function FormControl({ handleSubmit, handleInputChange }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" id="task" onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default React.memo(FormControl);
