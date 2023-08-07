import React from "react";
import Image from "next/image";

interface ProgressbarProps {
  percentage: number;
  currentAmount: number;
  targetAmount: number;
}

const Progressbar = ({
  percentage,
  currentAmount,
  targetAmount,
}: ProgressbarProps) => {
  return (
    <div className="px-[105px] py-[32px] flex flex-col gap-[24px] ">
      <p className="text-[24px] font-medium text-primary-brown-normal font-poppins capitalize">
        Help Repair the Center
      </p>
      <div className="w-full h-[10px] bg-secondary-brown-light-active rounded-full">
        <div
          className={`h-full bg-primary-orange-normal rounded-full `}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between">
        <p className=" font-poppins text-primary-orange-dark-active text-[18px] capitalize">
          ${currentAmount}/${targetAmount}
        </p>
        <p className="font-poppins text-primary-brown-normal text-[18px] ">
          {percentage}%
        </p>
      </div>
    </div>
  );
};

function RaisingF() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-primary-orange-darker font-sourceSerif text-[40px] font-normal flex justify-center items-center mb-8" style={{ marginBottom: "40px" }}>
        Raising Funds For Takwa Center
      </h1>

      <div className="flex justify-center">
        <Image src="/assets/cardimg.jpg" alt="photo raising funds" width={1030} height={456} />
      </div>

      <Progressbar percentage={50} currentAmount={500} targetAmount={1000} />
    </div>
  );
}

export default RaisingF;
