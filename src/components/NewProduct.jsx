import { Fragment, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../helpers/context/shop-context";

const resetInitialStates = () => {
  return {
    category: "",
    name: "",
    description: "",
    price: 0,
    discount: 0,
    stock: 0,
    images: [], // Test for new product: https://lh3.googleusercontent.com/pw/AP1GczMXDRBaA9OxtyAQzf_ZDH7bOt6SUxOAbzuJ2roiVxutahsJeODemVgyYuZgnTLMXB0f7H-VIkIXJ_uDVhyCTvtDVOsB_JzSJPLNnY9h3VPxDW6CS4M3DTpvonNIBL51OVOhYgoYBMjaF74l21LZDKCiCA=w586-h879-s-no-gm?authuser=0
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
      const response = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
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
    const currentName = event.target.name; // or extract directly using destructuring: const { name, value } = event.target;
    const currentValue = event.target.value;
    if (currentName === "images") {
      setNewProduct({ ...newProduct, images: [currentValue] }); // handle the image URL as an array
    } else {
      setNewProduct({ ...newProduct, [currentName]: currentValue }); // updates the newProduct state object by setting the property with the key of currentName to the value of currentValue.
    }
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

              {newProduct.images.length > 0 && newProduct.images[0] && (
                <div className="image-preview">
                  <img
                    src={newProduct.images[0]}
                    alt="Product preview"
                    style={{ maxHeight: "200px", maxWidth: "100%" }}
                  />
                </div>
              )}

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
