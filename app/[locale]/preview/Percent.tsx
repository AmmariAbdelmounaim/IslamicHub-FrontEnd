import React from "react";

const Progressbar = () => {
  const percentage = 43;
  const currentAmount = 20000;
  const targetAmount = 90000;

  return (
    <div className="text-center">
      <p className="text-lg font-medium font-poppins mb-2">Help Repair the Center</p>
      <div className="w-70 h-2 bg-gray-300 rounded-full mx-auto">
        <div
          className="h-full bg-orange-500 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="w-96 h-6 flex justify-between">
          <p className="font-bold font-poppins text-sm">${currentAmount}</p>
          <p className="font-bold font-poppins text-sm">${targetAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
