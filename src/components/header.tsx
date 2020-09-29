import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import theme from "../theme";

const StyledHeader = styled.div`
  display: grid;
  background-color: #d2d6c5;
  @media ${(props) => theme.mediaQueries.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${(props) => theme.mediaQueries.mobile} {
    grid-template-areas: 2 1 3;
    grid-template-columns: 1fr 1fr;

    .firstItem {
      order: 1;
    }

    .secondItem {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    .thirdItem {
      order: 2;
    }
  }
`;

const StyledTitle = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
`;

const Header: FC = (props) => {
  return (
    <StyledHeader>
      <MenuItemWrapper className="firstItem">
        <p>Wine</p>
        <p>Sale</p>
      </MenuItemWrapper>
      <StyledTitle href="/" className="secondItem">
        <h1>World Of Wine</h1>
      </StyledTitle>
      <MenuItemWrapper className="thirdItem">
        <p>Types of grape</p>
        <p>Fits with..</p>
      </MenuItemWrapper>
    </StyledHeader>
  );
};

export default Header;
