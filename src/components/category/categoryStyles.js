import styled from "styled-components";

export const CategoryWrapper = styled.div`
  max-height: 284px;
  width: 350px;
`;

export const CategoryContainer = styled.div`
  background: #f1f1f1;
  border-radius: 8px;
  height: 204px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

export const CategoryImg = styled.img`
  height: 160px;
  margin-bottom: 12px;
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

export const CategoryListWrapper = styled.div`
  width: 100%;
  margin-top: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 168px;
`;
