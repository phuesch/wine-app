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
  grid-template-columns: 1fr 1fr;
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
  padding: 100px;
  font-size: 25px;
`;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Review = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
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
        <img alt="" src={wineDetails?.imagePath} height="400px" width="100%" />
        <HeroText>
          <div>
            <h1>{wineDetails.name}</h1>
            <h3>{wineDetails.year}</h3>
            <h3>{wineDetails.type}</h3>
            <h3>{wineDetails.specialties}</h3>
            <p>Vol: {wineDetails.vol}%</p>
            <h2>Price per bottle: {wineDetails?.price}</h2>
          </div>
        </HeroText>
      </HeroGrid>
      <Description>
        <p>{wineDetails.description}</p>
      </Description>
      <ReviewGrid>
        {wineDetails.reviews?.map((review, reviewIndex) => {
          const image = (
            <img
              src={wineDetails.reviewPictures?.[reviewIndex].imagePath}
              height="400px"
              width="100%"
            />
          );
          const reviewComponent = (
            <Review>
              <h4>{review.name}</h4>
              <p>{review.text}</p>
              <div>
                <StarRating rating={review.rating} />
              </div>
              <p>{review.rating}</p>
            </Review>
          );
          return reviewIndex % 2 ? (
            <>
              {reviewComponent}
              {image}
            </>
          ) : (
            <>
              {image}
              {reviewComponent}
            </>
          );
        })}
      </ReviewGrid>
    </>
  );
}

export default DetailPage;
