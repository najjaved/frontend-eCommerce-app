import { Link } from "react-router-dom";

import { Button, Space } from "@mantine/core";
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
          <div className="buttons">
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
            <Space h="xl" />
            {/* Category Links Section */}
            <div className="category-section">
              <h3 className="category-title">Shop by Category</h3>
              <div className="category-links">
                <Button
                  component={Link}
                  to="/products/category/Herbal%20Teas"
                  variant="outline"
                  color="black"
                  radius="md"
                  className="category-button"
                >
                  Herbal Teas
                </Button>
                <Button
                  component={Link}
                  to="/products/category/Homemade%20Cosmetics"
                  variant="outline"
                  color="black"
                  radius="md"
                  className="category-button"
                >
                  Homemade Cosmetics
                </Button>
                <Button
                  component={Link}
                  to="/products/category/Herbal%20Supplements"
                  variant="outline"
                  color="black"
                  radius="md"
                  className="category-button"
                >
                  Herbal Supplements
                </Button>
                <Button
                  component={Link}
                  to="/products/category/Mineral%20Products"
                  variant="outline"
                  color="black"
                  radius="md"
                  className="category-button"
                >
                  Mineral Products
                </Button>
              </div>
            </div>
          </div>

          
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
