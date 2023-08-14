"use client";
import { useEffect } from "react";
import { useAppSelector } from "../../../redux/store";
import { useRouter } from "next/navigation";

function CmsPage() {
  const { userInfo } = useAppSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (userInfo) {
      router.push("/cms/content");
    }
  }, [userInfo, router]);
  return <></>;
}

export default CmsPage;
