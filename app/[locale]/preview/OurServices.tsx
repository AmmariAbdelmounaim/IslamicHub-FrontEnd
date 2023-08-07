import React from "react";

function OurService() {
  return (
    <div className="py-[64px] mx-[100px] flex flex-col gap-[40px]  border-b-[2px] border-b-secondary-brown-light-active">
      <h1 className="text-primary-orange-darker font-sourceSerif text-[40px] font-normal text-center">
        Our Services
      </h1>

      <div className="flex justify-between ">
        <div className=" rounded-lg p-4 border-[2px] border-primary-orange-normal bg-secondary-brown-light shadow-dropBrown w-[380px]">
          <h2 className="text-[24px] text-center font-poppins font-medium mb-4">
            Quranic Studies and Tajweed Classes
          </h2>
          <p className="text-[18px] font-poppins font-normal text-justify text-primary-orange-darker">
            Enhance your understanding of the Holy Quran through comprehensive
            studies and Tajweed classes for all ages..
          </p>
        </div>

        <div className=" rounded-lg p-4 border-[2px] border-primary-orange-normal bg-secondary-brown-light shadow-dropBrown w-[380px]">
          <h2 className="text-[24px] text-center font-poppins font-medium mb-4">
            Quranic Studies and Tajweed Classes
          </h2>
          <p className="text-[18px] font-poppins font-normal text-justify text-primary-orange-darker">
            Enhance your understanding of the Holy Quran through comprehensive
            studies and Tajweed classes for all ages..
          </p>
        </div>

        <div className=" rounded-lg p-4 border-[2px] border-primary-orange-normal bg-secondary-brown-light shadow-dropBrown w-[380px]">
          <h2 className="text-[24px] text-center font-poppins font-medium mb-4">
            Community Outreach and Social Initiatives
          </h2>
          <p className="text-[18px] font-poppins font-normal text-justify text-primary-orange-darker">
            Engage in meaningful social initiatives and outreach programs,
            supporting..
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurService;
