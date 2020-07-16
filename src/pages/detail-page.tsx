import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import wineList from "../wine";
import ErrorPage from "./error-detail-page";

const styledDetailPage = styled.div`
  display: flex;
  flex-direction: row;
`;

function DetailPage() {
  //const [details, setDetails] = useState();
  const parameter = useParams<{ wineID: string }>();
  const wine = wineList.find((wine) => {
    return wine.id === parameter.wineID;
  });

  if (!wine) {
    return <ErrorPage />;
  }
  return (
    <>
      <img alt="" src={wine?.imagePath} height="200px" />
      <h1>{wine.name}</h1>
      <p>{wine.year}</p>
      <p>{wine.type}</p>
      <p>{wine.specialties}</p>
      <p>Vol: {wine.vol}%</p>
      <br />
      <p>{wine.description}</p>
      <h3>Price per bottle: {wine?.price}</h3>
    </>
  );
}

export default DetailPage;
