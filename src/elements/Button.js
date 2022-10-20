import styled from "styled-components";

const Button = styled.button`
  width: 160px;
  height: 48px;
  background-color: ${(props) => (props.bw ? "#fff" : "#D87D4A")};
  border: ${(props) => (props.bw ? "1px solid #000" : "none")};
  color: ${(props) => (props.bw ? "#000" : "#fff")};
  &:hover {
    background-color: ${(props) => (props.bw ? "#000" : "#FBAF85")};
    border: ${(props) => (props.bw ? "1px solid #000" : "none")};
    color: #fff;
  }
`;

export default Button;
