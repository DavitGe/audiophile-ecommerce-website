import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Container from "../Container";
import {
  FooterContainer,
  InfoContainer,
  Wrapper,
  Text,
  Logo,
  LinksContainer,
  MenuElement,
  Line,
  SocialMediaContainer,
  SocialMedia,
  MobileLinksContainer,
} from "./footerStyles";

import logo from "../../assets/audiophile.png";
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    function handleWindowResize() {
      const { innerWidth } = window;
      setWidth(Number(innerWidth));
    }
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
  }, []);

  if (width > 1124) {
    return (
      <Wrapper>
        <Container>
          <FooterContainer>
            <Line />
            <InfoContainer>
              <Logo src={logo} />
              <Text>
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </Text>
              <Text style={{ marginTop: 20 }}>
                Copyright 2021. All Rights Reserved
              </Text>
            </InfoContainer>
            <LinksContainer>
              <div>
                <Link to="/">
                  <MenuElement>Home</MenuElement>
                </Link>
                <Link to="/category/headphones">
                  <MenuElement>headphones</MenuElement>
                </Link>
                <Link to="/category/speakers">
                  <MenuElement>speakers</MenuElement>
                </Link>
                <Link to="/category/earphones">
                  <MenuElement style={{ marginRight: 0 }}>
                    earphones
                  </MenuElement>
                </Link>
              </div>
              <SocialMediaContainer>
                <SocialMedia src={facebook} alt="#" />
                <SocialMedia src={twitter} alt="#" />
                <SocialMedia src={instagram} alt="#" />
              </SocialMediaContainer>
            </LinksContainer>
          </FooterContainer>
        </Container>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Container>
          <FooterContainer>
            <Line />
            <Logo src={logo} />
            <MobileLinksContainer>
              <Link to="/">
                <MenuElement style={{ marginTop: 0 }}>Home</MenuElement>
              </Link>
              <Link to="/headphones">
                <MenuElement>headphones</MenuElement>
              </Link>
              <Link to="/speakers">
                <MenuElement>speakers</MenuElement>
              </Link>
              <Link to="/earphones">
                <MenuElement style={{ marginRight: 0 }}>earphones</MenuElement>
              </Link>
            </MobileLinksContainer>
            <Text>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </Text>
            <LinksContainer>
              <Text style={{ marginTop: 0 }}>
                Copyright 2021. All Rights Reserved
              </Text>
              <SocialMediaContainer>
                <SocialMedia src={facebook} alt="#" />
                <SocialMedia src={twitter} alt="#" />
                <SocialMedia src={instagram} alt="#" />
              </SocialMediaContainer>
            </LinksContainer>
          </FooterContainer>
        </Container>
      </Wrapper>
    );
  }
};

export default Footer;
