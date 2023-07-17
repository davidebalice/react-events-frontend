import React from "react";

const BottomJs = () => {
  const assetsPath = process.env.PUBLIC_URL + "/assets";
  return (
    <>
      <script
        src={assetsPath + "/vendor/bootstrap/js/bootstrap.bundle.min.js"}
      ></script>
      <script
        src={assetsPath + "/vendor/glightbox/js/glightbox.min.js"}
      ></script>
      <script
        src={assetsPath + "/vendor/purecounter/purecounter_vanilla.js"}
      ></script>
      <script
        src={assetsPath + "/vendor/isotope-layout/isotope.pkgd.min.js"}
      ></script>
      <script src={assetsPath + "/vendor/swiper/swiper-bundle.min.js"}></script>
      <script src={assetsPath + "/vendor/aos/aos.js"}></script>
      <script src={assetsPath + "/vendor/php-email-form/validate.js"}></script>

      <script src={assetsPath + "/js/main.js"}></script>
    </>
  );
};

export default BottomJs;
