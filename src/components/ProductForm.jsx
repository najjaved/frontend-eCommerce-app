import { Fragment, useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const resetInitialStates = () => ({
  category: "",
  name: "",
  description: "",
  price: 0,
  discount: 0,
  stock: 0,
  images: []
});

const ProductForm = () => {
  const { getAllProducts, updateProductsData, products } = useContext(ShopContext);
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState(resetInitialStates());

  useEffect(() => {
    if (productId) {
      const existingProduct = products.find((p) => p.id.toString() === productId);
      if (existingProduct) {
        setProduct(existingProduct);
      } else {
        console.log("Product not found");
      }
    }
  }, [productId, products]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = product;
    console.log("Data sent successfully to backend", payload);

    try {
      const url = `${import.meta.env.VITE_API_URL}/products${productId ? `/${productId}` : ""}`;
      const method = productId ? "PUT" : "POST";
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log("API response: ", response);
      if (response.ok) {
        const newProductData = await response.json();
        console.log("Parsed product data: ", newProductData);
        setProduct(resetInitialStates()); // reinitialize entries after submitting form
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
    if (currentName === "images") {
      setProduct({ ...product, images: [currentValue] });
    } else {
      setProduct({ ...product, [currentName]: currentValue });
    }
  };

  const handleCancel = () => {
    navigate("/products");
  };

  return (
    <Fragment>
      <div className="form-page">
        <Title order={3} align="center" mb="lg" style={{ color: '#154B20' }}>
          {productId ? "Edit Product" : "New Product"}
        </Title>
        <form className="form" onSubmit={handleSubmit}>
          <Grid>
            <Grid.Col span={6}>
              <Select
                label="Product Category"
                name="category"
                value={product.category}
                onChange={(value) => setProduct({ ...product, category: value })}
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
                value={product.name}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
              <Space h="md" />
              <NumberInput
                label="Price"
                name="price"
                value={product.price}
                onChange={(value) => setProduct({ ...product, price: value })}
                style={{ width: "100%" }}
                hideControls
              />
              <Space h="md" />
              <Select
                label="Discount"
                name="discount"
                value={product.discount.toString()}
                onChange={(value) => setProduct({ ...product, discount: parseFloat(value) })}
                data={[
                  { value: "0", label: "0%" },
                  { value: "0.05", label: "5%" },
                  { value: "0.10", label: "10%" },
                  { value: "0.15", label: "15%" },
                  { value: "0.20", label: "20%" },
                  { value: "0.25", label: "25%" },
                  { value: "0.30", label: "30%" },
                  { value: "0.35", label: "35%" },
                  { value: "0.40", label: "40%" },
                  { value: "0.45", label: "45%" },
                  { value: "0.50", label: "50%" },
                ]}
                placeholder="Select discount"
                style={{ width: "100%" }}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <TextInput
                label="Product Image URL"
                name="images"
                value={product.images[0]}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
              {product.images.length > 0 && product.images[0] && (
                <div className="image-preview">
                  <img
                    src={product.images[0]}
                    alt="Product preview"
                    style={{ maxHeight: "200px", maxWidth: "100%" }}
                  />
                </div>
              )}
              <Space h="md" />
              <Textarea
                label="Description"
                name="description"
                value={product.description}
                onChange={handleChange}
                rows={5}
                cols={25}
                style={{ width: "100%" }}
              />
              <Space h="md" />
              <NumberInput
                label="Stock"
                name="stock"
                value={product.stock}
                onChange={(value) => setProduct({ ...product, stock: value })}
                style={{ width: "100%" }}
                hideControls
              />
            </Grid.Col>
          </Grid>
          <Divider my="lg" />
          <Group position="apart">
            <Button type="submit" variant="filled" size="md" radius="md">
              {productId ? "Update Product" : "Save Product"}
            </Button>
            <Button type="button" variant="filled" size="md" radius="md" onClick={handleCancel}>
              Cancel
            </Button>
          </Group>
        </form>
      </div>
    </Fragment>
  );
};

export default ProductForm;