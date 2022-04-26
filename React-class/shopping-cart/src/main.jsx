import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import { CartProvider } from "./stores/cartStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
