import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
  width: 100%;
`;

export const ComponentTitle = styled.h3`
  color: #000;
  text-transform: uppercase;
`;

export const SuggestionListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 64px;
  @media (max-width: 716px) {
    flex-direction: column;
    gap: 56px;
  }
`;

export const SuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SuggestionTitle = styled.h5`
  color: #000;
  margin-top: 40px;
  margin-bottom: 32px;
`;

export const ImgBg = styled.div`
  display: flex;
  width: 350px;
  height: 318px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f1f1f1;
  @media (max-width: 1124px) {
    width: 223px;
    height: 318px;
  }
  @media (max-width: 716px) {
    width: 100%;
    height: 120px;
  }
`;

export const DesktopImg = styled.img`
  display: none;
  max-height: 100%;
  max-width: 100%;
  @media (min-width: 1125px) {
    display: flex;
  }
`;

export const TabletImg = styled.img`
  display: none;
  max-height: 100%;
  max-width: 100%;
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
  @media (max-width: 716px) {
    display: flex;
  }
`;
