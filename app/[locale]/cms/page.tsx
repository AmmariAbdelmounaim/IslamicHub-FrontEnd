"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppSelector } from "../../../redux/store";
function CmsPage() {
  const router = useRouter();
  const { userInfo } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (userInfo) {
      router.push("/cms/content");
    } else {
      router.push("/authentication/login");
    }
  }, [userInfo, router]);

  return <></>;
}

export default CmsPage;
