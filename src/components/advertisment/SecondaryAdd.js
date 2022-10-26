import React from "react";
import Container from "../Container";
import {
  SecondaryButton,
  SecondaryContainer,
  SecondaryInfoContainer,
  SecondaryTitle,
  SecondaryWrapper,
} from "./addStyles";

const containerStyles = {
  flexDirection: "column",
};
function SecondaryAdd() {
  return (
    <Container style={containerStyles}>
      <SecondaryWrapper>
        <SecondaryContainer first={true}>
          <SecondaryInfoContainer>
            <SecondaryTitle>ZX7 SPEAKER</SecondaryTitle>
            <SecondaryButton>SEE PRODUCT</SecondaryButton>
          </SecondaryInfoContainer>
        </SecondaryContainer>
      </SecondaryWrapper>
      <SecondaryWrapper second>
        <SecondaryContainer second></SecondaryContainer>
        <SecondaryContainer second info style={{ marginBottom: 0 }}>
          <SecondaryInfoContainer>
            <SecondaryTitle>YX1 EARPHONES</SecondaryTitle>
            <SecondaryButton>SEE PRODUCT</SecondaryButton>
          </SecondaryInfoContainer>
        </SecondaryContainer>
      </SecondaryWrapper>
    </Container>
  );
}

export default SecondaryAdd;
