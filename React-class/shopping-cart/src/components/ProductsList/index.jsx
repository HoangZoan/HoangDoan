import ProductListItem from "./ProductListItem";
import { CartContext } from "../../stores/cartStore";

import "./index.css";
import { useContext } from "react";

function ProductsList() {
  const { products } = useContext(CartContext);

  return (
    <ul className="product-list">
      {products.map((item) => (
        <ProductListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ProductsList;
