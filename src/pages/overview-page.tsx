import React from "react";
import styled from "styled-components";
import { Router, useHistory } from "react-router-dom";
import wineList from "../wine";

const PageWrapper = styled.div`
  background-size: cover;
  height: 100vh;
  margin: 20px;
`;

const WineProductTile = styled.a`
  text-decoration: none;
  color: black;
  transition: transform 1s;

  :hover {
    transform: scale(1.15);
  }
  /* background-image: linear-gradient(to bottom right, #ac5959, #f2e6e6); */
`;

const WineGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const StyledOverviewWineDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function OverviewPage() {
  const history = useHistory();

  function navigateToWine(wineID: string) {
    return () => history.push("/details/" + wineID);
  }

  return (
    <>
      <PageWrapper>
        <WineGrid>
          {wineList.map((wine) => {
            return (
              <WineProductTile
                onClick={navigateToWine(wine.id)}
                href={"/details/" + wine.id}
              >
                <img src={wine?.imagePath} alt="" height="300px" />
                <StyledOverviewWineDetails>
                  <h2>{wine.name}</h2>
                  <p>{wine.description}</p>
                  <h3>{wine.price}</h3>
                </StyledOverviewWineDetails>
              </WineProductTile>
            );
          })}
        </WineGrid>
      </PageWrapper>
    </>
  );
}

export default OverviewPage;
