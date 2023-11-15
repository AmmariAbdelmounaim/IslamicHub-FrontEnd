import React from "react";
import { useAppSelector } from "../../../redux/store";
import { AboutUs } from "../../../types/types";

function AboutUsIslmacCenter() {
  const { userInfo } = useAppSelector((state) => state.auth);
  return (
    <div className="flex flex-col gap-[40px] mx-[100px] pb-[64px] border-b-[2px] border-b-secondary-brown-light-active ">
      <h1 className="text-primary-orange-darker font-sourceSerif  text-[40px] font-normal flex justify-center items-center  ">
        About Us
      </h1>
      <div className="flex flex-col gap-[56px]">
        {(userInfo?.centerDTO.homePageDTO.aboutUsDTOList.length as number) >
        0 ? (
          userInfo?.centerDTO.homePageDTO.aboutUsDTOList.map(
            (about: AboutUs, index) => {
              return (
                <div key={index}>
                  <div className="flex justify-between text-[40px]">
                    <h3 className="text-primary-orange-darker font-sourceSerif  text-[32px] font-normal w-[197px] h-[40px] ">
                      {
                        userInfo?.centerDTO.homePageDTO.aboutUsDTOList[index]
                          .title
                      }
                    </h3>
                    <p className="text-[18px] font-normal font-poppins text-primary-orange-dark-active text-justify w-[707px]">
                      {
                        userInfo?.centerDTO.homePageDTO.aboutUsDTOList[index]
                          .paragraph
                      }
                    </p>
                  </div>
                </div>
              );
            }
          )
        ) : (
          <>
            <div className="flex justify-between text-[40px]">
              <h3 className="text-primary-orange-darker font-sourceSerif  text-[32px] font-normal w-[197px] h-[40px] ">
                Who We Are
              </h3>
              <p className="text-[18px] font-normal font-poppins text-primary-orange-dark-active text-justify w-[707px]">
                Welcome to Al Haramain Center, a vibrant Islamic haven dedicated
                to nurturing hearts, minds, and souls. Our sanctuary fosters
                spiritual growth, unity, and knowledge within the community.
                With a rich heritage and commitment to Islamic teachings, we
                offer enlightening lectures, engaging education, and uplifting
                social gatherings. Embracing diversity, we build bridges through
                interfaith dialogues and outreach. Seek inspiration, solace, and
                strengthen your connection to the Divine here. Join us on this
                fulfilling journey of compassion, knowledge, and service.
              </p>
            </div>
            <div className="flex justify-between">
              <h3 className="text-primary-orange-darker font-sourceSerif  text-[32px] font-normal capitalize w-[197px] h-[40px]d">
                our vision
              </h3>
              <p className="text-[18px] font-normal font-poppins text-primary-orange-dark-active text-justify w-[707px]">
                At Al Haramain Center, we believe in the power of unity and
                community. As a beacon of faith, we warmly welcome all to
                discover our diverse programs and services. Together, let us
                flourish in faith, knowledge, and harmony, making a lasting
                impact on individuals and the broader community. Join our
                harmonious space, and together, we shall thrive at Al Haramain
                Center.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AboutUsIslmacCenter;
