import React from "react";
import OurService from "./OurService";
import { useAppSelector } from "../../../redux/store";
import { Service } from "../../../types/types";

function OurServices() {
  const { userInfo } = useAppSelector((state) => state.auth);

  return (
    <div className="mx-[100px] py-[64px] flex flex-col gap-[40px] border-b-[2px] border-b-secondary-brown-light-active">
      <h2 className="font-sourceSerif text-[40px] capitalize text-center ">
        our services
      </h2>
      <div className="flex justify-center items-center gap-[100px] flex-wrap">
        {(userInfo?.centerDTO.homePageDTO.serviceDTOList.length as number) >
        0 ? (
          userInfo?.centerDTO.homePageDTO.serviceDTOList.map(
            (service: Service, index) => {
              return (
                <div key={index}>
                  <OurService
                    name={
                      userInfo?.centerDTO.homePageDTO.serviceDTOList[index].name
                    }
                    details={
                      userInfo?.centerDTO.homePageDTO.serviceDTOList[index]
                        .description
                    }
                  />
                </div>
              );
            }
          )
        ) : (
          <>
            <OurService />
            <OurService />
            <OurService />
          </>
        )}
      </div>
    </div>
  );
}

export default OurServices;
