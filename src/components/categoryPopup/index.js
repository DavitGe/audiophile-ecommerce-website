import React from "react";
import { Link } from "react-router-dom";
import {
  PopupBackground,
  PopupContainer,
  PopupWrapper,
  CategoryListWrapper,
  CategoryWrapper,
  CategoryContainer,
  CategoryImg,
  CategoryTitle,
  CategoryLinkContainer,
  CategoryLinkText,
} from "./categoryStyles";

import headphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";

const CategoryPopup = ({ closeCategoryPopup }) => {
  return (
    <div>
      <PopupBackground onClick={closeCategoryPopup}></PopupBackground>
      <PopupWrapper onClick={closeCategoryPopup}>
        <PopupContainer>
          <CategoryListWrapper>
            <CategoryWrapper>
              <CategoryContainer>
                <CategoryImg src={headphonesImg} alt="Earphones" />
                <CategoryTitle>headphones</CategoryTitle>
                <Link to="/category/headphones">
                  <CategoryLinkContainer>
                    <CategoryLinkText>Shop</CategoryLinkText>
                    <svg
                      width="8"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
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
                </Link>
              </CategoryContainer>
            </CategoryWrapper>
            <CategoryWrapper>
              <CategoryContainer>
                <CategoryImg src={speakersImg} alt="Earphones" />
                <CategoryTitle>speakers</CategoryTitle>
                <Link to="/category/speakers">
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
                </Link>
              </CategoryContainer>
            </CategoryWrapper>
            <CategoryWrapper style={{ marginBottom: 0 }}>
              <CategoryContainer>
                <CategoryImg src={earphonesImg} alt="Earphones" />
                <CategoryTitle>Earphones</CategoryTitle>
                <Link to="/category/earphones">
                  <CategoryLinkContainer>
                    <CategoryLinkText>Shop</CategoryLinkText>
                    <svg
                      width="8"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
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
                </Link>
              </CategoryContainer>
            </CategoryWrapper>
          </CategoryListWrapper>
        </PopupContainer>
      </PopupWrapper>
    </div>
  );
};

export default CategoryPopup;
