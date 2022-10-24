import React from "react";
import Container from "../../styles/Container";
import {
  CategoryContainer,
  CategoryImg,
  CategoryLinkContainer,
  CategoryLinkText,
  CategoryTitle,
  CategoryWrapper,
  CategoryListWrapper,
} from "./categoryStyles";

import headphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";

function Category() {
  return (
    <Container>
      <CategoryListWrapper>
        <CategoryWrapper>
          <CategoryContainer>
            <CategoryImg src={headphonesImg} alt="Earphones" />
            <CategoryTitle>headphones</CategoryTitle>
            <CategoryLinkContainer>
              <CategoryLinkText>Shop</CategoryLinkText>
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </CategoryLinkContainer>
          </CategoryContainer>
        </CategoryWrapper>
        <CategoryWrapper>
          <CategoryContainer>
            <CategoryImg src={speakersImg} alt="Earphones" />
            <CategoryTitle>speakers</CategoryTitle>
            <CategoryLinkContainer>
              <CategoryLinkText>Shop</CategoryLinkText>
              <svg
                width="8"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                style={{ opacity: 1 }}
              >
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </CategoryLinkContainer>
          </CategoryContainer>
        </CategoryWrapper>
        <CategoryWrapper>
          <CategoryContainer>
            <CategoryImg src={earphonesImg} alt="Earphones" />
            <CategoryTitle>Earphones</CategoryTitle>
            <CategoryLinkContainer>
              <CategoryLinkText>Shop</CategoryLinkText>
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </CategoryLinkContainer>
          </CategoryContainer>
        </CategoryWrapper>
      </CategoryListWrapper>
    </Container>
  );
}

export default Category;
