import React from "react";
import Navbar from "./Navbar"; // Importer le composant Navbar
import Percent from "./Percent";
import SliderImage from "./Slider";
import AboutUsIslmacCenter from "./AboutUs";
import UpCE from "./upcomingEvents";
import OurService from "./OurServices";
import RaisingF from "./RaisingFunds";
import DonatePage from "./RaisingFNext";
import Test from "./Testimonials";

const PreviewPage = () => {
  return (
    <>
      <Navbar />
      <SliderImage />

      <Percent percentage={22} currentAmount={20000} targetAmount={90000} />

      <AboutUsIslmacCenter />
      <UpCE />
      <OurService />
      <RaisingF />
      <DonatePage/>
      <Test />
      
      
    </>
  );
};

export default PreviewPage;
