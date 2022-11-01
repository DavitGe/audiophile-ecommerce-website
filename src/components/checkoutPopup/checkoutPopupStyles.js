import styled from "styled-components";

export const PopupBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
  z-index: 99;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
`;

export const PopupContainer = styled.div`
  background-color: #fff;
  padding: 48px;
  height: max-content;
  width: 444px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ConfirmImg = styled.img`
  width: 64px;
`;

export const ConfirmationTitle = styled.h3`
  color: #000;
  max-width: 284px;
  text-transform: uppercase;
  margin-top: 32px;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  width: 100%;
  opacity: 0.5;
  color: #000;
`;

export const OrderWrapper = styled.div`
  margin-top: 32px;
  background-color: #f1f1f1;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  height: max-content;
  width: 100%;
`;

export const OrderLeftContainer = styled.div`
  width: 246px;
  display: flex;
  flex-direction: column;
  padding-bottom: 18px;
`;
export const ProductContainer = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
`;

export const ProductDetailedContainer = styled.div`
  display: flex;
  height: 100%;
  width: max-content;
  flex-direction: row;
  gap: 16px;
`;

export const ImgBg = styled.div`
  width: 50px;
  height: 50px;
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
  line-height: 25px;
`;

export const Quantity = styled.span`
  color: #000;
  font-size: 15px;
  line-height: 25px;
  font-weight: 700;
  color: #000;
  opacity: 0.5;
`;

export const TotalContainer = styled.div`
  width: 166px;
  background-color: #000;
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.span`
  color: #fff;
  opacity: 0.5;
  text-transform: uppercase;
`;

export const GrandPrice = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;

export const ProductList = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Line = styled.div`
  width: 198px;
  margin-left: 24px;
  margin-right: 24px;
  background-color: #000;
  opacity: 0.08;
  height: 1px;
  margin-top: 16px;
  margin-bottom: 12px;
`;

export const ShowAll = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 16.4px;
  color: #000;
  opacity: 0.5;
  width: 100%;
  text-align: center;
  cursor: pointer;
`;
