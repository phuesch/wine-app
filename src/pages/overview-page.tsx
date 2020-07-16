import React from "react";
import styled from "styled-components";
import { Router, useHistory } from "react-router-dom";
import wineList from "../wine";

const Overview = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

function OverviewPage() {
  const history = useHistory();

  function navigateToWine(wineID: string) {
    return () => history.push("/details/" + wineID);
  }

  return (
    <>
      {wineList.map((wine) => {
        return (
          <div onClick={navigateToWine(wine.id)}>
            <img src={wine?.imagePath} alt="" height="200px" />
            <p>{wine.name}</p>
          </div>
        );
      })}
    </>
  );
}

export default OverviewPage;
