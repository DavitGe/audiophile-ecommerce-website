import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${(props) => (props.reverse ? `row-reverse` : `row`)};
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  margin-top: 160px;
  @media (max-width: 1124px) {
    flex-direction: column;
  }
`;

export const ImgBg = styled.div`
  width: 540px;
  height: 560px;
  background-color: #f1f1f1;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 1124px) {
    width: 100%;
    height: 352px;
  }
`;

export const Overline = styled.span`
  color: #d87d4a;
  display: ${(props) => (props.new ? "flex" : "none")};
  margin-bottom: 16px;
  @media (max-width: 1124px) {
    margin-top: 52px;
  }
`;

export const Title = styled.h2`
  color: #000;
  text-transform: uppercase;
  @media (max-width: 1124px) {
    ${(props) => !props.new && "margin-top: 52px"}
  }
`;

export const Text = styled.p`
  opacity: 0.5;
  margin-top: 32px;
  margin-bottom: 40px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 445px;
  @media (max-width: 1124px) {
    align-items: center;
    text-align: center;
  }
`;

export const DesktopImg = styled.img`
  display: none;
  height: 100%;
  width: 100%;
  @media (min-width: 1125px) {
    display: flex;
  }
`;

export const TabletImg = styled.img`
  display: none;
  height: 100%;
  @media (max-width: 1124px) {
    display: flex;
  }
  @media (max-width: 716px) {
    display: none;
  }
`;

export const MobileImg = styled.img`
  display: none;
  height: 100%;
  @media (min-width: 100px) {
    display: flex;
  }
  @media (min-width: 717px) {
    display: none;
  }
`;
