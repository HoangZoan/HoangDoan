import React from "react";

import "./index.css";

function Button(props) {
  return (
    <button onClick={props.onClick} className="btn-clear">
      {props.children}
    </button>
  );
}

export default React.memo(Button);
