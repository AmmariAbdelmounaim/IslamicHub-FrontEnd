"use client";
import React, { useEffect } from "react";
import { useAppSelector } from "../../../../redux/store";
import { useRouter } from "next/navigation";

function OtherSections() {
  const { userInfo } = useAppSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (userInfo) {
      router.push("other/about");
    }
  }, [userInfo, router]);
  return <></>;
}

export default OtherSections;
