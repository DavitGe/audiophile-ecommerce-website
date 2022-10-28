import React, { useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import { ImgBg, Wrapper } from "./productStyles";

const StyledTest = styled.p`
  .red {
    color: #fff;
  }
`;

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
          <StyledTest>black</StyledTest>
          <StyledTest className="red">red</StyledTest>
        </ImgBg>
      </Wrapper>
    </Container>
  );
};

export default Product;
