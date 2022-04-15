import { useReducer } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import ActionType from "./types/ActionType";

import image1 from "../images/p1.png";
import image2 from "../images/p2.png";
import image3 from "../images/p3.png";
import image4 from "../images/p4.png";

const initialState = {
  totalPrice: 2199.96,
  products: [
    {
      id: "p1",
      name: "Samsung Galaxy S8",
      price: 399.99,
      imageSrc: image1,
      quantity: 1,
    },
    {
      id: "p2",
      name: "Google Pixel",
      price: 499.99,
      imageSrc: image2,
      quantity: 1,
    },
    {
      id: "p3",
      name: "Xiaomi Redmi Note 2",
      price: 699.99,
      imageSrc: image3,
      quantity: 1,
    },
    {
      id: "p4",
      name: "Samsung Galaxy S7",
      price: 599.99,
      imageSrc: image4,
      quantity: 1,
    },
  ],
};

function productsReducer(prevState, action) {
  function calcTotalPrice(data) {
    const total = data.reduce(
      (prev, cur) => prev + cur.price * cur.quantity,
      0
    );

    return +total.toFixed(2);
  }

  function changeProductsQuantity(id, choice) {
    let products = [...prevState.products];
    const index = products.findIndex((prod) => {
      return prod.id === id;
    });
    let targetProduct = products[index];

    if (choice === "add") {
      products[index] = {
        ...targetProduct,
        quantity: targetProduct.quantity + 1,
      };
    } else if (choice === "reduce") {
      products[index] = {
        ...targetProduct,
        quantity: targetProduct.quantity - 1,
      };
    }

    return products;
  }

  let existingProducts;
  switch (action.type) {
    case ActionType.clearAll:
      return {
        totalPrice: 0,
        products: [],
      };
    case ActionType.removeItem:
      existingProducts = prevState.products.filter(
        (prod) => prod.id !== action.removeId
      );

      return {
        totalPrice: calcTotalPrice(existingProducts),
        products: existingProducts,
      };

    case ActionType.addMoreItem:
      existingProducts = changeProductsQuantity(action.id, "add");

      return {
        totalPrice: calcTotalPrice(existingProducts),
        products: existingProducts,
      };

    case ActionType.reduceItem:
      existingProducts = changeProductsQuantity(action.id, "reduce");

      return {
        totalPrice: calcTotalPrice(existingProducts),
        products: existingProducts,
      };

    default:
      return initialState;
  }
}

function App() {
  const [productsState, dispatch] = useReducer(productsReducer, initialState);

  function clearAllHandler() {
    dispatch({ type: ActionType.clearAll });
  }

  function getTotalQuantities() {
    return productsState.products.reduce(
      (prevValue, cur) => prevValue + cur.quantity,
      0
    );
  }

  return (
    <>
      <Header prodQuantity={getTotalQuantities()} />

      {productsState.products.length > 0 && (
        <div className={"container checkout-box"}>
          <h1 className="heading">Your Bag</h1>

          <ProductsList items={productsState.products} dispatch={dispatch} />

          <hr className="divider" />

          <div className="checkout-footer">
            <div>Total</div>
            <div>${productsState.totalPrice}</div>
          </div>

          <button onClick={clearAllHandler} className="btn-clear">
            Clear Cart
          </button>
        </div>
      )}

      {productsState.products.length <= 0 && (
        <div className="container">is currently empty</div>
      )}
    </>
  );
}

export default App;
