import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import theme from "../theme";

const StyledHeader = styled.div`
  display: grid;
  background-color: #d2d6c5;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-areas:
    "title title"
    "leftMenuItems rightMenuItems";

  @media ${(props) => theme.mediaQueries.laptop} {
    grid-template-areas: "leftMenuItems title rightMenuItems";
    /* grid-template-areas: 2 1 3;
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
  /* @media ${(props) => theme.mediaQueries.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }  */
  }
`;

const StyledTitle = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: title;
`;

interface MenuItemWrapperProps {
  gridArea: "leftMenuItems" | "rightMenuItems";
}

const MenuItemWrapper = styled.div<MenuItemWrapperProps>`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  grid-area: ${(props) => props.gridArea};
`;

const Header: FC = () => {
  return (
    <StyledHeader>
      <MenuItemWrapper gridArea="leftMenuItems">
        <p>Wine</p>
        <p>Sale</p>
      </MenuItemWrapper>
      <StyledTitle href="/">
        <h1>World Of Wine</h1>
      </StyledTitle>
      <MenuItemWrapper gridArea="rightMenuItems">
        <p>Types of grape</p>
        <p>Fits with..</p>
      </MenuItemWrapper>
    </StyledHeader>
  );
};

export default Header;
