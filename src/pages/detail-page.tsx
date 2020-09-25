import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Wine from "../wine";
import ErrorPage from "./error-detail-page";
import { useHistory } from "react-router-dom";
import StarRating from "../components/star-rating";
import LoadingSpinner from "../components/loadingSpinner";

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
  const parameter = useParams<{ wineID: string }>();
  const [loading, setLoading] = useState(false);
  const [wineDetails, setWineDetails] = useState<Wine>();
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:4000/wine/" + parameter.wineID)
      .then((response) => {
        return response.json();
      })
      .then((wineDetail) => {
        setWineDetails(wineDetail);
        setLoading(false);
      });
  }, []);

  const history = useHistory();
  function navigateToOverview() {
    history.push("/");
  }

  if (loading) {
    return <LoadingSpinner />;
  } else if (!wineDetails) {
    return <ErrorPage />;
  }
  return (
    <>
      <BackButton onClick={navigateToOverview}>Back To Overview</BackButton>
      <HeroGrid>
        <img alt="" src={wineDetails?.imagePath} height="400px" />
        <HeroText>
          <div>
            <h1>{wineDetails.name}</h1>
            <p>{wineDetails.year}</p>
            <p>{wineDetails.type}</p>
            <p>{wineDetails.specialties}</p>
            <p>Vol: {wineDetails.vol}%</p>
            <h3>Price per bottle: {wineDetails?.price}</h3>
          </div>
        </HeroText>
      </HeroGrid>
      <Description>
        <p>{wineDetails.description}</p>
      </Description>
      <Review>
        {wineDetails.reviews?.map((review) => {
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
