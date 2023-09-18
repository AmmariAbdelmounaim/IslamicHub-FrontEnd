"use client";
import FillButton from "../../components/button/FillButton";
import HeroImage from "../../public/assets/heroimg.jpg";
import CardImage from "../../public/assets/cardimg.jpg";
import CardImage1 from "../../public/assets/cardimg1.jpg";
import Card from "../../components/Card/card";
import CardWithButton from "../../components/Card/cardwithButton";
import { Reveal } from "../../components/animations/Reveal";
import Accordion from "../../components/faq";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useTranslations } from "next-intl";

export default function LandingPage() {
  const [domLoaded, setDomLoaded] = useState(false);
  const t = useTranslations("Index");
  

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
              <div className="flex sm:p-[100px] sm:gap-[125px] sm:justify-between sm:items-center">
                <div className="py-[32px] pl-[20px] flex flex-col gap-[32px] pr-[42px]  sm:gap-[64px] sm:p-0">
                  <div>
                    <h1 className="capitalize font-sourceSerif text-[36px] font-semibold text-primary-orange-darker sm:text-[64px]">
                      {t("title")}
                    </h1>
                  </div>
                  <p className="capitalize text-primary-orange-dark-hover font-poppins text-[18px] sm:text-[20px] sm:font-semibold">
                  {t("soustitre")}
                  </p>
                  <FillButton additionalStyle="capitalize py-[16px] px-[40px] w-[247px] h-[45px] flex items-center justify-center">
                  {t("button1")}
                  </FillButton>
                </div>

                <div className="hidden sm:block">
                  <Image
                    src={HeroImage}
                    className="rounded-lg border border-primary-orange-normal shadow-md w-[583px] h-[523px]"
                    alt="hero image"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex flex-col items-center mt-[32px] py-[48px] px-[20px] bg-secondary-brown-light-active sm:py-[64px] sm:px-[203px]">
                <h2 className="font-sourceSerif text-[32px] capitalize text-secondary-brown-darker sm:text-[64px] sm:font-semibold ">
                {t("title2")}
                </h2>
                <p className="font-poppins text-justify font-medium text-[16px] text-primary-orange-dark-active capitalize sm:text-[18px]">
                {t("soustitre2")}
                </p>
              </div>
            </Reveal>

            <div className="mt-[28px] pt-[32px] mb-[48px]  sm:px-[100px] sm:py-[32px]">
              <Reveal>
                <h2 className="font-sourceSerif text-[32px] capitalize text-center text-secondary-brown-darker mb-[48px] sm:font-semibold ">
                {t("title3")}
                </h2>
              </Reveal>

              <div className="flex flex-col gap-[51px] items-center sm:flex-row">
                <Reveal>
                  <Card
                    title= {t("soustitre31")}
                    text={t("soustitre32")}
                    image={CardImage}
                  />
                </Reveal>
                <Reveal>
                  <Card
                    title= {t("soustitre31")}
                    text={t("soustitre32")}
                    image={CardImage}
                  />
                </Reveal>
                <Reveal>
                  <Card
                    title={t("soustitre31")}
                    text={t("soustitre32")}
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
                    {t("title4")}
                    </h2>
                    <p className="font-poppins text-center font-medium text-[16px] text-secondary-brown-darker capitalize sm:text-[18px]">
                    {t("soustitre4")}
                    </p>
                  </div>
                </Reveal>

                <div className="flex flex-col gap-[64px] sm:flex-row sm:gap-[128px]">
                  <Reveal>
                    <CardWithButton
                      text={t("soustitre41")}
                      image={CardImage1}
                      title={t("soustitre42")}
                    />
                  </Reveal>
                  <Reveal>
                    <CardWithButton
                      text={t("soustitre41")}
                      image={CardImage1}
                      title={t("soustitre42")}
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
