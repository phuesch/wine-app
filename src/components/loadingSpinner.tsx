import BarLoader from "react-spinners/BarLoader";
import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  padding: 400px;
`;

const LoadingSpinner = () => {
  return (
    <StyledLoader>
      <BarLoader color={"black"} loading={true} width={"400px"} />
    </StyledLoader>
  );
};

export default LoadingSpinner;
