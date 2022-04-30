import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      style={{
        maxWidth: "200px",
        margin: "12px auto",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Header;
