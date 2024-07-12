import React from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from "../helpers/context/shop-context";
import { useContext } from "react";
import Product from "../components/Product";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { products, handleDelete, handleEdit} = useContext(ShopContext);
  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="ProductListPage">
    <div id="wrapper">
        <h2 className="category-title">Category: {categoryName}</h2>
    </div>
    <ul className="products-grid">
    {filteredProducts &&
        filteredProducts.map((currentProduct) => {
        return (
            <div key={currentProduct.id} className = "product-wrapper">
            <Product
                product={currentProduct}
                deleteProduct={handleDelete}
                editProduct={handleEdit}
                productId={currentProduct.id}
            />
            </div>
        );
        })}
    </ul>
</div>
  );
}

export default CategoryPage;

