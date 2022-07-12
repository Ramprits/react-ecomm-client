import styled from "@emotion/styled";
import { categories } from "assets/data";
import React from "react";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} category={item} />
      ))}
    </Container>
  );
};

export default Categories;
