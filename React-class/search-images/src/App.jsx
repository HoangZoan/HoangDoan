import { useCallback, useEffect, useMemo, useState } from "react";
import FormControl from "./components/FormControl";
import ImagesList from "./components/ImagesList";
import Loader from "./components/Loader";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [imageDatas, setImageDatas] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const fetchImages = useCallback(
    (page, refetch = false) => {
      setLoading(true);

      fetch(
        `https://api.unsplash.com/search/photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA&page=${page}&query=${search}`
      )
        .then((res) => res.json())
        .then((datas) => {
          if (refetch) {
            setImageDatas((latestImagesDatas) => [
              ...latestImagesDatas,
              ...datas.results,
            ]);
            return;
          }

          setImageDatas(datas.results);
          setTotalPages(datas.total_pages);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    },
    [search]
  );

  useEffect(() => {
    const onScroll = (e) => {
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;

      if (clientHeight + scrollTop >= docHeight && page < totalPages) {
        fetchImages(page + 1, true);
        setPage(page + 1);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [page, totalPages]);

  const handleInputChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      fetchImages(page);
    },
    [page]
  );

  return (
    <div className="app">
      <h1 className="heading">Search Images</h1>

      <FormControl
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />

      <ImagesList items={imageDatas} />

      <Loader loading={loading} />

      {error && <div>Error: {error.message}</div>}
    </div>
  );
}

export default App;
