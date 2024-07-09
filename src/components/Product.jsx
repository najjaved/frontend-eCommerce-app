import placeholderimg from "../assets/images/placeholderList.jpeg";

const Product = ({ product, deleteProduct, editProduct }) => {
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
        </div>
      </div>
    </div>
  );
};

export default Product;
