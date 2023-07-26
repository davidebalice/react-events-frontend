import React, { FunctionComponent } from "react";

const Presentation: FunctionComponent = () => {
  return (
    <>
      <section id="features" className="features">
        <div className="container section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container">
          <div className="row gy-4 align-items-center features-item">
            <div
              className="col-lg-5 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>Corporis temporibus maiores provident</h3>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <a href="#" className="btn btn-get-started">
                Get Started
              </a>
            </div>
            <div
              className="col-lg-7 order-1 order-lg-2 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <div className="image-stack">
                <img
                  src="assets/img/features-light-1.jpg"
                  alt=""
                  className="stack-front"
                />
                <img
                  src="assets/img/features-light-2.jpg"
                  alt=""
                  className="stack-back"
                />
              </div>
            </div>
          </div>

          <div className="row gy-4 align-items-stretch justify-content-between features-item ">
            <div
              className="col-lg-6 d-flex align-items-center features-img-bg"
              data-aos="zoom-out"
            >
              <img
                src="assets/img/features-light-3.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div
              className="col-lg-5 d-flex justify-content-center flex-column"
              data-aos="fade-up"
            >
              <h3>Sunt consequatur ad ut est nulla</h3>
              <p>
                Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus
                quia minima quod. Sunt saepe odit aut quia voluptatem hic
                voluptas dolor doloremque.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <span>
                    {" "}
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>
                    Facilis ut et voluptatem aperiam. Autem soluta ad fugiat
                  </span>
                  .
                </li>
              </ul>
              <a href="#" className="btn btn-get-started align-self-start">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Presentation;
