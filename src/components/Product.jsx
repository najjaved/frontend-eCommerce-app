import placeholderimg from "../assets/images/placeholderList.jpeg";
import { useContext } from "react";
import { ShopContext } from "../helpers/context/shop-context";
import { Button } from "@mantine/core";

const Product = ({ product, deleteProduct, editProduct, productId }) => {
  const { addToCart, products } = useContext(ShopContext); //import all things context we need

  const handleDeleteClick = (event) => {
    event.preventDefault();
    deleteProduct(product.id);
  };

  const handleEditClick = (event) => {
    event.preventDefault();
    editProduct(product.id);
  };

  return (
    <div className="product-div">
      <div className="images-div">
        <img src={placeholderimg} alt="image to be added" />
        {/* product.images[0] */}
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
        <div className="buttons-div">
          <button
            className="btn-primary"
            type="button"
            onClick={handleDeleteClick}
          >
            {" "}
            Delete{" "}
          </button>{" "}
          {/* replace with mantine buttons  */}
          <button
            className="btn-secondary"
            type="button"
            onClick={handleEditClick}
          >
            {" "}
            Edit{" "}
          </button>
          <Button
            onClick={() => addToCart(product.id)}
            variant="filled"
            color="lime"
            size="lg"
            radius="md"
          >
            Add To Cart
          </Button>
          <Button
            variant="filled"
            color="indigo"
            size="lg"
            radius="md"
            component="a"
            href={`/products/${productId}`}
          >
            Product Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
