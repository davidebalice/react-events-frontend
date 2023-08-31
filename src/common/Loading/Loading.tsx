import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import LoaderIcon from "../../assets/images/rolling.svg";
import Spacer from "../../components/Utils/Spacer";

const Loading: React.FC = () => {
  return (
    <>
      <Container fluid className="text-center">
        <Spacer height={40} />
        <img src={LoaderIcon} alt="loading" />
        <Spacer height={40} />
      </Container>
    </>
  );
};

export default Loading;
