import React, { useState } from "react";
import Container from "../Container";
import Button from "../Button";
import {
  MainInfo,
  Wrapper,
  DesktopImg,
  TabletImg,
  MobileImg,
  ImgBg,
  InfoWrapper,
  Overline,
  Title,
  Text,
  Price,
  AmountContainer,
  Operation,
  Quantity,
  CartContainer,
  DetailedInfoContainer,
  DetailedInfoWrapper,
  InfoTitle,
  Features,
  UnitsContainer,
  UnitsAmount,
  UnitsText,
  GalleryContainer,
  SmallPhotosContainer,
  SmallDesktopPhoto,
  BigDesktopPhoto,
  SmallTabletPhoto,
  BigTabletPhoto,
  SmallMobilePhoto,
  BigMobilePhoto,
} from "./DetailsStyles";

const Details = ({ product }) => {
  const [amount, setAmount] = useState(1);

  const quantityAddHandler = () => {
    setAmount(amount + 1);
  };
  const quantitySubtractionHandler = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const addToCart = () => {
    const cartStr = localStorage.getItem("cart");
    if (cartStr) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const newProduct = cart.find((el) => el.id === product.id);
      if (newProduct) {
        const result = cart.map((el) => {
          if (el.id === newProduct.id) {
            return { ...newProduct, amount: el.amount + amount };
          } else {
            return el;
          }
        });
        localStorage.setItem("cart", JSON.stringify(result));
      } else {
        const result = [...cart, { id: product.id, amount: amount }];
        localStorage.setItem("cart", JSON.stringify(result));
      }
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([{ id: product.id, amount: amount }])
      );
    }
  };

  return (
    <Container>
      <Wrapper>
        <MainInfo>
          <ImgBg>
            <DesktopImg
              src={process.env.PUBLIC_URL + product.image.desktop.slice(1)}
            />
            <TabletImg
              src={process.env.PUBLIC_URL + product.image.tablet.slice(1)}
            />
            <MobileImg
              src={process.env.PUBLIC_URL + product.image.mobile.slice(1)}
            />
          </ImgBg>
          <InfoWrapper>
            <Overline className="overline" new>
              NEW PRODUCT
            </Overline>
            <Title>{product.name}</Title>
            <Text>{product.description}</Text>
            <Price>$ {product.price * amount}</Price>
            <CartContainer>
              <AmountContainer>
                <Operation
                  onClick={quantitySubtractionHandler}
                  style={{ marginRight: 5 }}
                >
                  -
                </Operation>
                <Quantity>{amount}</Quantity>
                <Operation
                  onClick={quantityAddHandler}
                  style={{ marginLeft: 5 }}
                >
                  +
                </Operation>
              </AmountContainer>
              <Button onClick={addToCart}>ADD TO CART</Button>
            </CartContainer>
          </InfoWrapper>
        </MainInfo>
        <DetailedInfoContainer>
          <DetailedInfoWrapper>
            <InfoTitle>FEATURES</InfoTitle>
            <Features>{product.features}</Features>
          </DetailedInfoWrapper>
          <DetailedInfoWrapper inbox>
            <InfoTitle style={{ marginBottom: 24 }}>in the box</InfoTitle>
            <div>
              {product.includes.map((unit) => {
                return (
                  <UnitsContainer>
                    <UnitsAmount>{unit.quantity}x</UnitsAmount>
                    <UnitsText>{unit.item}</UnitsText>
                  </UnitsContainer>
                );
              })}
            </div>
          </DetailedInfoWrapper>
        </DetailedInfoContainer>
        <GalleryContainer>
          <SmallPhotosContainer>
            <SmallDesktopPhoto
              src={
                process.env.PUBLIC_URL + product.gallery.first.desktop.slice(1)
              }
              alt={product.title}
            />
            <SmallDesktopPhoto
              src={
                process.env.PUBLIC_URL + product.gallery.second.desktop.slice(1)
              }
              alt={product.title}
            />
            <SmallTabletPhoto
              src={
                process.env.PUBLIC_URL + product.gallery.first.tablet.slice(1)
              }
              alt={product.title}
            />
            <SmallTabletPhoto
              src={
                process.env.PUBLIC_URL + product.gallery.second.tablet.slice(1)
              }
              alt={product.title}
            />
            <SmallMobilePhoto
              src={
                process.env.PUBLIC_URL + product.gallery.first.mobile.slice(1)
              }
              alt={product.title}
            />
            <SmallMobilePhoto
              src={
                process.env.PUBLIC_URL + product.gallery.second.mobile.slice(1)
              }
              alt={product.title}
            />
          </SmallPhotosContainer>
          <BigDesktopPhoto
            src={
              process.env.PUBLIC_URL + product.gallery.third.desktop.slice(1)
            }
            alt={product.title}
          />
          <BigTabletPhoto
            src={process.env.PUBLIC_URL + product.gallery.third.tablet.slice(1)}
            alt={product.title}
          />
          <BigMobilePhoto
            src={process.env.PUBLIC_URL + product.gallery.third.mobile.slice(1)}
            alt={product.title}
          />
        </GalleryContainer>
      </Wrapper>
    </Container>
  );
};

export default Details;
