import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import placeholderimg from "../assets/images/placeholderList.jpeg";

const ProductDetailsPage = ({ productsList, handleAddToCart }) => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null); // Initialize with null or an empty object

  // Find the product based on productId
  const product = productsList.find(
    (currentProduct) => currentProduct.id.toString() === productId
  );

  // Redirect to homepage if product not found
  if (!product) {
    return <Navigate to="/" />;
  }

  // Update productDetails when product is set
  useState(() => {
    setProductDetails(product);
  }, [product]); // Ensure this effect runs when product changes

  return (
    <Card
      className="product-info"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section>
        <Image
          className="product-image"
          src={placeholderimg}
          alt="Product Image"
          height={300}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{product.product_name}</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {product.description}
      </Text>

      <Card.Section className="ButtonContainer">
        <Button
          variant="filled"
          color="indigo"
          size="lg"
          radius="md"
          to="/products"
        >
          Back
        </Button>

        <Button
          onClick={() => handleAddToCart(product)} // Pass product instead of productDetails
          variant="filled"
          color="lime"
          size="lg"
          radius="md"
        >
          Add To Cart
        </Button>
      </Card.Section>
    </Card>
  );
};

export default ProductDetailsPage;
