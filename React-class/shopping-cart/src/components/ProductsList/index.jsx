import ProductListItem from "./ProductListItem";

import "./index.css";

function ProductsList({ items, dispatch }) {
  return (
    <ul className="product-list">
      {items.map((item) => (
        <ProductListItem key={item.id} item={item} dispatch={dispatch} />
      ))}
    </ul>
  );
}

export default ProductsList;
