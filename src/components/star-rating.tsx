import React, { FC, ReactNode } from "react";
import { StarRegular, StarSolid } from "./stars";

interface StarRatingProps {
  rating: number;
}

const StarRating: FC<StarRatingProps> = (props) => {
  const stars: ReactNode[] = [];
  for (var currentStar = 1; currentStar <= 5; currentStar++) {
    if (currentStar <= Math.round(props.rating)) {
      stars.push(<StarSolid key={currentStar} />);
    } else {
      stars.push(<StarRegular key={currentStar} />);
    }
  }
  return <>{stars}</>;
};

export default StarRating;
