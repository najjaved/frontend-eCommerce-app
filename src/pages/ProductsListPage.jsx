import { Link, useNavigate } from "react-router-dom";

import Product from "../components/Product";

const ProductsListPage = ({ productsList, setProductsList }) => {
  const navigate = useNavigate();

  //deletProduct(product.id) called from Product.jsx
  const handleDelete = (id) => {
    setProductsList(
      productsList.filter((currentProduct) => currentProduct.product_id !== id)
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
      {productsList &&
        productsList.map((currentProduct) => {
          return (
            <div className="products-grid" key={currentProduct.product_id}>
              <Link to={`/products/${currentProduct.product_id}`}>
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
