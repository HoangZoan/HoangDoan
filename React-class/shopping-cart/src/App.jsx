import { useCallback, useContext, useReducer } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Button from "./components/Button";
import { CartContext } from "./stores/cartStore";
import CheckoutFooter from "./components/CheckoutFooter";

function App() {
  const { products, clearAll } = useContext(CartContext);

  return (
    <>
      <Header />

      {products.length > 0 && (
        <div className="container checkout-box">
          <h1 className="heading">Your Bag</h1>

          <ProductsList />

          <hr className="divider" />

          <CheckoutFooter />

          <Button onClick={clearAll}>Clear Cart</Button>
        </div>
      )}

      {products.length <= 0 && (
        <div className="container">is currently empty</div>
      )}
    </>
  );
}

export default App;
