import styled from "styled-components";

export const PopupBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
  z-index: 99;
`;

export const PopupWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const PopupContainer = styled.div`
  z-index: 100;
  position: absolute;
  top: 97px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  padding-top: 64px;
  padding-bottom: 64px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const CategoryListWrapper = styled.div`
  width: max-content;
  display: flex;
  margin-top: 48px;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 716px) {
    flex-direction: column;
    align-items: center;
    gap: 72px;
  }
`;

export const CategoryWrapper = styled.div`
  width: 223px;
  max-height: 217px;
`;

export const CategoryContainer = styled.div`
  background: #f1f1f1;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 167px;
`;

export const CategoryImg = styled.img`
  height: 160px;
  margin-bottom: 12px;
  @media (max-width: 1124px) {
    margin-bottom: -12px;
  }
  @media (max-width: 716px) {
    margin-bottom: -16px;
  }
`;

export const CategoryTitle = styled.h6`
  text-transform: uppercase;
  color: #000;
`;

export const CategoryLinkText = styled.span`
  opacity: 0.5;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  color: #000;
  text-transform: uppercase;
  margin-right: 14px;
`;

export const CategoryLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 30px;
  cursor: pointer;
  transition: 0.2s;

  &:hover ${CategoryLinkText} {
    color: #d87d4a;
    transition: 0.2s;
    opacity: 1;
  }
`;
