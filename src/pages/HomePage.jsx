import { Link } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import placeholder from "../assets/placeholderList.jpeg";
function HomePage() {
  return (
    <>
      <h1> Welcome</h1>
      <Link to="/ListPage">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image src={placeholder} height={160} alt="Norway" />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </Link>
    </>
  );
}

export default HomePage;
