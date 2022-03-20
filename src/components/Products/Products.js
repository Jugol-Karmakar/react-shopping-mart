import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = (props) => {
  const { addToCart } = props;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <Product addToCart={addToCart} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
