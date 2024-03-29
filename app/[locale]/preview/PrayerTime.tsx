import React from "react";
import { useAppSelector } from "../../../redux/store";

function PrayerTime() {
  const { userInfo } = useAppSelector((state) => state.auth);

  return (
    <div className="w-full py-[64px] mx-[100px] border-b-[2px] border-b-secondary-brown-light-active  flex flex-col items-center justify-center gap-[48px]">
      <h1 className="font-sourceSerif text-[40px] text-primary-orange-darker capitalize text-center">
        prayer time
      </h1>
      <div className="border-[2px] border-primary-orange-normal rounded-[10px] px-[75px] py-[24px] flex flex-col w-[530px] gap-[16px]">
        <h3 className="font-sourceSerif text-[28px] capitalize text-primary-orange-dark-active text-center font-semibold">
          {userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO.day}{" "}
          {userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO.month}{" "}
          {userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO.year} Hijri
        </h3>
        <div className="flex flex-col gap-[16px]">
          <div className="flex justify-between pb-[16px] border-b-[4px] border-secondary-brown-normal-30-opacity">
            <h4 className="font-sourceSerif text-[28px] font-semibold capitalize  text-primary-orange-darker">
              prayer
            </h4>
            <h4 className="font-sourceSerif text-[28px] font-semibold capitalize text-primary-orange-darker">
              prayer time
            </h4>
          </div>
          <div className="flex justify-between px-[24px] pb-[16px] border-dashed border-b-[2px] border-secondary-brown-normal-30-opacity">
            <p className="text-[20px] font-poppins font-semibold capitalize text-primary-orange-dark-active">
              Fajr
            </p>
            <p className="text-[20px] font-poppins font-semibold capitalize text-primary-orange-dark-active">
              {userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO.fajr}
            </p>
          </div>
          <div className="flex justify-between px-[24px] pb-[16px] border-dashed border-b-[2px] border-secondary-brown-normal-30-opacity">
            <p className="text-[20px] font-poppins font-semibold capitalize text-primary-orange-dark-active">
              Shuruq
            </p>
            <p className="text-[20px] font-poppins font-semibold capitalize text-primary-orange-dark-active">
              {userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO.shuruq}
            </p>
          </div>
          <div className="flex justify-between px-[24px] pb-[16px] border-dashed border-b-[2px] border-secondary-brown-normal-30-opacity">
            <p className="text-[20px] font-poppins font-semibold capitalize text-primary-orange-dark-active">
              Zohar
            </p>
            <p className="text-[20px] font-poppins font-semibold capitalize text-primary-orange-dark-active">
              {userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO.zohar}
            </p>
          </div>
          <div className="flex justify-between px-[24px] pb-[16px] border-dashed border-b-[2px] border-secondary-brown-normal-30-opacity">
            <p className="text-[20px] font-poppins font-semibold capitalize text-primary-orange-dark-active">
              Asar
            </p>
            <p className="text-[20px] font-poppins font-semibold capitalize text-primary-orange-dark-active">
              {userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO.asar}
            </p>
          </div>
          <div className="flex justify-between px-[24px] pb-[16px] border-dashed border-b-[2px] border-secondary-brown-normal-30-opacity">
            <p className="text-[20px] font-poppins font-semibold capitalize text-primary-orange-dark-active">
              Maghrib
            </p>
            <p className="text-[20px] font-poppins font-semibold capitalize text-primary-orange-dark-active">
              {userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO.maghrib}
            </p>
          </div>
          <div className="flex justify-between px-[24px]">
            <p className="text-[20px] font-poppins font-semibold capitalize text-primary-orange-dark-active">
              Isha
            </p>
            <p className="text-[20px] font-poppins font-semibold capitalize text-primary-orange-dark-active">
              {userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO.isha}
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrayerTime;
