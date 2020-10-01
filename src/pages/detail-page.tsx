import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import Wine from "../wine";
import ErrorPage from "./error-detail-page";
import StarRating from "../components/star-rating";
import LoadingSpinner from "../components/loadingSpinner";

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  overflow: hidden;
`;

const HeroButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const HeroImage = styled.div<{ imagePath: string }>`
  background-image: url(${(props) => props.imagePath});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

const HeroText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 200px;
`;

const DescriptionWrapper = styled.div`
  background: rgba(243, 244, 239, 0.75);
  padding: 150px;
`;

const Description = styled.p`
  font-size: 25px;
  text-align: center;
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
  background: black;
  color: white;
`;

function DetailPage() {
  const parameter = useParams<{ wineID: string }>();
  const [loading, setLoading] = useState(false);
  const [wineDetails, setWineDetails] = useState<Wine>();
  const history = useHistory();
  function navigateToOverview() {
    history.push("/");
  }
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

  if (loading) {
    return <LoadingSpinner />;
  } else if (!wineDetails) {
    return <ErrorPage />;
  }
  return (
    <>
      <HeroGrid>
        <div>
          <HeroImage imagePath={wineDetails.productImage} />
        </div>
        <div>
          <HeroButton>
            <BackButton onClick={navigateToOverview}>
              Back To Overview
            </BackButton>
          </HeroButton>
          <HeroText>
            <div>
              <img src={wineDetails?.imagePath} height="200px" />
              <h1>{wineDetails.name}</h1>
              <p>{wineDetails.year}</p>
              <h3>{wineDetails.type}</h3>
              <h4>{wineDetails.specialties}</h4>
              <p>Vol: {wineDetails.vol}%</p>
              <p>Price per bottle: {wineDetails?.price}</p>
            </div>
          </HeroText>
        </div>
      </HeroGrid>
      <DescriptionWrapper>
        <Description>
          <p>{wineDetails.description}</p>
        </Description>
      </DescriptionWrapper>
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
              {image}
              {reviewComponent}
            </>
          ) : (
            <>
              {reviewComponent}
              {image}
            </>
          );
        })}
      </ReviewGrid>
    </>
  );
}

export default DetailPage;
