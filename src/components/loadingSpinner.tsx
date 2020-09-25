import BarLoader from "react-spinners/ClipLoader";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div>
      <BarLoader size={150} color={"red"} loading={true} />
    </div>
  );
};

export default LoadingSpinner;
