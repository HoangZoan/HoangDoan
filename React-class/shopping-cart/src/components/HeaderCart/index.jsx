import "./index.css";
import { useContext } from "react";
import { CartContext } from "../../stores/cartStore";

function HeaderCart() {
  const { getTotalQuantities } = useContext(CartContext);

  return (
    <div className="header-bag">
      <i className="bi bi-handbag-fill"></i>
      <span>{getTotalQuantities()}</span>
    </div>
  );
}

export default HeaderCart;
