import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

import Product from "../components/Product";
import { useContext } from "react";
import { ShopContext } from "../helpers/context/shop-context";

const ProductsListPage = () => {
  const { products, getAllProducts, handleDelete, handleEdit } =
    useContext(ShopContext);

  return (
    <div className="ProductListPage">
      <div id="wrapper">
        <Button
          className="addnewproductbutton"
          color="grey"
          radius="md"
          size="lg"
          component={Link}
          to="/products/newProduct"
        >
          Add New Product
        </Button>
      </div>
      <ul className="products-grid">
        {products &&
          products.toReversed().map((currentProduct) => {
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
};

export default ProductsListPage;
