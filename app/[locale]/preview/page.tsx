import React from "react";
import Navbar from "./Navbar"; // Importer le composant Navbar
import Percent from "./Percent";
import SliderImage from "./Slider";
import AboutUsIslmacCenter from "./AboutUs";
import RaisingF from "./RaisingFunds";
import DonatePage from "./DonateSection";
import Test from "./Testimonials";
import Event from "../../../components/cms/event";
import GetInTouchh from "./GetInTouch";
import Foooter from "./footer";
import FillButton from "../../../components/button/FillButton";
import "../../../styles/Home.module.css";
import { useAppSelector } from "../../../redux/store";
import PrayerTime from "./PrayerTime";
import UpcomingEvents from "./UpcomingEvents";
import OurServices from "./OurServices";
import Image from "next/image";

interface PreviewPageProps {
  onClose: () => void;
}
const PreviewPage = ({ onClose }: PreviewPageProps) => {
  const { userInfo } = useAppSelector((state) => state.auth);
  return (
    <div className="absolute inset-0 bg-secondary-brown-light z-40 slide-up-fade-in">
      <button
        className="fixed right-[20px] bottom-[20px] z-50 flex justify-center items-center rounded-full bg-primary-orange-normal hover:bg-primary-orange-normal-hover w-[70px] h-[70px] "
        onClick={onClose}
      >
        <Image
          src={"/cross_icon.svg"}
          width={25}
          height={25}
          alt="cross icon"
        />
      </button>

      <div className="relative bg-secondary-brown-light">
        <Navbar />
        <SliderImage />

        <Percent percentage={22} currentAmount={20000} targetAmount={90000} />

        <AboutUsIslmacCenter />
        <UpcomingEvents />
        <OurServices />

        <RaisingF />
        <DonatePage />
        <div className="flex justify-between mx-[100px] py-[40px] border-b-[2px] border-b-secondary-brown-light-active">
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
