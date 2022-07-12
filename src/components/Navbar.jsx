import styled from "@emotion/styled";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Languege = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  text-align: center;
  display: flex;
  margin-left: 25px;
  padding: 5px 10px;
`;
const Input = styled.input`
  border: none;
  outline: none;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  justify-content: flex-end;
  display: flex;
`;

const MenuItem = styled.div`
  display: flex;
  margin-left: 1rem;
  cursor: pointer;
  &:hover {
    color: lightgray;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Languege>EN</Languege>
          <SearchContainer>
            <Input></Input>
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Sahani.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlinedIcon color='action' />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
