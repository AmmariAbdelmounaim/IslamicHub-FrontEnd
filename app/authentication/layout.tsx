"use client";
import "tailwindcss/tailwind.css";
import { AuthenticationHero } from "../../components/authentication/hero";
import { Metadata } from "next";
import { useAppSelector } from "../../redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userInfo } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    userInfo && router.push("/cms");
  }, [userInfo, router]);
  return (
    <div className="flex sm:h-screen sm:justify-between items-center justify-center h-screen ">
      <div className=" sm:px-[100px] sm:flex sm:flex-col  sm:justify-center ">
        {children}
      </div>
      <div className="hidden sm:flex sm:h-full">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-full"
          style={{ backgroundImage: `url(/assets/backgroundImage.jpg)` }}
        >
          <div className="absolute inset-0 backdrop-blur-sm bg-white bg-opacity-20"></div>
          <div className="relative h-full flex items-center justify-center">
            <AuthenticationHero />
          </div>
        </div>
      </div>
    </div>
  );
}
