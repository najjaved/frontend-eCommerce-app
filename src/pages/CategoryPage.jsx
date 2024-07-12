import React from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from "../helpers/context/shop-context";
import { useContext } from "react";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { products} = useContext(ShopContext);
  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div>
      <h1>Category: {categoryName}</h1>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.images[0]} alt={product.name} width="150" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;