import React, { useEffect, FunctionComponent } from "react";

const Hero: FunctionComponent = () => {
  const assetsPath = process.env.PUBLIC_URL + "/assets";
  return (
    <section id="hero" className="hero">
      <img src={assetsPath + "/img/hero-bg.jpg"} alt="" data-aos="fade-in" />

      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h2 data-aos="fade-up" data-aos-delay="100">
              Welcome to Our Website
            </h2>
            <p data-aos="fade-up" data-aos-delay="200">
              We are team of talented designers making websites with Bootstrap
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
