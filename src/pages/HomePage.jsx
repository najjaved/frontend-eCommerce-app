import { Link } from "react-router-dom";
import { Button, Space } from "@mantine/core";
import hero from "../assets/images/herosection.jpg";

function HomePage() {
  return (
    <div className="herosection">
      <div className="imagesection">
        <img src={hero} alt="forest picture" />
      </div>
      <div className="textsection">
        <h1 className="title">Ethical Origins</h1>
        <h2 className="playfair-display">
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
          <div className="category-section">
            <div className="category-links">
              <a
                href="/products/category/Herbal%20Teas"
                className="category-link"
              >
                <div
                  className="category-image"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/pw/AP1GczOL3WpFrHX7fKqw18wJ2i8g9LdLA4a6JUvzvz9_2-DD-e2c8Jtd6NhGcBFvv89THoNC3i6P2iAo6lVLZM3y5JH6jVFKIQh_vVZMl_6XIYeS4RRo2MiWsS0rKZ6aMTU-2MGtMwEqlZIETBnzKwCxpY7YlA=w600-h400-s-no-gm?authuser=0')",
                  }}
                >
                  <span className="category-text">Herbal Teas</span>
                </div>
              </a>

              <a
                href="/products/category/Homemade%20Cosmetics"
                className="category-link"
              >
                <div
                  className="category-image"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/pw/AP1GczPXAuS523eRHQh3Aeg2XfwFOguViIIiMY-IybbfuTnSAkcxrySlORoYzMX4SLREov1AQuYWRwkO5PY7KOmlJI72GCBdG17yEMhtAVZZPExMLWOaxPusLSyYreyYj_dYn83CRHk4WotqoQggOEJtyZPD-g=w500-h333-s-no-gm?authuser=0')",
                  }}
                >
                  <span className="category-text">Homemade Cosmetics</span>
                </div>
              </a>

              <a
                href="/products/category/Herbal%20Supplements"
                className="category-link"
              >
                <div
                  className="category-image"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/pw/AP1GczOaRll89QJSaYq1sifMzvGoe49g4F0-C8brfziP59J-nAmdZqE1HsfE0946DVnWbKdD1Rq35br80SPfLtgQeNnSaLc-Yj_R-J7Ji10UaukQhBjljID52_MqBuR6CYJMfGnXPmdtnS5oP6nK7L1ezILnLg=w500-h333-s-no-gm?authuser=0')",
                  }}
                >
                  <span className="category-text">Herbal Supplements</span>
                </div>
              </a>

              <a
                href="/products/category/Mineral%20Products"
                className="category-link"
              >
                <div
                  className="category-image"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/pw/AP1GczMMCqfv802kA-qtQUVRLYTlJrnxMnNuBfJ0blE7dJmICPjgV-BnKVo52rk0e-pqodxtZJUGs5IZmauMQcNWSaI4Yk_XPadVwdybVOXVzrlHER8pINuZ-a6h-R-RkQQqmBF9E7mYwPisEhCGwWxVeH6NAQ=w500-h333-s-no-gm?authuser=0')",
                  }}
                >
                  <span className="category-text">Mineral Products</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
