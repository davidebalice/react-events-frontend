import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import LoaderIcon from "../../assets/images/rolling.svg";

const LoadingHome: React.FC = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 1000);
  }, []);

  return (
    <>
      <Container
        id="preloader"
        fluid
        className="text-center"
        style={{
          opacity: fadeOut ? 0 : 1,
          transition: "opacity 1s",
          display: fadeOut ? "none" : "flex",
        }}
      >
        <img src={LoaderIcon} alt="loading" />
      </Container>
    </>
  );
};

export default LoadingHome;
