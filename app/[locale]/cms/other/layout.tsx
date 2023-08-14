"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

function Aboulayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  console.log(pathname);
  const isActive = (path: string) => {
    return pathname === path;
  };
  return (
    <div className="py-[32px]">
      <div className="mb-[40px] px-[16px] flex justify-between border-[1px] border-secondary-brown-normal-30-opacity rounded-[10px]">
        <Link
          href="/cms/other/about"
          className={`my-[24px] font-poppins text-[18px] capitalize text-secondary-brown-darker hover:border-b hover:border-secondary-brown-normal-30-opacity ${
            pathname.split("/")[pathname.split("/").length - 1] === "about"
              ? "border-b border-secondary-brown-normal-30-opacity"
              : ""
          }`}
        >
          about section
        </Link>
        <Link
          href="/cms/other/services"
          className={`my-[24px] font-poppins text-[18px] capitalize text-secondary-brown-darker hover:border-b hover:border-secondary-brown-normal-30-opacity ${
            pathname.split("/")[pathname.split("/").length - 1] === "services"
              ? "border-b border-secondary-brown-normal-30-opacity"
              : ""
          }`}
        >
          services section
        </Link>
        <Link
          href="/cms/other/testimonial"
          className={`my-[24px] font-poppins text-[18px] capitalize text-secondary-brown-darker hover:border-b hover:border-secondary-brown-normal-30-opacity ${
            pathname.split("/")[pathname.split("/").length - 1] ===
            "testimonial"
              ? "border-b border-secondary-brown-normal-30-opacity"
              : ""
          }`}
        >
          testimonial section
        </Link>
        <Link
          href="/cms/other/prayerTime"
          className={`my-[24px] font-poppins text-[18px] capitalize text-secondary-brown-darker hover:border-b hover:border-secondary-brown-normal-30-opacity ${
            pathname.split("/")[pathname.split("/").length - 1] === "prayerTime"
              ? "border-b border-secondary-brown-normal-30-opacity"
              : ""
          }`}
        >
          prayer time section
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Aboulayout;
