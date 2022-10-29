import React from "react";
import { useParams } from "react-router-dom";
import Product from "../components/product";
import Topbar from "../components/topbar";
import Category from "../components/category";
import Banner from "../components/banner";

const CategoryPage = ({ data }) => {
  const { category } = useParams();
  let counter = 0;
  return (
    <div>
      <Topbar title={category} />
      <div>
        {data.map((product) => {
          if (product.category === category) {
            counter += 1;
            return (
              <Product
                product={product}
                isNew={counter === 1}
                reverse={!(counter % 2)}
                key={product.id}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <Category />
      <Banner />
    </div>
  );
};

export default CategoryPage;
