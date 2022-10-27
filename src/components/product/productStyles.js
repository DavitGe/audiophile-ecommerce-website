import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${(props) => (props.reverse ? `row-reverse` : `row`)};
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

export const ImgBg = styled.div`
  width: 540px;
  height: 560px;
  background-color: #f1f1f1;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overline = styled.span`
  color: #d87d4a;
`;

export const Title = styled.h2`
  color: #000;
`;

export const Text = styled.p`
  opacity: 0.5;
`;
