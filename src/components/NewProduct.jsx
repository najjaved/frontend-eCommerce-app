import { Fragment, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../helpers/context/shop-context";
import {
  TextInput,
  NumberInput,
  Select,
  Textarea,
  Button,
  Group,
  Title,
  Divider,
  Grid,
  Space
} from "@mantine/core";

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
    console.log("Data sent successfully to backend", payload);

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
        <Title order={3} align="center" mb="lg" style={{ color: '#154B20' }}>
          New Product
        </Title>
        <form className="form" onSubmit={handleSubmit}>
          <Grid>
            <Grid.Col span={6}>
              <Select
                label="Product Category"
                name="category"
                value={newProduct.category}
                onChange={(value) => setNewProduct({ ...newProduct, category: value })}
                data={[
                  { value: "Herbal Teas", label: "Herbal Teas" },
                  { value: "Homemade Cosmetics", label: "Homemade Cosmetics" },
                  { value: "Herbal Supplements", label: "Herbal Supplements" },
                  { value: "Mineral Products", label: "Mineral Products" },
                ]}
                placeholder="Select category"
                style={{ width: "100%" }}
              />
              <Space h="md" />
              <TextInput
                label="Title"
                name="name"
                value={newProduct.name}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
              <Space h="md" />
              <NumberInput
                label="Price"
                name="price"
                value={newProduct.price}
                onChange={(value) => setNewProduct({ ...newProduct, price: value })}
                style={{ width: "100%" }}
                hideControls
              />
              <Space h="md" />
              <NumberInput
                label="Discount"
                name="discount"
                value={newProduct.discount}
                onChange={(value) => setNewProduct({ ...newProduct, discount: value })}
                min={0}
                max={1}
                step={0.01}
                style={{ width: "100%" }}
                hideControls
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <TextInput
                label="Product Image URL"
                name="images"
                value={newProduct.images[0]}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
              {newProduct.images.length > 0 && newProduct.images[0] && (
                <div className="image-preview">
                  <img
                    src={newProduct.images[0]}
                    alt="Product preview"
                    style={{ maxHeight: "200px", maxWidth: "100%" }}
                  />
                </div>
              )}


              <Space h="md" />
              <Textarea
                label="Description"
                name="description"
                value={newProduct.description}
                onChange={handleChange}
                rows={5}
                cols={25}
                style={{ width: "100%" }}
              />
              <Space h="md" />
              <NumberInput
                label="Stock"
                name="stock"
                value={newProduct.stock}
                onChange={(value) => setNewProduct({ ...newProduct, stock: value })}
                style={{ width: "100%" }}
                hideControls
              />
            </Grid.Col>
          </Grid>
          <Divider my="lg" />
          <Group position="apart">
            <Button type="submit" variant="filled" size="md" radius="md">
              Save Product
            </Button>
            <Button type="button" variant="filled" size="md" radius="md" onClick={handleCancelAdd}>
              Cancel
            </Button>
          </Group>
        </form>
      </div>
    </Fragment>
  );
  
};

export default NewProduct;
