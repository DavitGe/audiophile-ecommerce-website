import styled from "styled-components";

export const LandingContainer = styled.div`
  width: 100vw;
  height: 729px;
  background-color: #191919;
  /* background-color: #fff; */
`;
export const LandingBg = styled.img`
  height: 100%;
  position: absolute;
  right: 0;
  margin-right: -164px;
  @media (max-width: 768px) {
    margin-right: 0;
    right: 50%;
    transform: translate(50%, 0);
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding-top: 225px;
  @media (max-width: 768px) {
    align-items: center;
    margin: 0 auto;
  }
`;

export const Subtitle = styled.span`
  color: #fff;
  opacity: 0.5;
`;

export const Title = styled.h1`
  width: 396px;
  color: #fff;
  z-index: 1;
  margin-top: 24px;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  width: 349px;
  opacity: 0.75;
  color: #fff;
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 375px) {
    width: 328px;
  }
`;
