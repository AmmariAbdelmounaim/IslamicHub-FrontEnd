"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { useAppSelector } from "../../../redux/store";
import { useRouter } from "next/navigation";
import CsmSidebar from "../../../components/cmsNavbar/sidebar";
import CmsHeader from "../../../components/cmsNavbar/header";
import PreviewPage from "../preview/page";
import { Reveal } from "../../../components/animations/Reveal";

export default function CmsLayout({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const handlePreviewToggle = () => {
    setIsPreviewVisible(!isPreviewVisible);
  };
  const router = useRouter();
  const { userInfo } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!userInfo) {
      router.push("/authentication/login");
    }
  }, [userInfo, router]);

  const handleSidebarToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <aside
        className={`fixed left-0 top-0 z-40  ${
          isCollapsed ? "w-[57px]" : "w-[280px]"
        }`}
      >
        <CsmSidebar isCollapsed={isCollapsed} onToggle={handleSidebarToggle} />
      </aside>
      <nav
        className={`fixed right-0 w-screen z-30 transition-all duration-300 ${
          isCollapsed ? "pl-[80px]" : "pl-[312px]"
        }`}
      >
        <CmsHeader onPreviewToggle={handlePreviewToggle} />
      </nav>
      <div
        className={`pt-[120px] pr-[32px] z-20 h-full transition-all duration-300 ${
          isCollapsed ? "pl-[80px]" : "pl-[312px]"
        }`}
      >
        {children}
      </div>
      <div className="z-50">
        {isPreviewVisible && <PreviewPage onClose={handlePreviewToggle} />}
      </div>
    </>
  );
}
