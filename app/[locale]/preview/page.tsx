import React from "react";
import Navbar from "./Navbar"; // Importer le composant Navbar
import Percent from "./Percent";
import SliderImage from "./Slider";
import AboutUsIslmacCenter from "./AboutUs";
import UpCE from "./upcomingEvents";

const PreviewPage = () => {
  return (
    <>
      <Navbar />
      <SliderImage />

      <Percent percentage={22} currentAmount={20000} targetAmount={90000} />

      <AboutUsIslmacCenter />
      <UpCE />
    </>
  );
};

export default PreviewPage;
