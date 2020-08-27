import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 40px;
  background: grey;
`;

const StyledTitle = styled.a`
  text-decoration: none;
  color: black;
`;

const Header: FC = (props) => {
  return (
    <StyledHeader>
      <p>Wine</p>
      <p>Sale</p>
      <StyledTitle href="/">
        <h1>World Of Wine</h1>
      </StyledTitle>
      <p>Types of grape</p>
      <p>Fits with..</p>
    </StyledHeader>
  );
};

export default Header;
