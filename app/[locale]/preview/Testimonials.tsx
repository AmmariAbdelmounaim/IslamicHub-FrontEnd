import React from "react";
import Image from "next/image";

const Test = ({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="w-[378px] px-[40px] py-[32px] bg-secondary-brown-light border-[2px] rounded-[10px] border-primary-orange-normal flex flex-col gap-[40px]">
      <div className="relative border-[1px] border-primary-orange-normal rounded-[10px] w-[300px] h-[200px] overflow-hidden">
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </div>

      <div className="flex flex-col gap-[16px] items-center">
        <h2 className="text-[24px] font-poppins font-medium mb-4">{title}</h2>
        <p className="text-[18px] font-poppins font-normal text-justify ">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Test;
