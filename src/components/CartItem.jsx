import React from "react";
import natureimg from "../assets/images/nature.jpg";
import { useContext } from "react";
import { ShopContext } from "../helpers/context/shop-context";

export const CartItem = ({ product }) => {
  const { addToCart, products, cartItems } = useContext(ShopContext);
  return (
    <div className="product-div">
      <div className="images-div">
        <img src={natureimg} alt="Placeholder" /> {/* product.images[0] */}
      </div>
      <div className="details-div">
        <p>
          <b>Product Category:</b> {product.category}
        </p>
        <p>
          <b>Title:</b> {product.name}
        </p>
        <p>
          <b>Price:</b> {product.price}€
        </p>
        <p>
          <b>Discount:</b> {product.discount * 100}%
        </p>
        {product.price < 30 && (
          <span style={{ color: "#3B82F6", fontWeight: "bold" }}>
            Great Deal
          </span>
        )}
      </div>
    </div>
  );
};

export default CartItem;
