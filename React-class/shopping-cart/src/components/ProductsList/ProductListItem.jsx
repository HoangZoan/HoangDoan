import ActionType from "../../types/ActionType";

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
          className="bi bi-chevron-up hover-color-light"
          onClick={() => addMoreProductHandler(id)}
        ></i>
        <span>{quantity}</span>
        <i
          className="bi bi-chevron-down hover-color-light"
          onClick={() => reduceProductHandler(id)}
        ></i>
      </div>
    </li>
  );
}

export default ProductListItem;
