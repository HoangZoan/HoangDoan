import "./index.css";

function Clock({ children }) {
  return (
    <div className="clock">
      <img src="./images/clock-face.png" alt="Clock" />

      {children}
    </div>
  );
}

export default Clock;
