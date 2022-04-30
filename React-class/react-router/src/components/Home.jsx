import React from "react";
import { Link } from "react-router-dom";

const dummyData = [
  { name: "Google", id: "1" },
  { name: "Amazon", id: "2" },
];

const Home = () => {
  return (
    <nav>
      {dummyData.map((data) => (
        <Link
          to={`/home/${data.name.toLocaleLowerCase()}/${data.id}`}
          key={data.id}
        >
          {data.name}
        </Link>
      ))}
    </nav>
  );
};

export default Home;
