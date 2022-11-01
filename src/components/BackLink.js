import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Back = styled.button`
  opacity: 0.5;
  color: #000;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #d87d4a;
    opacity: 1;
    transition: 0.2s;
  }
`;

const BackLink = () => {
  const navigate = useNavigate();
  return <Back onClick={() => navigate(-1)}>Go Back</Back>;
};

export default BackLink;
