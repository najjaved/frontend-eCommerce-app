import { Link} from "react-router-dom";

import Product from "../components/Product";

const ProductsListPage = ({productsList, setProductsList}) =>{

  //deletProduct(product.id) called from Product.jsx
  const handleDelete = (id) => {
    setProductsList(productsList.filter(currentProduct => (currentProduct.product_id !== id)));
  
  }

  return (
    <div className="ProductListPage">
      <h1>Listpage to be styled</h1>
      {productsList && productsList.map((currentProduct) => {
        return (
          <div className="products-grid" key={currentProduct.product_id}>
            <Link to={`/products/${currentProduct.product_id}`}>
            <Product product = {currentProduct} deletProduct ={handleDelete} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsListPage;
