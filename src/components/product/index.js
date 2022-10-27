import React, { useState } from "react";

import Container from "../Container";
import { ImgBg, Wrapper } from "./productStyles";

const Product = ({ product }) => {
  console.log(process.env);
  console.log(product.image.desktop);
  return (
    <Container>
      <Wrapper>
        <ImgBg>
          <img
            src={process.env.PUBLIC_URL + product.image.desktop}
            alt={product.name}
          />
        </ImgBg>
      </Wrapper>
    </Container>
  );
};

export default Product;
