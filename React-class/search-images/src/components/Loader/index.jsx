import "./index.css";

function Loader({ loading }) {
  if (!loading) return;

  return <div className="loader">Loading...</div>;
}

export default Loader;
