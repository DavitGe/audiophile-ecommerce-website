import React, { useState, useEffect } from "react";
import Container from "../Container";
import {
  AmountContainer,
  CartElInfo,
  CartList,
  HorizontalContainer,
  Img,
  ImgBg,
  Operation,
  PopupBackground,
  PopupContainer,
  PopupWrapper,
  Price,
  ProductTitle,
  Quantity,
  RemoveBtn,
  Title,
  Label,
  TotalPrice,
  CheckoutButton,
} from "./cartPopupStyles";

const CartPopup = ({ data, closeCartPopup }) => {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
    const items = data.map((item) => {
      const temp = cartData.find((el) => el.id === item.id);
      if (temp) {
        return { ...item, amount: temp.amount };
      } else {
        return null;
      }
    });

    const tempTotal = items.reduce(function (sum, item) {
      if (item) {
        return sum + Number(item.price * item.amount);
      } else {
        return sum;
      }
    }, 0);

    setTotal(tempTotal);
  }, [cartData]);

  const CartElement = ({ product, quantity }) => {
    const [amount, setAmount] = useState(quantity);

    const quantityAddHandler = () => {
      const result = cartData.map((el) => {
        if (el.id === product.id) {
          return { ...el, amount: amount + 1 };
        } else {
          return el;
        }
      });
      setAmount(amount + 1);
      setCartData(result);
    };
    const quantitySubtractionHandler = () => {
      if (amount > 1) {
        const result = cartData.map((el) => {
          if (el.id === product.id) {
            return { ...el, amount: amount - 1 };
          } else {
            return el;
          }
        });
        setAmount(amount - 1);
        setCartData(result);
      }
    };

    return (
      <CartElInfo>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <ImgBg>
            <Img src={process.env.PUBLIC_URL + product.image.mobile.slice(1)} />
          </ImgBg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ProductTitle>{product.name.slice(0, 4)}</ProductTitle>
            <Price>${product.price * amount}</Price>
          </div>
        </div>
        <AmountContainer>
          <Operation onClick={quantitySubtractionHandler}>-</Operation>
          <Quantity>{amount}</Quantity>
          <Operation onClick={quantityAddHandler}>+</Operation>
        </AmountContainer>
      </CartElInfo>
    );
  };

  const removeHandler = () => {
    setCartData([]);
    localStorage.removeItem("cart");
  };

  const checkoutHandler = () => {
    closeCartPopup();
  };

  return (
    <div>
      <PopupBackground onClick={closeCartPopup}></PopupBackground>
      <Container style={{ overflow: "visible" }}>
        <PopupWrapper>
          <PopupContainer>
            <HorizontalContainer>
              <Title>Cart ({cartData.length})</Title>
              <RemoveBtn onClick={removeHandler}>Remove All</RemoveBtn>
            </HorizontalContainer>
            <CartList>
              {cartData.map((el) => {
                const product = data.find((e) => e.id === el.id);
                if (product) {
                  return (
                    <CartElement
                      product={product}
                      quantity={el.amount}
                      key={product.id}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </CartList>
            <HorizontalContainer style={{ marginTop: "32px" }}>
              <Label>TOTAL</Label>
              <TotalPrice>${total}</TotalPrice>
            </HorizontalContainer>
            <CheckoutButton onClick={checkoutHandler}>CHECKOUT</CheckoutButton>
          </PopupContainer>
        </PopupWrapper>
      </Container>
    </div>
  );
};

export default CartPopup;
