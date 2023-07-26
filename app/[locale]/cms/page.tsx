"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
function CmsPage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/cms/content");
  }, []);

  return <></>;
}

export default CmsPage;
