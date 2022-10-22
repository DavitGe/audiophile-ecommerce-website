import React from "react";

import {
  LandingContainer,
  LandingBg,
  ProductContainer,
  Subtitle,
  Title,
  Text,
} from "./landingStyles";
import Button from "../../styles/Button";
import bg from "../../assets/home/desktop/image-hero.jpg";
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
  return (
    <LandingContainer>
      <Container style={containerStyles}>
        <LandingBg src={bg} />
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
