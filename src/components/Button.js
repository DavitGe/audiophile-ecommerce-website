import styled from "styled-components";

const Button = styled.button`
  width: 160px;
  height: 48px;
  background-color: ${(props) => (props.bw ? "#000" : "#D87D4A")};
  color: #fff;
  transition: 0.2s;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.bw ? "#4C4C4C" : "#FBAF85")};
    transition: 0.4s;
  }
`;

export default Button;
