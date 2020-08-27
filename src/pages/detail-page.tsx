import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import wineList from "../wine";
import ErrorPage from "./error-detail-page";
import { useHistory } from "react-router-dom";
import StarRating from "../components/star-rating";

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
`;

const HeroText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Description = styled.p`
  max-width: 650px;
  margin: 0 auto;
`;

const Review = styled.div`
  max-width: 650px;
  margin: 0 auto;
`;

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
      <HeroGrid>
        <img alt="" src={wine?.imagePath} height="400px" />
        <HeroText>
          <div>
            <h1>{wine.name}</h1>
            <p>{wine.year}</p>
            <p>{wine.type}</p>
            <p>{wine.specialties}</p>
            <p>Vol: {wine.vol}%</p>
            <h3>Price per bottle: {wine?.price}</h3>
          </div>
        </HeroText>
      </HeroGrid>
      <Description>
        <p>{wine.description}</p>
      </Description>
      <Review>
        {wine.reviews?.map((review) => {
          return (
            <div>
              <h4>{review.name}</h4>
              <p>{review.text}</p>
              <StarRating rating={review.rating} />
              <p>{review.rating}</p>
            </div>
          );
        })}
      </Review>
    </>
  );
}

export default DetailPage;
