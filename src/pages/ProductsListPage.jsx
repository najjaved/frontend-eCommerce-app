import { Link, useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

import Product from "../components/Product";
import { useContext } from "react";
import { ShopContext } from "../helpers/context/shop-context";

const ProductsListPage = ({ setProductsList }) => {
  const { products, getAllProducts } = useContext(ShopContext);

  const navigate = useNavigate();

  //deletProduct(product.id) called from Product.jsx
  const handleDelete = (id) => {
    setProductsList(
      products.filter((currentProduct) => currentProduct.id !== id)
    );
  };

  const handleEdit = (id) => {
    navigate(`/products/edit/${id}`); // Navigate to edit page
  };

  return (
    <div className="ProductListPage">
      <h1>Listpage to be styled</h1>
      <Link to="/products/newProduct">
        <h2>Add Product</h2>
      </Link>
      {products &&
        products.map((currentProduct) => {
          return (
            <div className="products-grid" key={currentProduct.id}>
              <Link to={`/products/${currentProduct.id}`}>
                <Product
                  product={currentProduct}
                  deleteProduct={handleDelete}
                  editProduct={handleEdit}
                />
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default ProductsListPage;
