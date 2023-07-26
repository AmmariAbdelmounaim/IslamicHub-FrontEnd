import React from "react";
import FillButton from "../button/FillButton";

export default function CmsCustomNavbar({ links }: { links?: string[] }) {
  return (
    <div className="flex justify-between items-center py-[8px] px-[8px] border-solid border-[2px] border-secondary-brown-normal-30-opacity rounded-[6px]">
      <p className="font-poppins text-[18px] capitalize text-secondary-brown-darker">
        logo
      </p>
      <ul className="flex gap-[10px]">
        {links ? (
          links.map((link, index) => (
            <li
              key={index}
              className="font-poppins text-[18px] capitalize text-secondary-brown-darker"
            >
              {" "}
              {link}
            </li>
          ))
        ) : (
          <p className="font-poppins text-[18px] capitalize text-secondary-brown-darker">
            {" "}
            navigation links
          </p>
        )}
      </ul>
      <FillButton additionalStyle="px-[40px] py-[12px]">donate</FillButton>
    </div>
  );
}
