import React, { useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Head = () => {
  useEffect(() => {
    const assetsPath = process.env.PUBLIC_URL + "/assets";
  }, []);
  const assetsPath = process.env.PUBLIC_URL + "/assets";
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Events demo - React Node - Davide Balice</title>
          <link href={assetsPath + "/img/favicon.png"} rel="icon" />
         

          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          />

          <link
            href={assetsPath + "/vendor/abooprstt/css/bootstrap.min.css"}
            rel="stylesheet"
          />
          <link
            href={assetsPath + "/vendor/bootstrap-icons/bootstrap-icons.css"}
            rel="stylesheet"
          />
          <link
            href={assetsPath + "/vendor/glightbox/css/glightbox.min.css"}
            rel="stylesheet"
          />
          <link
            href={assetsPath + "/vendor/swiper/swiper-bundle.min.css"}
            rel="stylesheet"
          />
          <link href={assetsPath + "/vendor/aos/aos.css"} rel="stylesheet" />

          <link href={assetsPath + "/css/main.css"} rel="stylesheet" />
        </Helmet>
      </HelmetProvider>
    </>
  );
};

export default Head;
