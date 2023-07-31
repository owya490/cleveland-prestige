import React, { useEffect } from "react";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import GalleryCarousel from "../components/GalleryCarousel";

import ServicesCarousel from "../components/ServicesCarousel";
import AboutBanner from "../components/AboutBanner";
import { delay } from "../services/utilities";
const HomePage = () => {
  const ABOUT_DELAY = 750;

  useEffect(() => {
    console.log(window.location.href);
    if (window.location.href.indexOf("about") > -1) {
      delay(ABOUT_DELAY).then(() => {
        const about = document.getElementById("about");
        about?.scrollIntoView({ behavior: "smooth" });
      });
    }
  });

  return (
    <div style={{ backgroundColor: "black" }}>
      <HeroBanner />
      <div id="about"></div>
      <div className="mt-16 md:mt-32">
        <AboutBanner />
      </div>
      <div className="my-32">
        <ServicesCarousel />
      </div>
    </div>
  );
};

export default HomePage;
