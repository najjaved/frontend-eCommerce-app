import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

import Product from "../components/Product";
import { useContext } from "react";
import { ShopContext } from "../helpers/context/shop-context";

const ProductsListPage = () => {
  const { products, getAllProducts, handleDelete, handleEdit } = useContext(ShopContext);

  return (
    <div className="ProductListPage">
      <Button
        color="grey"
        radius="md"
        size="lg"
        component={Link}
        to="/products/newProduct"
      >
        Add New Product
      </Button>
      <ul className="products-grid">
        {products &&
          products.toReversed().map((currentProduct) => {
            return (
              <div key={currentProduct.id}>
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
};

export default ProductsListPage;
