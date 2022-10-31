import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Back = styled.button`
  opacity: 0.5;
  color: #000;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const BackLink = () => {
  const navigate = useNavigate();
  return <Back onClick={() => navigate(-1)}>Go Back</Back>;
};

export default BackLink;
