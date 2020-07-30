import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import wineList from "../wine";
import ErrorPage from "./error-detail-page";
import { useHistory } from "react-router-dom";
import StarRating from "../components/star-rating";

const BackButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 5px;
  background: black;
  color: white;
`;

function DetailPage() {
  //const [details, setDetails] = useState();
  const parameter = useParams<{ wineID: string }>();
  const wine = wineList.find((wine) => {
    return wine.id === parameter.wineID;
  });

  const history = useHistory();
  function navigateToOverview() {
    history.push("/");
  }

  if (!wine) {
    return <ErrorPage />;
  }
  return (
    <>
      <BackButton onClick={navigateToOverview}>Back To Overview</BackButton>
      <img alt="" src={wine?.imagePath} height="200px" />
      <h1>{wine.name}</h1>
      <p>{wine.year}</p>
      <p>{wine.type}</p>
      <p>{wine.specialties}</p>
      <p>Vol: {wine.vol}%</p>
      <br />
      <p>{wine.description}</p>
      <h3>Price per bottle: {wine?.price}</h3>
      <br />
      {wine.reviews?.map((review) => {
        return (
          <div>
            <h4>{review.name}</h4>
            <p>{review.text}</p>
            <StarRating rating={review.rating} />
          </div>
        );
      })}
    </>
  );
}

export default DetailPage;
