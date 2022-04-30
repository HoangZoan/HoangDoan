import React from "react";
import { useLocation, useRoutes } from "react-router-dom";

const Products = (props) => {
  const location = useLocation();
  console.log(location);
  return <h2 style={{ textAlign: "center" }}>Products</h2>;
};

export default Products;
