import "./index.css";

function Pointer({ variant, rotate }) {
  return (
    <div
      className={"pointer " + variant}
      style={{ transform: `translate(-50%, -100%) rotate(${rotate})` }}
    ></div>
  );
}

export default Pointer;
