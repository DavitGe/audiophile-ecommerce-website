import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 36px;
  @media (max-width: 1124px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CheckoutContainer = styled.div`
  padding: 48px;
  background-color: #fff;
  width: 634px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 1124px) {
    width: 100%;
  }
`;

export const CheckoutTitle = styled.h3`
  color: #000;
  text-transform: uppercase;
  margin-top: 6px;
  margin-bottom: 42px;
`;

export const Subtitle = styled.span`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.93px;
  line-height: 25px;
  color: #d87d4a;
  text-transform: uppercase;
`;

export const ShippingContainer = styled.div`
  margin-top: 52px;
  display: flex;
  flex-direction: column;
`;

export const PaymentContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

export const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 16px;
  @media (max-width: 716px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${(props) => (props.half ? "309px" : "100%")};
  margin-top: ${(props) => (props.first ? "16px" : "24px")};
  @media (max-width: 716px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  color: ${(props) => (props.error ? "#cd2c2c" : "#000")};
  font-size: 12px;
  letter-spacing: -0.21px;
  font-weight: 700;
`;

export const Input = styled.input`
  width: 100% - 24px;
  height: 54px;
  border-radius: 8px;
  overflow: hidden;
  outline: none;
  border: 1px solid ${(props) => (props.error ? "#cd2c2c" : "#cfcfcf")};
  color: #000;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.25px;
  padding-left: 24px;
  &::placeholder {
    opacity: 0.4;
  }

  &:focus {
    border: 1px solid #d87d4a;
    caret-color: #d87d4a;
  }
`;

export const InputErrorMessage = styled.span`
  color: #cd2c2c;
  font-size: 12px;
  letter-spacing: -0.21px;
  display: ${(props) => (props.error ? "flex" : "none")};
`;

export const RadioInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RadioInput = styled.input`
  height: 20px;
  width: 20px;
  margin-left: 24px;
`;

export const RadioInputContainer = styled.div`
  width: 285px;
  height: 54px;
  border-radius: 8px;
  overflow: hidden;
  outline: none;
  border: 1px solid #cfcfcf;
  color: #000;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 716px) {
    width: 100%;
  }
`;

export const RadioInputLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.25px;
  margin-left: 16px;
`;

export const SummaryContainer = styled.div`
  padding: 32px;
  width: 286px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: max-content;
  @media (max-width: 1124px) {
    width: 100%;
    padding: 0;
  }
`;

export const SummaryTitle = styled.h6`
  color: #000;
  text-transform: uppercase;
  @media (max-width: 1124px) {
    font-size: 18px;
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  margin-top: 31px;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
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

export const Quantity = styled.span`
  color: #000;
  font-size: 15px;
  line-height: 25px;
  font-weight: 700;
  color: #000;
  opacity: 0.5;
`;

export const SummaryInfoList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 32px;
  gap: 8px;
`;
export const SummaryInfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const SummaryLabel = styled.span`
  color: #000;
  opacity: 0.5;
  text-transform: uppercase;
`;

export const SummaryPrice = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  text-align: right;
`;
