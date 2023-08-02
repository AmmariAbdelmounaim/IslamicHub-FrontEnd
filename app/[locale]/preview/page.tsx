import React from "react";
import Navbar from "./Navbar"; // Importer le composant Navbar
import Percent from "./Percent";
import SliderImage from "./Slider";

const PreviewPage = () => {
  return (
    <>
      <Navbar />
      <SliderImage />

      <Percent />

      <div>{/* Autres sections et éléments de contenu ici */}</div>
    </>
  );
};

export default PreviewPage;
