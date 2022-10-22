import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: transparent;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 10;
`;

export const Logo = styled.img`
  width: 143px;
  height: 25px;
  background: transparent;
`;

export const MenuElement = styled.span`
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 2px;
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
`;
