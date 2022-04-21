import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [imageDatas, setImageDatas] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const onScroll = (e) => {
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;

      console.log(clientHeight, scrollTop, docHeight);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(document.documentElement.clientHeight);

  function handleInputChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    // fetch(
    //   `https://api.unsplash.com/search/photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA&page=${page}&query=${search}`
    // )
    //   .then((res) => res.json())
    //   .then((datas) => setImageDatas(datas.results))
    //   .catch((error) => setError(error))
    //   .finally(() => setLoading(false));
  }

  return (
    <div className="app">
      <h1>Todos App</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="task">New Task</label>

        <input type="text" id="task" onChange={handleInputChange} />
        <button type="submit">"Add"</button>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}

      <ul className="images-list">
        {imageDatas.map(({ id, alt_description, urls }) => (
          <li key={id}>
            <img src={urls.small_s3} alt={alt_description} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
