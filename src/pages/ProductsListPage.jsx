import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../helpers/constants";

const ProductsListPage = () =>{

  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    fetch(`${API_URL}/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.log("Fetch error: ", error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Listpage to be populated</h1>
      {products.map((product) => {
        return (
          <div className="productCard" key={product.product_id}>
            <Link to={`/products/${product.product_id}`}>
              <h3>{product.product_name}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsListPage;
