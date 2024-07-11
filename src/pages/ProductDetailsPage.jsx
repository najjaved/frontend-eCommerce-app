import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { ShopContext } from "../helpers/context/shop-context"; // import context file

const ProductDetailsPage = () => {
  const { products, addToCart, cartItems } = useContext(ShopContext); //import all things context we need
  console.log("Products from the context: ", products);

  const { productId } = useParams();
  console.log("productId is:", productId);

  const [productDetails, setProductDetails] = useState(null); // Initialize with null or an empty object

  // Update productDetails when products change
  useEffect(() => {
    const product = products.find(
      (currentProduct) => currentProduct.id.toString() === productId
    );
    setProductDetails(product);
  }, [products, productId]); // Ensure this effect runs when products or productId change

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  const cartItemAmount = cartItems[productDetails.id];
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
          src={productDetails.images[0]}
          alt={`${productDetails.name} Image`}
          height={500}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{productDetails.name}</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text className="left" size="sm" c="dimmed">
        {productDetails.description}
      </Text>

      <Text className="left" size="sm" c="dimmed">
        <b>Price: </b>
        {productDetails.price}€
      </Text>
      <Text className="left" size="sm" c="dimmed">
        <b>Stock: </b>
        {productDetails.stock}
      </Text>
      <Text className="left" size="sm" c="dimmed">
        <b>Discount: </b>
        {productDetails.discount * 100}%
      </Text>
      <Card.Section className="ButtonContainer">
        <Button
          variant="filled"
          color="indigo"
          size="lg"
          radius="md"
          component="a"
          href="/products"
        >
          Back
        </Button>

        <Button
          onClick={() => addToCart(productDetails.id)}
          variant="filled"
          color="lime"
          size="lg"
          radius="md"
        >
          Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </Button>
      </Card.Section>
    </Card>
  );
};

export default ProductDetailsPage;
