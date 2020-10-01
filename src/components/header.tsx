import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import theme from "../theme";

const StyledHeader = styled.div`
  display: grid;
  background-color: #c9d7ca;
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

const MenuItem = styled.a`
  text-decoration: none;
  color: black;
  transition: transform 0.5s;

  :hover {
    transform: scale(1.3);
  }
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
        <MenuItem href="/">Wine</MenuItem>
        <p>Types of grape</p>
      </MenuItemWrapper>
      <StyledTitle href="/">
        <h1>World Of Wine</h1>
      </StyledTitle>
      <MenuItemWrapper gridArea="rightMenuItems">
        <p>Fits with..</p>
        <p>Sale</p>
      </MenuItemWrapper>
    </StyledHeader>
  );
};

export default Header;
