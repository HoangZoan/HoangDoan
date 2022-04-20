function Button({ item, onButtonClick }) {
  const { name, timeZone } = item;

  return <button onClick={() => onButtonClick(timeZone)}>{name}</button>;
}

export default Button;
