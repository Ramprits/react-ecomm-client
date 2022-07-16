import styled from "@emotion/styled";
import Announcemnet from "components/Announcemnet";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Products from "components/Products";
import React from "react";

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 20px;
`;
const Filter = styled.div`
  display: flex;
`;
const FilterText = styled.h2`
  font-size: 20px;
`;

const Select = styled.select`
  margin-left: 10px;
  height: 38px;
  border-color: gray;
  border-radius: 5px;
  outline: none;
  padding: 10px;
`;
const Option = styled.option`
  font-size: 20px;
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcemnet />
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
          </Select>

          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>MD</Option>
            <Option>LG</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option disabled selected>
              Price
            </Option>
            <Option>Lowest Price</Option>
            <Option>Accending Price</Option>
            <Option>Decending Price</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default Product;
