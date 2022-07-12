import styled from "@emotion/styled";
import React from "react";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background-color: teal;
  color: lightgray;
  font-weight: 500;
`;

const Announcemnet = () => {
  return <Container>Super deal! Free shipping on order over $50 !</Container>;
};

export default Announcemnet;
