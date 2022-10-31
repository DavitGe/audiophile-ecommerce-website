import React from "react";
import { useParams } from "react-router-dom";
import BackLink from "../components/BackLink";
import Container from "../components/Container";
import Details from "../components/details";
import { BlackBgForHeader } from "../components/header/headerStyles";
import Suggestions from "../components/suggestions";
import Category from "../components/category";
import Banner from "../components/banner";

const ProductPage = ({ data }) => {
  const { id } = useParams();
  const product = data.find((el) => el.id === Number(id));
  return (
    <div>
      <BlackBgForHeader />
      <Container style={{ marginTop: 80 }}>
        <BackLink />
      </Container>
      <Details product={product} />
      <Suggestions product={product} data={data} />
      <Category />
      <Banner />
    </div>
  );
};

export default ProductPage;
