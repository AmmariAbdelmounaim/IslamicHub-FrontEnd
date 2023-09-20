import React from "react";

interface ServiceProps {
  name?: string;
  details?: string;
}

function OurService({ name, details }: ServiceProps) {
  return (
    <div className=" rounded-lg p-4 border-[2px] border-primary-orange-normal bg-secondary-brown-light shadow-dropBrown w-[380px]">
      <h2 className="text-[24px] text-center font-poppins font-medium mb-4">
        {name ? name : "Quranic Studies and Tajweed Classes"}
      </h2>
      <p className="text-[18px] font-poppins font-normal text-center  text-primary-orange-darker">
        {details
          ? details
          : "Enhance your understanding of the Holy Quran through comprehensive studies and Tajweed classes for all ages.."}
      </p>
    </div>
  );
}

export default OurService;
