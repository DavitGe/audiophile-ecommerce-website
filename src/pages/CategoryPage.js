import React from "react";
import { useParams } from "react-router-dom";
import Product from "../components/product";
import Topbar from "../components/topbar";

const CategoryPage = ({ data }) => {
  const { category } = useParams();
  return (
    <div>
      <Topbar title={category} />
      <Product product={data[1]} />
    </div>
  );
};

export default CategoryPage;
