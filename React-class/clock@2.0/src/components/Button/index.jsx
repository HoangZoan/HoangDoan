import "./index.css";

function Button({ item, onButtonClick, currentTimezone }) {
  const { name, timeZone } = item;
  const classes = `button ${timeZone === currentTimezone ? "selected" : ""}`;

  return (
    <button className={classes} onClick={() => onButtonClick(timeZone)}>
      {name}
    </button>
  );
}

export default Button;
