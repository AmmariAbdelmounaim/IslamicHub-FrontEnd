"use client";
import React, { ReactNode } from "react";
import { useAppSelector } from "../../../redux/store";
import { useRouter } from "next/navigation";
import CsmSidebar from "../../../components/cmsNavbar/sidebar";
import CmsHeader from "../../../components/cmsNavbar/header";

export default function CmsLayout({ children }: { children: ReactNode }) {
  const { userInfo } = useAppSelector((state) => state.auth);
  const router = useRouter();

  return (
    <>
      <aside className="fixed left-0 top-0">
        <CsmSidebar />
      </aside>
      <nav className="fixed pl-[312px] right-0 w-screen z-50">
        <CmsHeader />
      </nav>
      <div className="pt-[120px] pl-[312px]  pr-[32px] z-40 h-full">
        {children}
      </div>
    </>
  );
}
