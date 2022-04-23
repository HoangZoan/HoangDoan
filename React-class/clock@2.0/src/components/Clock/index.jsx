import "./index.css";

import image from "../../../images/clock-face.png";

function Clock({ children }) {
  return (
    <div className="clock">
      <img src={image} alt="Clock" />

      {children}
    </div>
  );
}

export default Clock;
