import React from "react";
import Navbar from "./Navbar"; // Importer le composant Navbar
import Slide from "./Slider"; // Importer le composant Slide
import Percent from "./Percent"
import Slider from "react-slick";

const PreviewPage = () => {
  return (  <div>
    <Navbar />
    {/*<Slider/>*/} 
    <Percent />
   
    <div>
      {/* Autres sections et éléments de contenu ici */}
    </div>
  </div>
);
};

export default PreviewPage;
