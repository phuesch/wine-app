import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Router, useHistory } from "react-router-dom";
import Wine from "../wine";
import LoadingSpinner from "../components/loadingSpinner";

const PageWrapper = styled.div`
  background-size: cover;
  height: 70vh;
  margin: 20px;
`;

const WineProductTile = styled.a`
  text-decoration: none;
  color: black;
  padding: 20px 0;
  transition: transform 1s;

  :hover {
    transform: scale(1.15);
  }
  /* background-image: linear-gradient(to bottom right, #ac5959, #f2e6e6); */
`;

const WineGrid = styled.div`
  display: grid;
  @media ${(props) => props.theme.mediaQueries.mobile} {
    grid-template-columns: 1fr;
  }
  @media ${(props) => props.theme.mediaQueries.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${(props) => props.theme.mediaQueries.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${(props) => props.theme.mediaQueries.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

/* const WineGrid = styled.div`
  display: grid;
  @media (min-device-width: 320px) {
    grid-template-columns: 1fr;
  }
  @media (min-device-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-device-width: 1024px) {
    grid-template-colums: 1fr 1fr 1fr;
  }
  @media (min-device-width: 2560px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
*/

const StyledOverviewWineDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

function OverviewPage() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [wineList, setWineList] = useState<Wine[]>([]);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:4000/wine/")
      .then((response) => {
        return response.json();
      })
      .then((wine) => {
        setWineList(wine);
        setLoading(false);
      });
  }, []);

  function navigateToWine(wineID: string) {
    return () => history.push("/details/" + wineID);
  }

  if (loading) {
    return <LoadingSpinner />;
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
                key={wine.id}
              >
                <img src={wine?.imagePath} alt="" height="200px" />
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
