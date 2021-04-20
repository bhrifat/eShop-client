import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://e-grocery-server.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });
  return (
    <div className="row">
      {products.map((pd) => (
        <Product product={pd}></Product>
      ))}
    </div>
  );
};

export default Products;
