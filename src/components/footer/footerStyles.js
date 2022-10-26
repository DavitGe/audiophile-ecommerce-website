import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  background-color: #000;
  margin-top: 200px;
  @media (max-width: 1124px) {
    margin-top: 96px;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding-top: 75px;
  padding-bottom: 48px;
  position: relative;
  @media (max-width: 1124px) {
    flex-direction: column;
    justify-content: start;
    padding-top: 60px;
  }
  @media (max-width: 716px) {
    align-items: center;
    text-align: center;
  }
`;

export const Line = styled.div`
  width: 101px;
  height: 4px;
  background-color: #d87d4a;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  @media (max-width: 1124px) {
    margin-top: 0;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 143px;
  height: 25px;
  background: transparent;
`;

export const Text = styled.p`
  opacity: 0.5;
  max-width: 540px;
  margin-top: 36px;
  color: #fff;
  @media (max-width: 1124px) {
    max-width: 100%;
  }
`;

export const MenuElement = styled.span`
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 25px;
  color: #fff;
  margin-right: 34px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #d87d4a;
    opacity: 0.75;
    transition: 0.4s;
  }
  @media (max-width: 716px) {
    display: inline-block;
    margin: 0;
    margin-top: 16px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 1124px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 80px;
  }
  @media (max-width: 716px) {
    flex-direction: column;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 104px;
  margin-top: 105px;
  @media (max-width: 1124px) {
    margin-top: 0;
  }
  @media (max-width: 1124px) {
    margin-top: 48px;
  }
`;

export const SocialMedia = styled.img`
  width: 24px;
  cursor: pointer;
`;

export const MobileLinksContainer = styled.div`
  margin-top: 32px;
  @media (max-width: 716px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
