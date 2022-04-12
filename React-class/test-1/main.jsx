const initialState = {
  totalPrice: 2199.96,
  products: [
    {
      id: "p1",
      name: "Samsung Galaxy S8",
      price: 399.99,
      imageSrc: "./image/p1.png",
      quantity: 1,
    },
    {
      id: "p2",
      name: "Google Pixel",
      price: 499.99,
      imageSrc: "./image/p2.png",
      quantity: 1,
    },
    {
      id: "p3",
      name: "Xiaomi Redmi Note 2",
      price: 699.99,
      imageSrc: "./image/p3.png",
      quantity: 1,
    },
    {
      id: "p4",
      name: "Samsung Galaxy S7",
      price: 599.99,
      imageSrc: "./image/p4.png",
      quantity: 1,
    },
  ],
};

const ActionType = {
  clearAll: "clear-all",
  removeItem: "remove-item",
  addMoreItem: "add-more-item",
  reduceItem: "reduce-item",
};

function productsReducer(prevState, action) {
  function calcTotalPrice(data) {
    return data.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);
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
  const [productsState, dispatch] = React.useReducer(
    productsReducer,
    initialState
  );

  function clearAllHandler() {
    dispatch({ type: ActionType.clearAll });
  }

  return (
    <>
      <Header prodQuantity={productsState.products.length} />

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

function Header({ prodQuantity }) {
  return (
    <nav className="header-nav">
      <div className="container">
        <div>UseReducer</div>

        <div className="header-bag">
          <i class="bi bi-handbag-fill"></i>
          <span>{prodQuantity}</span>
        </div>
      </div>
    </nav>
  );
}

function ProductsList({ items, dispatch }) {
  return (
    <ul className="product-list">
      {items.map((item) => (
        <ProductListItem item={item} dispatch={dispatch} />
      ))}
    </ul>
  );
}

function ProductListItem({ item, dispatch }) {
  const { name, price, id, imageSrc, quantity } = item;

  function removeItemHandler(removeId) {
    dispatch({ type: ActionType.removeItem, removeId });
  }

  function addMoreProductHandler(id) {
    dispatch({ type: ActionType.addMoreItem, id });
  }

  function reduceProductHandler(id) {
    if (quantity === 1) {
      removeItemHandler(id);
      return;
    }

    dispatch({ type: ActionType.reduceItem, id });
  }

  return (
    <li className="product-item">
      <img src={imageSrc} alt={name} />

      <div className="text-content">
        <div className="product-name">{name}</div>
        <div className="product-price">${price}</div>
        <div
          className="btn-remove hover-color-light"
          onClick={() => removeItemHandler(id)}
        >
          remove
        </div>
      </div>

      <div className="product-quantity">
        <i
          class="bi bi-chevron-up hover-color-light"
          onClick={() => addMoreProductHandler(id)}
        ></i>
        <span>{quantity}</span>
        <i
          class="bi bi-chevron-down hover-color-light"
          onClick={() => reduceProductHandler(id)}
        ></i>
      </div>
    </li>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
