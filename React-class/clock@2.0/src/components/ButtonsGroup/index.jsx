import React from "react";
import "./index.css";

function ButtonsGroup({ children }) {
  return <div className="buttons-group">{children}</div>;
}

export default React.memo(ButtonsGroup);
