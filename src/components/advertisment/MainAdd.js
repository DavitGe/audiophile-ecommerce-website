import React from "react";

import zx9 from "../../assets/home/desktop/image-speaker-zx9.png";

import Container from "../Container";
import Button from "../Button";
import {
  CirclesWrapper,
  TopContainer,
  MainAddImg,
  MainAddInfoContainer,
  MainAddTitle,
  MainAddInfo,
} from "./addStyles";

function MainAdd() {
  return (
    <Container>
      <TopContainer>
        <CirclesWrapper>
          <svg width="944" height="944" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#FFF" fill="none" fill-rule="evenodd" opacity=".202">
              <circle cx="472" cy="472" r="235.5" />
              <circle cx="472" cy="472" r="270.5" />
              <circle cx="472" cy="472" r="471.5" />
            </g>
          </svg>
        </CirclesWrapper>
        <MainAddImg src={zx9} alt="ZX-9" />
        <MainAddInfoContainer>
          <MainAddTitle>ZX9 SPEAKER</MainAddTitle>
          <MainAddInfo>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </MainAddInfo>
          <Button bw>SEE PRODUCT</Button>
        </MainAddInfoContainer>
      </TopContainer>
    </Container>
  );
}

export default MainAdd;
