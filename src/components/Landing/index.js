import React, { useState, useEffect } from "react";

import {
  LandingContainer,
  LandingBg,
  ProductContainer,
  Subtitle,
  Title,
  Text,
} from "./landingStyles";
import Button from "../../styles/Button";
import desktopBg from "../../assets/home/desktop/image-hero.jpg";
import tabletBg from "../../assets/home/tablet/image-header.jpg";
import mobileBg from "../../assets/home/mobile/image-header.jpg";
import Container from "../../styles/Container";

const containerStyles = {
  height: "100%",
  position: "relative",
};

const buttonStyles = {
  zIndex: "1",
  marginTop: 40,
};
const Landing = () => {
  const [bg, setBg] = useState();

  useEffect(() => {
    function handleWindowResize() {
      const { innerWidth } = window;

      if (Number(innerWidth) > 768) {
        setBg(desktopBg);
      } else if (Number(innerWidth) > 375) {
        setBg(tabletBg);
      } else {
        setBg(mobileBg);
      }
    }
    if (!bg) {
      handleWindowResize();
    }
    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <LandingContainer>
      <Container style={containerStyles}>
        <LandingBg src={bg} alt=" " />
        <ProductContainer>
          <Subtitle className="overline">NEW PRODUCT</Subtitle>
          <Title>XX99 MARK II HEADPHONES</Title>
          <Text>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Text>
          <Button style={buttonStyles}>SEE PRODUCT</Button>
        </ProductContainer>
      </Container>
    </LandingContainer>
  );
};

export default Landing;
