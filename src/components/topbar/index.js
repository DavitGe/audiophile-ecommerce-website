import React from "react";
import { CategoryTitle, Wrapper } from "./topbarStyles";

const Topbar = ({ title }) => {
  return (
    <Wrapper>
      <CategoryTitle>{title}</CategoryTitle>
    </Wrapper>
  );
};

export default Topbar;
