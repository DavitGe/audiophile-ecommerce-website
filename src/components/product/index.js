import React from "react";

import { Link } from "react-router-dom";
import Container from "../Container";
import Button from "../Button";
import {
  ImgBg,
  Wrapper,
  DesktopImg,
  TabletImg,
  MobileImg,
  InfoWrapper,
  Overline,
  Title,
  Text,
} from "./productStyles";

const Product = ({ product, isNew, reverse, id }) => {
  return (
    <Container>
      <Wrapper reverse={reverse}>
        <ImgBg>
          <DesktopImg
            src={process.env.PUBLIC_URL + product.image.desktop.slice(1)}
            alt={product.name}
          />
          <TabletImg
            src={process.env.PUBLIC_URL + product.image.desktop.slice(1)}
            alt={product.name}
          />
          <MobileImg
            src={process.env.PUBLIC_URL + product.image.desktop.slice(1)}
            alt={product.name}
          />
        </ImgBg>
        <InfoWrapper>
          <Overline new={isNew} className="overline">
            NEW PRODUCT
          </Overline>
          <Title new={isNew}>{product.name}</Title>
          <Text>{product.description}</Text>
          <Link to={`/product/${id}`}>
            <Button>SEE PRODUCT</Button>
          </Link>
        </InfoWrapper>
      </Wrapper>
    </Container>
  );
};

export default Product;
