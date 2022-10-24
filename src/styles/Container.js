import styled from "styled-components";

const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  display: flex;
  @media (max-width: 768px) {
    max-width: 689px;
  }
  @media (max-width: 375px) {
    width: 100vw;
    justify-content: center;
  }
`;

export default Container;
