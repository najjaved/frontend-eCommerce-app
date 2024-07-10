import { Fragment, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import genericImg from "../assets/images/genericIimage.jpg";
import { API_URL } from "../helpers/constants";
import { ShopContext } from "../helpers/context/shop-context";

const resetInitialStates = () => {
  return {
    category: "Misc",
    name: "",
    description: "",
    price: 0,
    discount: 0,
    stock: 0,
    images: [
      "https://plus.unsplash.com/premium_photo-1694412516047-c9ef201f9564?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVyYmFsJTIwcHJvY3V0c3xlbnwwfHwwfHx8MA%3D%3D",
    ], // toDo: update images ['', ''], for now used this image as a placeholder
  };
};

const NewProduct = () => {
  const { getAllProducts } = useContext(ShopContext);
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState(resetInitialStates());

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = newProduct;
    console.log("Data sent to backsent", payload);

    try {
      const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log("API response: ", response);
      if (response.status === 201) {
        const newProductData = await response.json();
        console.log("parsed new product data: ", newProductData);
        setNewProduct(resetInitialStates()); // reinitialize entries after submitting form & navigate back to the ProductsListPage
        getAllProducts();
        navigate("/products");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const currentName = event.target.name;
    const currentValue = event.target.value;
    setNewProduct({ ...newProduct, [currentName]: currentValue });
  };

  const handleCancelAdd = () => {
    navigate("/products");
  };

  return (
    <Fragment>
      <div className="form-page">
        <h3>New Product</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="content-div">
            <section className="main-info">
              <label>
                Product Category
                <select
                  name="category"
                  value={newProduct.category}
                  onChange={handleChange}
                >
                  <option value="">-- None --</option>
                  <option value="Herbal Teas">Herbal Teas</option>
                  <option value="Homemade Cosmetics">Homemade Cosmetics</option>
                  <option value="Herbal Supplements">Herbal Supplements</option>
                  <option value="Mineral Products">Mineral Products</option>
                </select>
              </label>

              <label>
                Title
                <input
                  name="name"
                  value={newProduct.name}
                  onChange={handleChange}
                />
              </label>

              <label>
                Price
                <input
                  name="price"
                  type="number"
                  min={9}
                  max={99}
                  value={newProduct.price}
                  onChange={handleChange}
                />
              </label>

              <label>
                Discount
                <input
                  name="discount"
                  type="number"
                  value={newProduct.discount}
                  onChange={handleChange}
                />
              </label>
            </section>

            <section className="description-div">
              <label>
                Product Image
                <input
                  name="images"
                  value={newProduct.images}
                  onChange={handleChange}
                />
              </label>

              <label
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Description
                <textarea
                  name="description"
                  rows={5}
                  cols={25}
                  value={newProduct.description}
                  onChange={handleChange}
                />
              </label>

              <label>
                Stock
                <input
                  name="stock"
                  value={newProduct.stock}
                  onChange={handleChange}
                />
              </label>
            </section>
          </div>
          <hr />

          <div className="buttons-div">
            <button type="submit">Save Product</button>
            <button type="button" onClick={handleCancelAdd}>
              {" "}
              Cancel{" "}
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default NewProduct;
