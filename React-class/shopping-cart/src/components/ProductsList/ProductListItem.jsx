import { useContext } from "react";
import { CartContext } from "../../stores/cartStore";

function ProductListItem({ item }) {
  const { name, price, id, imageSrc, quantity } = item;
  const { removeItem, addMoreItem, reduceItem } = useContext(CartContext);

  return (
    <li className="product-item">
      <img src={imageSrc} alt={name} />

      <div className="text-content">
        <div className="product-name">{name}</div>
        <div className="product-price">${price}</div>
        <div
          className="btn-remove hover-color-light"
          onClick={() => removeItem(id)}
        >
          remove
        </div>
      </div>

      <div className="product-quantity">
        <i
          className="bi bi-chevron-up hover-color-light"
          onClick={() => addMoreItem(id)}
        ></i>
        <span>{quantity}</span>
        <i
          className="bi bi-chevron-down hover-color-light"
          onClick={() => reduceItem(id)}
        ></i>
      </div>
    </li>
  );
}

export default ProductListItem;
