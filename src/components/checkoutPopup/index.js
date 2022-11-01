import React, { useState, useEffect } from "react";

import confirmationIcon from "../../assets/checkout/icon-order-confirmation.svg";
import Button from "../Button";
import {
  ConfirmationTitle,
  ConfirmImg,
  GrandPrice,
  Img,
  ImgBg,
  Label,
  Line,
  OrderLeftContainer,
  OrderWrapper,
  PopupBackground,
  PopupContainer,
  PopupWrapper,
  Price,
  ProductContainer,
  ProductDetailedContainer,
  ProductList,
  ProductTitle,
  Quantity,
  ShowAll,
  Text,
  TotalContainer,
} from "./checkoutPopupStyles";

const CheckoutPopup = ({ closePopup, grandTotal, products, productIds }) => {
  const [showAll, setShowAll] = useState(false);
  const productsList = products.map((product) => {
    return {
      image: product.image.mobile.slice(1),
      name: product.name.slice(0, 4),
      price: product.price,
      amount: productIds.find((el) => el.id === product.id).amount,
      id: product.id,
    };
  });
  return (
    <div>
      <PopupBackground onClick={closePopup}></PopupBackground>
      <PopupWrapper>
        <PopupContainer>
          <ConfirmImg src={confirmationIcon} alt="Order Confirmed!" />
          <ConfirmationTitle>Thank you for your order</ConfirmationTitle>
          <Text>You will receive an email confirmation shortly.</Text>
          <OrderWrapper>
            <OrderLeftContainer>
              {!showAll ? (
                <ProductContainer style={{ marginTop: 24 }}>
                  <ProductDetailedContainer>
                    <ImgBg>
                      <Img
                        src={process.env.PUBLIC_URL + productsList[0].image}
                        alt={productsList[0].name}
                      />
                    </ImgBg>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <ProductTitle>XX99</ProductTitle>
                      <Price>
                        ${productsList[0].price * productsList[0].amount}
                      </Price>
                    </div>
                  </ProductDetailedContainer>
                  <Quantity>x{productsList[0].amount}</Quantity>
                </ProductContainer>
              ) : (
                <ProductList style={{ marginTop: 24 }}>
                  {productsList.map((product) => {
                    return (
                      <ProductContainer key={product.id}>
                        <ProductDetailedContainer>
                          <ImgBg>
                            <Img
                              src={process.env.PUBLIC_URL + product.image}
                              alt={product.name}
                            />
                          </ImgBg>
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <ProductTitle>XX99</ProductTitle>
                            <Price>${product.price * product.amount}</Price>
                          </div>
                        </ProductDetailedContainer>
                        <Quantity>x{product.amount}</Quantity>
                      </ProductContainer>
                    );
                  })}
                </ProductList>
              )}

              <Line />
              <ShowAll onClick={() => setShowAll(!showAll)}>
                {showAll
                  ? "View Less"
                  : "and " + (products.length - 1) + " other item(s)"}
              </ShowAll>
            </OrderLeftContainer>
            <TotalContainer>
              <Label>Grand Total</Label>
              <GrandPrice>
                $
                {grandTotal.toString().length > 3
                  ? grandTotal.toString().slice(0, -3) +
                    "," +
                    grandTotal
                      .toString()
                      .slice(grandTotal.toString().length - 3)
                  : grandTotal}
              </GrandPrice>
            </TotalContainer>
          </OrderWrapper>
          <Button style={{ width: "100%", marginTop: 46 }} onClick={closePopup}>
            BACK TO HOME
          </Button>
        </PopupContainer>
      </PopupWrapper>
    </div>
  );
};

export default CheckoutPopup;
