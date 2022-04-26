import "./index.css";
import HeaderCart from "../HeaderCart";
import React from "react";

function Header() {
  return (
    <nav className="header-nav">
      <div className="container">
        <div>UseReducer</div>

        <HeaderCart />
      </div>
    </nav>
  );
}

export default React.memo(Header);
