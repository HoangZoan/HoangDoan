import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductItem = ({ images, title, price }) => {
  return (
    <li>
      <div className="product-img">
        <img src={images} alt={title} />
      </div>
      <div>{title}</div>
      <div>Giá: {price}</div>
    </li>
  );
};

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:3000/products")
      .then((response) => setProducts(response.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      {loading && <div>Loading...</div>}
      <ul className="products-list">
        {products.map(({ id, images, title, price }) => (
          <ProductItem key={id} images={images} title={title} price={price} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
