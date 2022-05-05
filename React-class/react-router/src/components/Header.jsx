import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container toolbar">
        <div className="img-logo">
          <img
            src="https://theme.hstatic.net/200000053174/1000744395/14/logo.png?v=465"
            alt="Logo"
          />
        </div>

        <nav>
          <Link className="nav-link" to="/">
            Trang chủ
          </Link>
          <Link className="nav-link" to="/about">
            Giới thiệu
          </Link>
          <Link className="nav-link" to="/products">
            Sản phẩm
          </Link>
          <Link className="nav-link" to="/news">
            Tin tức
          </Link>
          <Link className="nav-link" to="/contact">
            Liên hệ
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
