import styled from "styled-components";

import zx7 from "../../assets/home/desktop/image-speaker-zx7.jpg";
import yx1 from "../../assets/home/desktop/image-earphones-yx1.jpg";

import tabletZx7 from "../../assets/home/tablet/image-speaker-zx7.jpg";
import tabletYx1 from "../../assets/home/tablet/image-earphones-yx1.jpg";

import mobileZx7 from "../../assets/home/mobile/image-speaker-zx7.jpg";
import mobileYx1 from "../../assets/home/mobile/image-earphones-yx1.jpg";

export const TopContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #d87d4a;
  border-radius: 8px;
  width: 100%;
  height: 560px;
  overflow: hidden;
  margin-top: 168px;
  @media (max-width: 1124px) {
    flex-direction: column;
    align-items: center;
    height: 720px;
    justify-content: flex-start;
    margin-top: 96px;
  }
  @media (max-width: 716px) {
    height: 600px;
    padding: 0 24px;
  }
`;

export const CirclesWrapper = styled.div`
  position: absolute;
  margin-left: -149px;
  margin-top: -36px;
  z-index: 1;
  @media (max-width: 1124px) {
    margin: 0;
    margin-top: -40%;
  }
  @media (max-width: 716px) {
    margin-top: -121px;
  }
`;

export const MainAddImg = styled.img`
  margin-left: 117px;
  z-index: 2;
  height: 493px;
  margin-top: 96px;
  @media (max-width: 1124px) {
    height: 237px;
    width: 197px;
    margin: 0;
    margin-top: 52px;
  }
`;

export const MainAddInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  z-index: 2;
  margin-right: 95px;
  margin-top: 134px;
  @media (max-width: 1124px) {
    margin: 0;
    margin-top: 64px;
    align-items: center;
  }
`;

export const MainAddTitle = styled.h1`
  color: #fff;
  width: 100%;
  @media (max-width: 1124px) {
    text-align: center;
  }
`;

export const MainAddInfo = styled.p`
  width: 100%;
  color: #fff;
  margin-top: 24px;
  margin-bottom: 40px;
  opacity: 0.75;
  @media (max-width: 1124px) {
    text-align: center;
  }
  @media (max-width: 716px) {
    margin-bottom: 24px;
  }
`;

export const SecondaryWrapper = styled.div`
  width: 100%;
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 716px) {
    ${(props) =>
      props.second &&
      `
      flex-direction: column;
    `}
  }
`;

export const SecondaryContainer = styled.div`
  background-color: #f1f1f1;
  border-radius: 8px;
  height: 320px;
  width: ${(props) => (props.second ? "540px" : "100%")};
  display: flex;
  align-items: center;
  background-image: ${(props) =>
    props.first
      ? `url(${zx7})`
      : props.second && props.info
      ? "none"
      : `url(${yx1})`};
  @media (max-width: 1124px) {
    background-size: cover;
    background-image: ${(props) =>
      props.first
        ? `url(${tabletZx7})`
        : props.second && props.info
        ? "none"
        : `url(${tabletYx1})`};
  }
  @media (max-width: 716px) {
    background-image: ${(props) =>
      props.first
        ? `url(${mobileZx7})`
        : props.second && props.info
        ? "none"
        : `url(${mobileYx1})`};
    width: 100%;
    background-size: cover;
    ${(props) => props.second && `margin-bottom: 24px;`};
  }
`;

export const SecondaryButton = styled.button`
  background-color: transparent;
  border: 1px solid #000;
  color: #000;
  transition: 0.2s;
  width: 160px;
  height: 48px;
  margin-top: 32px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #000;
    transition: 0.3s;
  }
`;

export const SecondaryTitle = styled.h4`
  color: #000;
`;

export const SecondaryInfoContainer = styled.div`
  margin-left: 95px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1124px) {
    margin-left: 62px;
  }
  @media (max-width: 716px) {
    margin-left: 24px;
  }
`;
