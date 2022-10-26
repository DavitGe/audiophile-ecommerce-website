import React, { useState, useEffect } from "react";
import Container from "../Container";
import {
  BannerImg,
  BannerWrapper,
  InfoContainer,
  SpecialWord,
  Text,
} from "./bannerStyles";

import bestGear from "../../assets/shared/desktop/image-best-gear.jpg";
import tabletBestGear from "../../assets/shared/tablet/image-best-gear.jpg";
import mobileBestGear from "../../assets/shared/mobile/image-best-gear.jpg";

const Banner = () => {
  const [width, setWidth] = useState();
  useEffect(() => {
    function handleWindowResize() {
      const { innerWidth } = window;
      setWidth(Number(innerWidth));
    }
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
  }, []);
  return (
    <Container style={{ marginTop: width > 1124 ? 200 : 96 }}>
      <BannerWrapper>
        <BannerImg
          src={width > 508 ? tabletBestGear : mobileBestGear}
          alt="Best Gear"
          className={width > 1124 && "hidden"}
        />
        <InfoContainer>
          <h2 style={{ textTransform: "uppercase" }}>
            Bringing you the
            <br /> <SpecialWord>best</SpecialWord> audio gear
          </h2>
          <Text>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Text>
        </InfoContainer>
        <BannerImg
          src={bestGear}
          alt="Best Gear"
          className={width <= 1124 && "hidden"}
        />
      </BannerWrapper>
    </Container>
  );
};

export default Banner;
