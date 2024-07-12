import React from "react";
import { useContext } from "react";
import { ShopContext } from "../helpers/context/shop-context";

export const CartItem = ({ product }) => {
  const { addToCart, removeFromCart, cartItems, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="product-div">
      <div className="images-div">
        <img src={product.images[0]} alt={`${product.name} image`} />
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
        <div className="countHandler">
          <button onClick={() => removeFromCart(product.id)}> - </button>
          <input
            value={cartItems[product.id]}
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value), product.id)
            }
          />
          <button onClick={() => addToCart(product.id)}> + </button>
        </div>
        {product.price < 30 && (
          <span
            style={{ color: "#3B82F6", fontWeight: "bold", marginTop: "10px" }}
          >
            Great Deal
          </span>
        )}
      </div>
    </div>
  );
};

export default CartItem;
