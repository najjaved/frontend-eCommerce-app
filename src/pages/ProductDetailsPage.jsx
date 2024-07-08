import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import placeholderimg from "../assets/images/placeholderList.jpeg";

const ProductDetailsPage = ({ productsList }) => {
  const { productId } = useParams();
  const product = productsList.find(
    (currentProduct) => currentProduct.product_id.toString() === productId
  );

  if (!product) {
    return <Navigate to="/" />;
  }

  return (
    <div className="product-info">
      <h1 className="product-title">{product.title}</h1>
      <p className="product-description">{product.description}</p>
      <img className="product-image" src={placeholderimg} alt="Product Image" />
      <div className="more-details">
        <p>
          <b>Rating: </b> {product.rating}{" "}
        </p>
        <p>
          <b>Available items: </b>
          {product.stock}
        </p>
        <br />
        <hr />

        <p className="details-text">
          <strong>More details here:</strong>{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Text to link
          </a>
        </p>
      </div>

      {/* Back button */}
      <Link to="/" className="back-link">
        <button className="back-btn">Back</button>
      </Link>
    </div>
  );
};

export default ProductDetailsPage;
