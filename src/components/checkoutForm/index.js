import React, { useState, useEffect } from "react";

import Container from "../Container";
import Button from "../Button";
import CheckoutPopup from "../checkoutPopup";
import {
  CheckoutContainer,
  CheckoutTitle,
  HorizontalContainer,
  InputContainer,
  Label,
  PaymentContainer,
  ShippingContainer,
  Subtitle,
  SummaryContainer,
  Wrapper,
  Input,
  InputErrorMessage,
  RadioInputContainer,
  RadioInputs,
  RadioInput,
  RadioInputLabel,
  SummaryTitle,
  ProductList,
  ProductContainer,
  ImgBg,
  Img,
  ProductInfoContainer,
  ProductTitle,
  Price,
  Quantity,
  SummaryInfoContainer,
  SummaryLabel,
  SummaryPrice,
  SummaryInfoList,
} from "./checkoutStyles";
const CheckoutForm = ({ data }) => {
  const [width, setWidth] = useState();
  const [mailValue, setMailValue] = useState("");
  const [mailError, setMailError] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [checkoutPopup, setCheckoutPopup] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      const { innerWidth } = window;
      setWidth(innerWidth);
    }
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
  }, []);

  const closePopup = () => {
    setCheckoutPopup(false);
  };
  const productIds = JSON.parse(localStorage.getItem("cart"));
  const products = data.filter((product) =>
    productIds.find((el) => el.id === product.id)
  );

  const total = products.reduce((sum, product) => {
    const temp = productIds.find((el) => el.id === product.id);
    return sum + product.price * temp.amount;
  }, 0);

  const grandTotal = total + 50 + 1079;

  const mailInputHandler = (e) => {
    setMailValue(e.target.value);
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleInputBlur = () => {
    setMailError(!isValidEmail(mailValue));
  };

  const handleRadioButton = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div>
      {checkoutPopup && (
        <CheckoutPopup
          closePopup={closePopup}
          grandTotal={grandTotal}
          products={products}
          productIds={productIds}
        />
      )}
      <Container>
        <Wrapper>
          <CheckoutContainer>
            <CheckoutTitle>Checkout</CheckoutTitle>
            <Subtitle>Billing details</Subtitle>
            <HorizontalContainer>
              <InputContainer half first>
                <Label>Name</Label>
                <Input placeholder="Alexei Ward" />
              </InputContainer>
              <InputContainer half first>
                <HorizontalContainer style={{ flexDirection: "row" }}>
                  <Label error={mailError}>Email Address</Label>
                  <InputErrorMessage error={mailError}>
                    Wrong format
                  </InputErrorMessage>
                </HorizontalContainer>
                <Input
                  error={mailError}
                  placeholder="alexei@mail.com"
                  onBlur={handleInputBlur}
                  value={mailValue}
                  onChange={mailInputHandler}
                />
              </InputContainer>
            </HorizontalContainer>
            <InputContainer half>
              <Label>Phone Number</Label>
              <Input placeholder="+1 202-555-0136" />
            </InputContainer>
            <ShippingContainer>
              <Subtitle>Shipping info</Subtitle>
              <InputContainer first>
                <Label>Address</Label>
                <Input placeholder="1137 Williams Avenue" />
              </InputContainer>
              <HorizontalContainer>
                <InputContainer half>
                  <Label>ZIP Code</Label>
                  <Input placeholder="10001" />
                </InputContainer>
                <InputContainer half>
                  <Label>City</Label>
                  <Input placeholder="New York" />
                </InputContainer>
              </HorizontalContainer>
              <InputContainer half>
                <Label>Country</Label>
                <Input placeholder="United States" />
              </InputContainer>
            </ShippingContainer>
            <PaymentContainer>
              <Subtitle>Payment details</Subtitle>
              <HorizontalContainer style={{ marginTop: 16 }}>
                <Label>Payment Method</Label>
                <RadioInputs>
                  <RadioInputContainer
                    style={
                      paymentMethod === "e-Money"
                        ? {
                            border: "1px solid #d87d4a",
                          }
                        : null
                    }
                  >
                    <RadioInput
                      type="radio"
                      name="payment"
                      value="e-Money"
                      onChange={handleRadioButton}
                    />
                    <RadioInputLabel>e-Money</RadioInputLabel>
                  </RadioInputContainer>
                  <RadioInputContainer
                    style={
                      paymentMethod === "Cash on Delivery"
                        ? {
                            border: "1px solid #d87d4a",
                          }
                        : null
                    }
                  >
                    <RadioInput
                      type="radio"
                      name="payment"
                      value="Cash on Delivery"
                      onChange={handleRadioButton}
                    />
                    <RadioInputLabel>Cash on Delivery</RadioInputLabel>
                  </RadioInputContainer>
                </RadioInputs>
              </HorizontalContainer>
            </PaymentContainer>
          </CheckoutContainer>
          <SummaryContainer>
            <SummaryTitle>Summary</SummaryTitle>
            <ProductList>
              {products.map((product) => {
                const temp = productIds.find((el) => el.id === product.id);
                const amount = temp.amount;
                return (
                  <ProductContainer>
                    <ImgBg>
                      <Img
                        src={
                          process.env.PUBLIC_URL + product.image.mobile.slice(1)
                        }
                      />
                    </ImgBg>
                    <ProductInfoContainer>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <ProductTitle>{product.name.slice(0, 4)}</ProductTitle>
                        <Price>${product.price * amount}</Price>
                      </div>
                      <Quantity>x{amount}</Quantity>
                    </ProductInfoContainer>
                  </ProductContainer>
                );
              })}
            </ProductList>
            <SummaryInfoList>
              <SummaryInfoContainer>
                <SummaryLabel>Total</SummaryLabel>
                <SummaryPrice>
                  $
                  {total.toString().length > 3
                    ? total.toString().slice(0, -3) +
                      "," +
                      total.toString().slice(total.toString().length - 3)
                    : total}
                </SummaryPrice>
              </SummaryInfoContainer>
              <SummaryInfoContainer>
                <SummaryLabel>Shipping</SummaryLabel>
                <SummaryPrice>$50</SummaryPrice>
              </SummaryInfoContainer>
              <SummaryInfoContainer>
                <SummaryLabel>VAT (Included)</SummaryLabel>
                <SummaryPrice>$1,079</SummaryPrice>
              </SummaryInfoContainer>
              <SummaryInfoContainer style={{ marginTop: 16 }}>
                <SummaryLabel>Grand Total</SummaryLabel>
                <SummaryPrice style={{ color: "#d87D4A" }}>
                  $
                  {grandTotal.toString().length > 3
                    ? grandTotal.toString().slice(0, -3) +
                      "," +
                      grandTotal
                        .toString()
                        .slice(grandTotal.toString().length - 3)
                    : grandTotal}
                </SummaryPrice>
              </SummaryInfoContainer>
            </SummaryInfoList>
            <Button
              style={{ width: "100%" }}
              onClick={() => setCheckoutPopup(true)}
            >
              {Number(width) > 1124 ? "Continue" : "Continue & Pay"}
            </Button>
          </SummaryContainer>
        </Wrapper>
      </Container>
    </div>
  );
};

export default CheckoutForm;
