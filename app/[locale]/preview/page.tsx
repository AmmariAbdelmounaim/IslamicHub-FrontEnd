import React from "react";
import Navbar from "./Navbar"; // Importer le composant Navbar
import Percent from "./Percent";
import SliderImage from "./Slider";
import AboutUsIslmacCenter from "./AboutUs";
import OurService from "./OurServices";
import RaisingF from "./RaisingFunds";
import DonatePage from "./RaisingFNext";
import Test from "./Testimonials";
import Event from "../../../components/cms/event";
import GetInTouchh from "./GetInTouch";
import Foooter from "./footer";
import FillButton from "../../../components/button/FillButton";
import { Reveal } from "../../../components/animations/Reveal";
import "../../../styles/Home.module.css";
import { useAppSelector } from "../../../redux/store";
import { Event as EventType } from "../../../types/types";
import PrayerTime from "./PrayerTime";

interface PreviewPageProps {
  onClose: () => void;
}
const PreviewPage = ({ onClose }: PreviewPageProps) => {
  const { userInfo } = useAppSelector((state) => state.auth);
  return (
    <div className="absolute inset-0 bg-secondary-brown-light z-50 slide-up-fade-in">
      <header className="w-full flex justify-center py-[10px] px-[20px]">
        <FillButton additionalStyle="rounded-[15px]" onClick={onClose}>
          Hide
        </FillButton>
      </header>
      <div className="relative bg-secondary-brown-light">
        <Navbar />
        <SliderImage />

        <Percent percentage={22} currentAmount={20000} targetAmount={90000} />

        <AboutUsIslmacCenter />
        <div className="mx-[100px] py-[64px] flex flex-col gap-[64px] items-center border-b-[2px] border-b-secondary-brown-light-active">
          <h2 className="font-sourceSerif text-[40px] capitalize">
            upcoming events
          </h2>
          <div className="flex flex-col gap-[24px] w-full">
            {(userInfo?.centerDTO.homePageDTO.eventDTOList.length as number) >
            0 ? (
              userInfo?.centerDTO.homePageDTO.eventDTOList.map(
                (event: EventType, index) => (
                  <div key={index}>
                    <Event
                      additionalInfoColor={
                        userInfo.centerDTO.homePageDTO.eventAdditionalInfoColor
                      }
                      backgroundColor={
                        userInfo.centerDTO.homePageDTO.eventBgColor
                      }
                      borderColor={
                        userInfo.centerDTO.homePageDTO.eventBorderColor
                      }
                      eventName={`${
                        userInfo?.centerDTO.homePageDTO.eventDTOList[index]
                          .name ??
                        "Community Iftar: Embracing the Spirit of Giving"
                      }`}
                      eventDescription={`${
                        userInfo?.centerDTO.homePageDTO.eventDTOList[index]
                          .description ??
                        "Join us for a transformative evening of Quranic wisdom and spiritual reflections. Open to all, deepen your understanding and strengthen your connection to the Divine."
                      }`}
                      eventTime="16:00 - 20:00"
                      eventLocation={`${
                        userInfo?.centerDTO.homePageDTO.eventDTOList[index]
                          .location ??
                        "Al Noor Hall, Crescent Street, Harmonyville"
                      }`}
                      day={21}
                      month="Jun"
                    />
                  </div>
                )
              )
            ) : (
              <div className="flex flex-col gap-[24px]">
                <Event
                  eventName="Community Iftar: Embracing the Spirit of Giving"
                  eventDescription="Come together in unity and generosity for our Community Iftar. Witness the power of collective giving as we share a delightful meal and extend a helping hand to those in need."
                  eventTime="20:00 - 22:00"
                  eventLocation="Unity Park, Peaceful Avenue, Serenity City"
                  day={19}
                  month="Aug"
                />
                <Event
                  eventName="Youth Empowerment Workshop: Unleashing Potential"
                  eventDescription="Calling all youth! Join motivational speakers for a journey of self-discovery and growth. Gain valuable skills, confidence, and unlock your leadership potential."
                  eventTime="11:00 - 13:00"
                  eventLocation="Inspirational Center, Hope Street, Progressville"
                  day={22}
                  month="Sep"
                />
              </div>
            )}
          </div>
        </div>
        <div className="px-[100px] py-[64px] flex flex-col gap-[40px] border-b-[2px] border-b-secondary-brown-light-active">
          <h2 className="font-sourceSerif text-[40px] capitalize text-center ">
            our services
          </h2>
          <div className=" flex justify-between">
            <OurService />
            <OurService />
            <OurService />
          </div>
        </div>

        <RaisingF />
        <div className="py-[64px]  border-b-[2px] border-b-secondary-brown-light-active">
          <DonatePage />
        </div>
        <div className="flex justify-between px-[100px] mt-[40px]">
          <Test
            image="/assets/testimonials1.jpeg"
            text="The Saturday Arabic School at Al-Haramain Center has been a wonderful experience for my kids. They are learning Arabic and Islamic values in a fun and engaging way!"
            title="Aisha Rahman"
          />
          <Test
            image="/assets/testimonials2.jpeg"
            text="The family counseling services at Al-Barakah Center were truly helpful. The counselors were compassionate and understanding, guiding us towards better family dynamics."
            title="Ahmed Khan"
          />
          <Test
            image="/assets/testimonials3.jpeg"
            text="Being part of Al-Ihsan Center's community outreach is rewarding. Seeing the impact of our efforts on people's lives brings joy to my heart."
            title="Amina Hassan"
          />
        </div>
        <div className="m-[50px] flex justify-center items-center">
          <PrayerTime />
        </div>
        <GetInTouchh />
        <Foooter
          backgroundColor={userInfo?.centerDTO.headerFooterDTO.footerBGColor}
          email={userInfo?.centerDTO.headerFooterDTO.footerEmail}
          facebook={userInfo?.centerDTO.headerFooterDTO.footerFacebook}
          instagram={userInfo?.centerDTO.headerFooterDTO.footerInsta}
          phoneNumber={userInfo?.centerDTO.headerFooterDTO.footerPhoneNumber}
          logo={userInfo?.centerDTO.headerFooterDTO.largeLogo}
          textColor={userInfo?.centerDTO.headerFooterDTO.footerTextColor}
          threads={userInfo?.centerDTO.headerFooterDTO.footerThreads}
          twitter={userInfo?.centerDTO.headerFooterDTO.footerTwitter}
        />
      </div>
    </div>
  );
};

export default PreviewPage;
