import styled from "styled-components";

export const BannerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1124px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 445px;
  @media (max-width: 1124px) {
    text-align: center;
    width: 573px;
  }
  @media (max-width: 716px) {
    width: 100%;
  }
`;

export const SpecialWord = styled.span`
  color: #d87d4a;
`;

export const Text = styled.p`
  opacity: 0.5;
  margin-top: 32px;
`;

export const BannerImg = styled.img`
  height: 588px;
  width: 540px;
  border-radius: 8px;
  @media (max-width: 1124px) {
    white-space: nowrap;
    height: 300px;
    width: 100%;
    margin-bottom: 63px;
  }
`;
