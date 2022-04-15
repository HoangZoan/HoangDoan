import "./index.css";

function Header({ prodQuantity }) {
  return (
    <nav className="header-nav">
      <div className="container">
        <div>UseReducer</div>

        <div className="header-bag">
          <i className="bi bi-handbag-fill"></i>
          <span>{prodQuantity}</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
