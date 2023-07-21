"use client";

import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useEffect, useState } from "react";
import FillButton from "../../../components/button/FillButton";
import { logout } from "../../../redux/features/authSlice";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const { userInfo } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const [islamicCenterName, setIslamicCenterName] = useState<string>("");
  useEffect(() => {
    if (userInfo?.firstname) {
      setIslamicCenterName(userInfo?.firstname as string);
    } else {
      router.push("/authentication/login");
    }
  }, [router, userInfo]);

  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    router.push("/authentication/login");
  };

  return (
    <div className="flex flex-col justify-center h-screen items-center gap-[30px]">
      <h1 className="font-sourceSerif text-[38px] text-center font-semibold  ">
        Don&apos;t Panic ! <br />
        Your Islamic Center :
        <span className="text-primary-orange-normal-active">
          {" "}
          {islamicCenterName}{" "}
        </span>{" "}
        Is Under Construction
      </h1>
      <Image
        src={"/gear-rotation.png"}
        width={300}
        height={300}
        alt="gear image"
      />

      <FillButton onClick={logoutHandler}>Logout</FillButton>
    </div>
  );
}
