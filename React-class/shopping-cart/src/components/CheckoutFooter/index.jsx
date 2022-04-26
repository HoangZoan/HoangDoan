import { useContext } from "react";
import { CartContext } from "../../stores/cartStore";
import "./index.css";

function CheckoutFooter() {
  const { totalPrice } = useContext(CartContext);

  return (
    <div className="checkout-footer">
      <div>Total</div>
      <div>${totalPrice}</div>
    </div>
  );
}

export default CheckoutFooter;
