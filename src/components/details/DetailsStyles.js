import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 56px;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 716px) {
    flex-direction: column;
  }
`;

export const DetailedInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 160px;
  @media (max-width: 1124px) {
    flex-direction: column;
  }
  @media (max-width: 716px) {
    margin-top: 88px;
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
    width: 281px;
    height: 480px;
  }
  @media (max-width: 716px) {
    width: 100%;
    height: 327px;
  }
`;

export const Overline = styled.span`
  color: #d87d4a;
  display: ${(props) => (props.new ? "flex" : "none")};
  margin-bottom: 16px;
  @media (max-width: 716px) {
    margin-top: 32px;
  }
`;

export const Title = styled.h2`
  color: #000;
  text-transform: uppercase;
  @media (max-width: 716px) {
    width: 100%;
  }
`;

export const Text = styled.p`
  opacity: 0.5;
  margin-top: 32px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 445px;
  @media (max-width: 1124px) {
    max-width: 339px;
  }
`;

export const Price = styled.span`
  font-size: 18px;
  line-height: 24.5px;
  letter-spacing: 1.3px;
  font-weight: 700;
  margin-top: 32px;
  @media (max-width: 716px) {
    margin-top: 24px;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 48px;
  align-items: center;
  @media (max-width: 716px) {
    margin-top: 32px;
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #f1f1f1;
  width: 120px;
  height: 48px;
  margin-right: 20px;
`;

export const Operation = styled.button`
  color: #000;
  opacity: 0.25;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
  border: none;
  background-color: transparent;
  &:hover {
    color: #d87d4a;
    opacity: 1;
    transition: 0.2s;
  }
`;

export const Quantity = styled.span`
  color: #000;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  text-align: center;
`;

export const InfoTitle = styled.h3`
  color: #000;
  text-transform: uppercase;
`;

export const Features = styled(Text)`
  max-width: 635px;
`;

export const UnitsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  width: 350px;
`;

export const UnitsAmount = styled.span`
  font-size: 15px;
  width: 15px;
  line-height: 15px;
  height: 15px;
  margin-right: 24px;
  color: #d87d4a;
`;

export const DetailedInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1124px) {
    ${(props) =>
      props.inbox &&
      `
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 120px
    `};
  }
  @media (max-width: 716px) {
    ${(props) =>
      props.inbox &&
      `
        margin-top: 88px;
        flex-direction: column;
      `}
  }
`;

export const UnitsText = styled.p`
  opacity: 0.5;
`;

export const SmallPhotosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 445px;
  gap: 30px;
  @media (max-width: 1124px) {
    gap: 18px;
  }
  @media (max-width: 716px) {
    width: 100%;
  }
`;

export const SmallDesktopPhoto = styled.img`
  width: 100%;
  height: 280px;
  border-radius: 8px;
  overflow: hidden;
  display: none;
  @media (min-width: 1125px) {
    display: flex;
  }
`;

export const SmallTabletPhoto = styled.img`
  border-radius: 8px;
  overflow: hidden;
  display: none;
  width: 277px;
  height: 174px;
  @media (max-width: 1124px) {
    display: flex;
  }
  @media (max-width: 716px) {
    display: none;
  }
`;

export const SmallMobilePhoto = styled.img`
  border-radius: 8px;
  overflow: hidden;
  display: none;
  width: 100%;
  height: 174px;
  @media (max-width: 716px) {
    display: flex;
  }
`;

export const BigMobilePhoto = styled.img`
  border-radius: 8px;
  overflow: hidden;
  display: none;
  width: 100%;
  height: 366px;
  @media (max-width: 716px) {
    display: flex;
  }
`;

export const BigDesktopPhoto = styled.img`
  border-radius: 8px;
  overflow: hidden;
  width: 635px;
  height: 100%;
  display: none;
  @media (min-width: 1125px) {
    display: flex;
  }
`;

export const BigTabletPhoto = styled.img`
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: none;
  @media (max-width: 1124px) {
    display: flex;
  }
  @media (max-width: 716px) {
    display: none;
  }
`;

export const GalleryContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: row;
  margin-top: 160px;
  @media (max-width: 1124px) {
    gap: 18px;
  }
  @media (max-width: 716px) {
    margin-top: 88px;
    flex-direction: column;
    /* padding-left: 24px; */
    /* padding-right: 24px; */
  }
`;
