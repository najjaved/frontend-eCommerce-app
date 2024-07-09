import { Link, useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

import Product from "../components/Product";
import { useContext } from "react";
import { ShopContext } from "../helpers/context/shop-context";

const ProductsListPage = () => {
  const { products, getAllProducts } = useContext(ShopContext);

  const navigate = useNavigate();

  //deletProduct(product.id) called from Product.jsx
  /* const handleDelete = (id) => {
    setProductsList(
      products.filter((currentProduct) => currentProduct.id !== id)
    );
  };

  const handleEdit = (id) => {
    navigate(`/products/edit/${id}`); // Navigate to edit page
  };
 */
  return (
    <div className="ProductListPage">
      <Button color="grey" radius="md" size="lg" component={Link} to = "/products/newProduct">
       Add New Product
      </Button>
      <ul className="products-grid">
        {products &&
          products.map((currentProduct) => {
            return (
              <div key={currentProduct.id}>
                <Product
                  product={currentProduct}
                  /*     deleteProduct={handleDelete}
                  editProduct={handleEdit} */
                  productId={currentProduct.id}
                />
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default ProductsListPage;
