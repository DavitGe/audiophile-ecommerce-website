import React from "react";

import styled from "styled-components";
import BackLink from "../components/BackLink";
import CheckoutForm from "../components/checkoutForm";
import Container from "../components/Container";
import Footer from "../components/footer";

const CheckoutPage = ({ data }) => {
  return (
    <CheckoutBg>
      <div
        style={{ backgroundColor: "#000", width: "100vw", height: 97 }}
      ></div>
      <Container style={{ marginTop: 64 }}>
        <BackLink />
      </Container>
      <CheckoutForm data={data} />
      <Footer style={{ marginTop: 0 }} />
    </CheckoutBg>
  );
};

const CheckoutBg = styled.div`
  background-color: #f1f1f1;
  @media (max-width: 1124px) {
    background-color: #fff;
  }
`;

export default CheckoutPage;
