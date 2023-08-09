import React from "react";
import Navbar from "./Navbar"; // Importer le composant Navbar
import Percent from "./Percent";
import SliderImage from "./Slider";
import AboutUsIslmacCenter from "./AboutUs";
import UpCE from "./upcomingEvents";
import OurService from "./OurServices";
import RaisingF from "./RaisingFunds";
import DonatePage from "./RaisingFNext";
import Test from "./Testimonials";
import Event from "../../../components/cms/event";
import GetInTouchh from "./GetInTouch";
import Foooter from "./footer";

const PreviewPage = () => {
  return (
    <>
      <Navbar />
      <SliderImage />

      <Percent percentage={22} currentAmount={20000} targetAmount={90000} />

      <AboutUsIslmacCenter />
      <div className="mx-[100px] py-[64px] flex flex-col gap-[64px] items-center border-b-[2px] border-b-secondary-brown-light-active">
        <h2 className="font-sourceSerif text-[40px] capitalize">
          upcoming events
        </h2>
        <div className="flex flex-col gap-[24px]">
          <Event
            eventName="Spiritual Reflections: An Evening of Quranic Wisdom"
            eventDescription="Join us for a transformative evening of Quranic wisdom and spiritual reflections. Open to all, deepen your understanding and strengthen your connection to the Divine."
            eventTime="16:00 - 20:00"
            eventLocation="Al Noor Hall, Crescent Street, Harmonyville"
            day={21}
            month="Jun"
          />
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
      </div>

      <OurService />
      <RaisingF />
      <DonatePage />
      <div className="flex justify-between px-[100px] mt-[40px]">
        <Test
          image="/assets/testimonials1.jpeg"
          text="The Saturday Arabic School at Al-Haramain Center has been a wonderful experience for my kids. They are learning Arabic and Islamic values in a fun and engaging way!"
          title="Aisha Rahman"
        />
        <Test
          image="/assets/testimonials1.jpeg"
          text="The Saturday Arabic School at Al-Haramain Center has been a wonderful experience for my kids. They are learning Arabic and Islamic values in a fun and engaging way!"
          title="Aisha Rahman"
        />
        <Test
          image="/assets/testimonials1.jpeg"
          text="The Saturday Arabic School at Al-Haramain Center has been a wonderful experience for my kids. They are learning Arabic and Islamic values in a fun and engaging way!"
          title="Aisha Rahman"
        />
      </div>
      <GetInTouchh />
      <Foooter />
    </>
  );
};

export default PreviewPage;
