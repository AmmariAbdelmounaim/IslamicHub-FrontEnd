import React, { useEffect, useState } from "react";
import FillButton from "../button/FillButton";
import Image from "next/image";

interface CmsCustomNavbarProps {
  aboutUs?: boolean;
  ourServices?: boolean;
  ourEvents?: boolean;
  prayerTime?: boolean;
  testimonials?: boolean;
  contactUs?: boolean;
  logo?: string;
  backgroundColor?: string;
  textColor?: string;
}

export default function CmsCustomNavbar({
  aboutUs = false,
  ourServices = false,
  ourEvents = false,
  prayerTime = false,
  testimonials = false,
  contactUs = false,
  logo,
  backgroundColor,
  textColor,
}: CmsCustomNavbarProps) {
  const links: string[] = [];
  if (aboutUs) links.push("about us");
  if (ourServices) links.push("our services");
  if (ourEvents) links.push("our events");
  if (prayerTime) links.push("prayer time");
  if (testimonials) links.push("testimonials");
  if (contactUs) links.push("contact us");

  return (
    <div className="items-center py-[8px] px-[8px] border-solid border-[2px] border-secondary-brown-normal-30-opacity rounded-[6px]">
      <div
        style={{
          backgroundColor: backgroundColor
            ? backgroundColor
            : "rgba(72, 44, 20, 0.50)",
        }}
        className="px-[100px] flex items-center justify-between w-full h-full "
      >
        {logo ? (
          <div className="py-[8px] w-auto ">
            <Image src={logo} alt="logo" height={73} width={118} />
          </div>
        ) : (
          <div className="py-[8px] w-auto h-[73px] flex items-center justify-center">
            <h2
              style={{
                color: textColor ? textColor : "rgb(245,242,238)",
              }}
              className="font-poppins text-[20px] font-semibold capitalize "
            >
              your logo here
            </h2>
          </div>
        )}

        <ul className="flex gap-[48px] py-[22px]">
          {links.length > 0 ? (
            links.map((link, index) => (
              <li
                key={index}
                style={{
                  color: textColor ? textColor : "rgb(245,242,238)",
                }}
                className={`font-poppins text-[20px] font-semibold capitalize `}
              >
                {link}
              </li>
            ))
          ) : (
            <p
              style={{
                color: textColor ? textColor : "rgb(245,242,238)",
              }}
              className="font-poppins text-[20px] capitalize font-semibold text-secondary-brown-light"
            >
              {" "}
              navigation links
            </p>
          )}
        </ul>
        <FillButton additionalStyle="px-[40px] py-[12px] h-[37px]">
          donate
        </FillButton>
      </div>
    </div>
  );
}
