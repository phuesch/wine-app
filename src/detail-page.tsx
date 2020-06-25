import React, { useState } from "react";
import WinePicture from "./wine-picture.jpg";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const styledDetailPage = styled.div`
  display: flex;
  flex-direction: row;
`;

function DetailPageUpdate() {
  //const [details, setDetails] = useState();
  const parameter = useParams<{ wineID: string }>();

  return (
    <>
      <img src={WinePicture} alt="" />
      <h1>{parameter.wineID}</h1>
      <p>
        This is an excellent wine for warm summerdays, fresh and light with a
        sprinkle of strawberrys.
      </p>
    </>
  );
}

export default DetailPageUpdate;
