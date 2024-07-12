import { Link } from "react-router-dom";

import { Button } from "@mantine/core";
import hero from "../assets/images/herosection.jpg";
function HomePage() {
  return (
    <>
      <div className="herosection">
        <div className="imagesection">
          <img src={hero} alt="forest picture" />
        </div>
        <div className="textsection">
          <h1 className="title">Ethical Origins</h1>
          <h2 className=" playfair-display">
            Nature's Gifts for You - Pure and Natural Health Essentials
          </h2>
          <Button
            component={Link}
            to="/products"
            color="black"
            fullWidth
            mt="md"
            radius="md"
            className="buttontext"
          >
            Take a look at all our products
          </Button>
        </div>
      </div>
      {/* 
      <Card shadow="sm" padding="lg" radius="md" withBorder className="card">
        <Card.Section>
          <Image src={placeholder} height={500} alt="Norway" />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>We have great products waiting for you!</Text>
          <Badge color="pink">On Sale</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          Nature has everything it needs to heal you and prevent you from
          deteriorating :D BLABLABLA
          <br />
          <b>price:</b> priceless
        </Text>
      </Card> */}
    </>
  );
}

export default HomePage;
