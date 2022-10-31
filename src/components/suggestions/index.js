import React from "react";

import { Link } from "react-router-dom";
import Container from "../Container";
import Button from "../Button";
import {
  ComponentTitle,
  DesktopImg,
  ImgBg,
  SuggestionContainer,
  SuggestionListContainer,
  SuggestionTitle,
  Wrapper,
  TabletImg,
  MobileImg,
} from "./suggestionsStyles";
const Suggestions = ({ product, data }) => {
  return (
    <Container>
      <Wrapper>
        <ComponentTitle>you may also like</ComponentTitle>
        <SuggestionListContainer>
          {product.others.map((suggestion) => {
            const suggestedEl = data.find((el) => el.slug === suggestion.slug);
            console.log("suggestedEl", suggestedEl);
            return (
              <SuggestionContainer>
                <ImgBg>
                  <DesktopImg
                    src={
                      process.env.PUBLIC_URL + suggestion.image.desktop.slice(1)
                    }
                    alt={suggestion.name}
                  />
                  <TabletImg
                    src={
                      process.env.PUBLIC_URL + suggestion.image.tablet.slice(1)
                    }
                    alt={suggestion.name}
                  />
                  <MobileImg
                    src={
                      process.env.PUBLIC_URL + suggestion.image.mobile.slice(1)
                    }
                    alt={suggestion.name}
                  />
                </ImgBg>
                <SuggestionTitle>{suggestion.name}</SuggestionTitle>
                <Button>
                  <Link
                    to={`/product/${suggestedEl.id}`}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    SEE PRODUCT
                  </Link>
                </Button>
              </SuggestionContainer>
            );
          })}
        </SuggestionListContainer>
      </Wrapper>
    </Container>
  );
};

export default Suggestions;
