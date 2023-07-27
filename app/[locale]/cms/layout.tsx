"use client";
import React, { ReactNode, useState } from "react";
import { useAppSelector } from "../../../redux/store";
import { useRouter } from "next/navigation";
import CsmSidebar from "../../../components/cmsNavbar/sidebar";
import CmsHeader from "../../../components/cmsNavbar/header";

export default function CmsLayout({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSidebarToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <aside
        className={`fixed left-0 top-0 z-50  ${
          isCollapsed ? "w-[57px]" : "w-[280px]"
        }`}
      >
        <CsmSidebar isCollapsed={isCollapsed} onToggle={handleSidebarToggle} />
      </aside>
      <nav
        className={`fixed right-0 w-screen z-40 transition-all duration-300 ${
          isCollapsed ? "pl-[80px]" : "pl-[312px]"
        }`}
      >
        <CmsHeader />
      </nav>
      <div
        className={`pt-[120px] pr-[32px] z-30 h-full transition-all duration-300 ${
          isCollapsed ? "pl-[80px]" : "pl-[312px]"
        }`}
      >
        {children}
      </div>
    </>
  );
}
