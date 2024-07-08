import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import placeholderimg from "../assets/images/placeholderList.jpeg";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

const ProductDetailsPage = ({ productsList }) => {
  const { productId } = useParams();
  const product = productsList.find(
    (currentProduct) => currentProduct.id.toString() === productId
  );

  if (!product) {
    return <Navigate to="/" />;
  }

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
        <Text fw={500}>{product.title}</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {product.description}
      </Text>
      <Card.Section className="ButtonContainer">
        <Button variant="filled" color="indigo" size="lg" radius="md">
          Back
        </Button>
        <Button variant="filled" color="lime" size="lg" radius="md">
          Add To Cart
        </Button>
      </Card.Section>
    </Card>
  );
};

export default ProductDetailsPage;
