import styled from "styled-components";
import Button from "../Button";

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
  width: 313px;
  right: 0;
  top: 128px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  padding: 32px;
  @media (max-width: 716px) {
    max-width: 327px;
    width: 279px;
    padding: 28px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h5`
  color: #000;
`;

export const RemoveBtn = styled.button`
  text-decoration: underline;
  background-color: transparent;
  outline: none;
  border: none;
  color: #000;
  opacity: 0.5;
  transition: 0.2s;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    color: #d87d4a;
    opacity: 1;
    transition: 0.2s;
  }
`;

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
`;

export const CartElInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImgBg = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export const ProductTitle = styled.span`
  font-size: 15px;
  line-height: 25px;
  font-weight: 700;
  color: #000;
`;

export const Price = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #000;
  opacity: 0.5;
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

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #f1f1f1;
  width: 96px;
  height: 32px;
`;

export const Label = styled.span`
  color: #000;
  opacity: 0.5;
`;

export const TotalPrice = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: 700;
`;

export const CheckoutButton = styled(Button)`
  width: 100%;
  margin-top: 24px;
`;
