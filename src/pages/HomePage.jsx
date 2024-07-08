import { Link } from "react-router-dom";

import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import placeholder from "../assets/images/placeholderList.jpeg";
function HomePage() {
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder className="card">
        <Card.Section>
          <Image src={placeholder} height={500} alt="Norway" />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Herbal Product List</Text>
          <Badge color="pink">On Sale</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          Nature has everything it needs to heal you and prevent you from
          deteriorating :D BLABLABLA
          <br />
          <b>price:</b> 5555 millions
        </Text>

        <Button
          component={Link}
          to="/products"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
        >
          Take a look at our products
        </Button>
      </Card>
    </>
  );
}

export default HomePage;
