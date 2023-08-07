import React from "react";

function OurService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-primary-orange-darker font-sourceSerif text-[40px] font-normal flex justify-center items-center mb-8" style={{ marginBottom: "40px" }}>
        Our Services
      </h1>

      <div className="grid grid-cols-3 gap-8">
        <div className="border rounded-lg p-4 border-2 border-primary-orange-normal bg-secondary-brown-light shadow-dropBrown">
          <h2 className="text-[24px] font-poppins font-medium mb-4">Quranic Studies and Tajweed Classes</h2>
          <p className="text-[18px] font-poppins font-normal">Enhance your understanding of the Holy Quran through comprehensive studies and Tajweed classes for all ages..</p>
        </div>

        <div className="border rounded-lg p-4 border-2 border-primary-orange-normal bg-secondary-brown-light shadow-dropBrown">
          <h2 className="text-[24px] font-poppins font-medium mb-4">Quranic Studies and Tajweed Classes</h2>
          <p className="text-[18px] font-poppins font-normal">Enhance your understanding of the Holy Quran through comprehensive studies and Tajweed classes for all ages..</p>
        </div>

        <div className="border rounded-lg p-4 border-2 border-primary-orange-normal bg-secondary-brown-light shadow-dropBrown">
          <h2 className="text-[24px] font-poppins font-medium mb-4">Community Outreach and Social Initiatives</h2>
          <p className="text-[18px] font-poppins font-normal">Engage in meaningful social initiatives and outreach programs, supporting..</p>
        </div>
      </div>
    </div>
  );
}

export default OurService;
