import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://stark-brushlands-90976.herokuapp.com/products")
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
