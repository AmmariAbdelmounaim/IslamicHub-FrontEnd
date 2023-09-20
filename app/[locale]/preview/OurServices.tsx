import React from "react";
import OurService from "./OurService";

function OurServices() {
  return (
    <div className="px-[100px] py-[64px] flex flex-col gap-[40px] border-b-[2px] border-b-secondary-brown-light-active">
      <h2 className="font-sourceSerif text-[40px] capitalize text-center ">
        our services
      </h2>
      <div className=" flex justify-between">
        <OurService />
        <OurService />
        <OurService />
      </div>
    </div>
  );
}

export default OurServices;
