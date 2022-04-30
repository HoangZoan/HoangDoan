import React from "react";
import "./index.css";

function Button({ item, onButtonClick, selected }) {
  const { name, timeZone } = item;
  const classes = `button ${selected ? "selected" : ""}`;

  return (
    <button className={classes} onClick={() => onButtonClick(timeZone)}>
      {name}
    </button>
  );
}

export default React.memo(Button);
