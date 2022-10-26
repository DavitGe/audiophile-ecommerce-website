import styled from "styled-components";

const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 1124px) {
    max-width: 689px;
  }
  @media (max-width: 716px) {
    max-width: 100vw;
    justify-content: center;
    padding: 0 24px;
    overflow: hidden;
  }
`;

export default Container;
