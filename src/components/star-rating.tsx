import React, { FC, ReactNode } from "react";
import { Star } from "react-feather";

interface StarRatingProps {
  rating: number;
}

const StarRating: FC<StarRatingProps> = (props) => {
  const stars: ReactNode[] = [];
  for (var star = 1; star <= Math.round(props.rating); star++) {
    stars.push(<Star />);
  }
  return <>{stars}</>;
};

export default StarRating;
