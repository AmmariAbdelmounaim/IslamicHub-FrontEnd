"use client";
import FillButton from "../components/button/FillButton";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../components/responsive";
import HeroImage from "../public/assets/heroimg.jpg";
import CardImage from "../public/assets/cardimg.jpg";
import CardImage1 from "../public/assets/cardimg1.jpg";
import Card from "../components/Card/card";
import CardWithButton from "../components/Card/cardwithButton";
import { Reveal } from "../components/animations/Reveal";
import Accordion from "../components/faq";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function LandingPage() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.tablet });
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded && (
        <>
          <div className=" bg-primary-orange-light">
            <Navbar />
            <Reveal>
              <div
                className={`flex ${
                  !isMobile &&
                  "p-[100px] gap-[125px] justify-between items-center"
                }`}
              >
                <div className="py-[32px] pl-[20px] flex flex-col gap-[32px] pr-[42px]  sm:gap-[64px] sm:p-0">
                  <div>
                    <h1 className="capitalize font-sourceSerif text-[36px] font-semibold text-primary-orange-darker sm:text-[64px]">
                      welcome user title
                    </h1>
                  </div>
                  <p className="capitalize text-primary-orange-dark-hover font-poppins text-[18px] sm:text-[20px] sm:font-semibold">
                    Start with a warm greeting, Start with a warm greeting Start
                    with a warm greeting
                  </p>
                  <FillButton additionalStyle="capitalize py-[16px] px-[40px] w-[247px] h-[45px] flex items-center justify-center">
                    start now
                  </FillButton>
                </div>
                {!isMobile && (
                  <div>
                    <Image
                      src={HeroImage}
                      className="rounded-lg border border-primary-orange-normal shadow-md w-[583px] h-[523px]"
                      alt="hero image"
                    />
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal>
              <div className="flex flex-col items-center mt-[32px] py-[48px] px-[20px] bg-secondary-brown-light-active sm:py-[64px] sm:px-[203px]">
                <h2 className="font-sourceSerif text-[32px] capitalize text-secondary-brown-darker sm:text-[64px] sm:font-semibold ">
                  our story
                </h2>
                <p className="font-poppins text-justify font-medium text-[16px] text-primary-orange-dark-active capitalize sm:text-[18px]">
                  Introducing IslamicHub a cutting-edge platform designed to
                  revolutionize the way Islamic Centers manage their online
                  presence. Instead of the lengthy and expensive process of
                  setting up individual websites, IslamicHub offers a unique,
                  central platform for these institutions to generate and share
                  their content.
                </p>
              </div>
            </Reveal>

            <div className="mt-[28px] pt-[32px] mb-[48px]  sm:px-[100px] sm:py-[32px]">
              <Reveal>
                <h2 className="font-sourceSerif text-[32px] capitalize text-center text-secondary-brown-darker mb-[48px] sm:font-semibold ">
                  we value
                </h2>
              </Reveal>

              <div className="flex flex-col gap-[51px] items-center sm:flex-row">
                <Reveal>
                  <Card
                    title="community"
                    text="Introducing 'IslamicHub', a cutting-edge platform designed to "
                    image={CardImage}
                  />
                </Reveal>
                <Reveal>
                  <Card
                    title="community"
                    text="Introducing 'IslamicHub', a cutting-edge platform designed to "
                    image={CardImage}
                  />
                </Reveal>
                <Reveal>
                  <Card
                    title="community"
                    text="Introducing 'IslamicHub', a cutting-edge platform designed to "
                    image={CardImage}
                  />
                </Reveal>
              </div>
            </div>

            <div className="px-[20px] sm:p-0">
              <div className="py-[32px] sm:p-[100px] flex flex-col items-center gap-[64px] ">
                <Reveal>
                  <div className=" sm:px-[105px]">
                    <h2 className="font-sourceSerif text-center text-[32px] capitalize text-secondary-brown-darker sm:text-[64px] sm:font-semibold ">
                      our services
                    </h2>
                    <p className="font-poppins text-center font-medium text-[16px] text-secondary-brown-darker capitalize sm:text-[18px]">
                      Showcase the diverse range of services, programs, and
                      activities offered by the Islamic center.Showcase the
                      diverse range of services, programs, and activities
                      offered by the Islamic center.
                    </p>
                  </div>
                </Reveal>

                <div className="flex flex-col gap-[64px] sm:flex-row sm:gap-[128px]">
                  <Reveal>
                    <CardWithButton
                      text="Introducing 'IslamicHub', a cutting-edge platform designed to "
                      image={CardImage1}
                      title="create customized websites"
                    />
                  </Reveal>
                  <Reveal>
                    <CardWithButton
                      text="Introducing 'IslamicHub', a cutting-edge platform designed to "
                      image={CardImage1}
                      title="create customized websites"
                    />
                  </Reveal>
                </div>
              </div>
            </div>
            <Reveal>
              <div className="px-[20px] py-[54px] sm:px-[100px] sm:pb-[100px]">
                <h2 className="uppercase font-sourceSerif text-[32px] text-secondary-brown-darker font-normal sm:[40px] mb-[32px]">
                  faq
                </h2>
                <Accordion />
              </div>
            </Reveal>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
