"use client";
import { Formik, Form } from "formik";
import ColorPicker from "../../../../components/cms/colorPicker";
import LargeFormatUploid from "../../../../components/cms/largeFormatUploid";
import CmsCustomNavbar from "../../../../components/cms/cmsNavbar";
import CustomCheckBox from "../../../../components/cms/checkBox";
import { CustomField } from "../../../../components/formInputs/customField";
import FillButton from "../../../../components/button/FillButton";
import { useTranslations } from "next-intl";
import CmsCustomFooter from "../../../../components/cms/cmsFooter";

interface FormValues {
  titleColor: string;
  textColor: string;
  backgroundColor: string;
  primaryColor: string;
  largeUploid: string | null;
  smallUploid: string | null;
  backgroundColorHeader: string;
  textColorHeader: string;
  aboutUs: boolean;
  ourServices: boolean;
  ourEvents: boolean;
  prayerTime: boolean;
  testimonials: boolean;
  contactUs: boolean;
  backgroundColorFooter: string;
  textColorFooter: string;
  facebookLink: string;
  instagramLink: string;
  twitterLink: string;
  threadsLink: string;
  email: string;
  phoneNumber: string;
  address: string;
  whatsapp: string;
}

const initialValues: FormValues = {
  titleColor: "#362A1C",
  textColor: "#5D381A",
  backgroundColor: "#F5F2EE",
  primaryColor: "#CE7D39",
  largeUploid: null,
  smallUploid: null,
  backgroundColorHeader: "#9B5E2B",
  textColorHeader: "#F5F2EE",
  aboutUs: false,
  ourServices: false,
  ourEvents: false,
  prayerTime: false,
  testimonials: false,
  contactUs: false,
  backgroundColorFooter: "rgba(72, 44, 20, 0.50)",
  textColorFooter: "#F5F2EE",
  facebookLink: "",
  instagramLink: "",
  twitterLink: "",
  threadsLink: "",
  email: "",
  phoneNumber: "",
  address: "",
  whatsapp: "",
};

function ContentManagement() {
  const t = useTranslations("content");

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values }) => (
        <Form>
          <div className="flex flex-col gap-[40px] pb-[20px]">
            {/* introduction */}
            <div className="flex flex-col gap-[24px]">
              <h1 className="font-poppins text-[24px] capitalize font-medium text-secondary-brown-darker">
                content management
              </h1>
              <p className="font-poppins capitalize text-[18px] font-normal text-secondary-brown-darker">
                {" "}
                this section is for chooseng the main color palette and setting
                up the main components of your islmaic center landing page which
                are the logo, Header and the footer
              </p>
            </div>
            <div className="p-[16px] border-solid border-[1px] border-secondary-brown-normal-30-opacity rounded-[10px] flex flex-col gap-[40px]">
              {/* Color Palette */}
              <div className="flex flex-col gap-[24px] z-10">
                <div className="border-b border-b-secondary-brown-normal-30-opacity">
                  <h1 className="font-poppins capitalize text-[24px] text-secondary-brown-darker font-semibold mb-[10px] ">
                    color palette
                  </h1>
                </div>

                <div className="flex justify-between px-[8px] ">
                  <ColorPicker
                    name={"titleColor"}
                    label="title color"
                    defaultColor="#362A1C"
                  />
                  <ColorPicker
                    name={"textColor"}
                    label="text color"
                    defaultColor="#5D381A"
                  />
                  <ColorPicker
                    name={"backgroundColor"}
                    label="background color"
                    defaultColor="#9B5E2B "
                  />
                  <ColorPicker
                    name={"primaryColor"}
                    label="primary color"
                    defaultColor="#FAF2EB"
                  />
                </div>
              </div>
              {/* Uploid section */}
              <div className="flex flex-col gap-[24px]">
                <div className="border-b border-b-secondary-brown-normal-30-opacity">
                  <h1 className="font-poppins capitalize text-[24px] text-secondary-brown-darker font-semibold mb-[10px] ">
                    color palette
                  </h1>
                </div>

                <div className="flex gap-[56px]">
                  <LargeFormatUploid name={"largeUploid"} />
                  <LargeFormatUploid name={"smallUploid"} smallFormat />
                </div>
              </div>
              {/* Header */}
              <div className="flex flex-col gap-[24px]">
                <div className="border-b border-b-secondary-brown-normal-30-opacity">
                  <h1 className="font-poppins capitalize text-[24px] text-secondary-brown-darker font-semibold mb-[10px] ">
                    header
                  </h1>
                </div>

                <div className="flex gap-[56px]">
                  <ColorPicker
                    name={"backgroundColorHeader"}
                    label="background color"
                    defaultColor="#9B5E2B"
                  />
                  <ColorPicker
                    name={"textColorHeader"}
                    label="text color"
                    defaultColor="#F5F2EE"
                  />
                </div>
                <CmsCustomNavbar
                  aboutUs={values.aboutUs}
                  contactUs={values.contactUs}
                  ourEvents={values.ourEvents}
                  ourServices={values.ourServices}
                  prayerTime={values.prayerTime}
                  testimonials={values.testimonials}
                  backgroundColor={values.backgroundColorHeader}
                  textColor={values.textColorHeader}
                  logo={values.largeUploid as string}
                />
              </div>
              {/* Navigation links */}
              <div className="border-solid border-[2px] border-secondary-brown-normal-30-opacity rounded-[5px] py-[24px] px-[8px] flex gap-[16px] justify-between ">
                <CustomCheckBox name="aboutUs" label="about us" />
                <CustomCheckBox name="ourServices" label="our services" />
                <CustomCheckBox name="ourEvents" label="our events" />
                <CustomCheckBox name="prayerTime" label="prayer time" />
                <CustomCheckBox name="testimonials" label="testimonials" />
                <CustomCheckBox name="contactUs" label="contact us" />
              </div>
              {/* Footer */}
              <div className="flex flex-col gap-[24px]">
                <div className="border-b border-b-secondary-brown-normal-30-opacity ">
                  <h1 className="font-poppins capitalize text-[24px] text-secondary-brown-darker font-semibold mb-[10px] ">
                    footer
                  </h1>
                </div>

                <div className="flex gap-[56px]">
                  <ColorPicker
                    name={"backgroundColorFooter"}
                    label="background color"
                    defaultColor="#F5F2EE"
                  />
                  <ColorPicker
                    name={"textColorFooter"}
                    label="text color"
                    defaultColor="#362A1C"
                  />
                </div>
              </div>
              <div className="border-solid border-[2px] border-secondary-brown-normal-30-opacity p-[8px] rounded-[5px] flex flex-col gap-[16px] items-center justify-center">
                <CmsCustomFooter
                  backgroundColor={values.backgroundColorFooter}
                  email={values.email}
                  facebook={values.facebookLink}
                  instagram={values.instagramLink}
                  logo={values.largeUploid as string}
                  phoneNumber={values.phoneNumber}
                  textColor={values.textColorFooter}
                  threads={values.threadsLink}
                  twitter={values.twitterLink}
                />
              </div>
              {/* Social media */}
              <div>
                <h1 className="font-poppins capitalize text-[20px] text-secondary-brown-darker font-semibold mb-[10px] ">
                  social media
                </h1>

                <div className="flex justify-around">
                  <CustomField
                    label="facebook"
                    placeholder="Your Facebook Link"
                    name={"facebookLink"}
                    cms={true}
                  />
                  <CustomField
                    label="instagram"
                    placeholder="Your Instagram Link"
                    name={"instagramLink"}
                    cms={true}
                  />
                </div>
                <div className="flex justify-around mt-[20px]">
                  <CustomField
                    label="twitter"
                    placeholder="Your Twitter Link"
                    name={"twitterLink"}
                    cms={true}
                  />
                  <CustomField
                    label="threads"
                    placeholder="Your Threads Link"
                    name={"threadsLink"}
                    cms={true}
                  />
                </div>
              </div>
              {/* contact infromation  */}
              <div>
                <h1 className="font-poppins capitalize text-[20px] text-secondary-brown-darker font-semibold mb-[10px] ">
                  contact information
                </h1>

                <div className="flex justify-around">
                  <CustomField
                    label="email"
                    placeholder="Your Email"
                    name={"email"}
                    cms={true}
                  />
                  <CustomField
                    label="phone number"
                    name={"phoneNumber"}
                    placeholder="Your phone number"
                    cms={true}
                  />
                </div>
                <div className="flex justify-around mt-[20px]">
                  <CustomField
                    label="address"
                    placeholder="Your address"
                    name={"address"}
                    cms={true}
                  />
                  <CustomField
                    label="whatsapp"
                    placeholder="Your whatsapp"
                    name={"whatsapp"}
                    cms={true}
                  />
                </div>
                <div className="flex items-center justify-center mt-[20px]">
                  <FillButton additionalStyle="px-[40px] py-[12px] flex gap-[12px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17 20.7505H7C6.27065 20.7505 5.57118 20.4608 5.05546 19.945C4.53973 19.4293 4.25 18.7298 4.25 18.0005V6.00049C4.25 5.27114 4.53973 4.57167 5.05546 4.05594C5.57118 3.54022 6.27065 3.25049 7 3.25049H14.5C14.6988 3.25066 14.8895 3.3298 15.03 3.47049L19.53 8.00049C19.6707 8.14101 19.7498 8.33164 19.75 8.53049V18.0005C19.75 18.7298 19.4603 19.4293 18.9445 19.945C18.4288 20.4608 17.7293 20.7505 17 20.7505ZM7 4.75049C6.66848 4.75049 6.35054 4.88218 6.11612 5.1166C5.8817 5.35103 5.75 5.66897 5.75 6.00049V18.0005C5.75 18.332 5.8817 18.65 6.11612 18.8844C6.35054 19.1188 6.66848 19.2505 7 19.2505H17C17.3315 19.2505 17.6495 19.1188 17.8839 18.8844C18.1183 18.65 18.25 18.332 18.25 18.0005V8.81049L14.19 4.75049H7Z"
                        fill="white"
                      />
                      <path
                        d="M16.75 20.0005H15.25V13.7505H8.75004V20.0005H7.25004V13.5005C7.25004 13.169 7.38174 12.851 7.61616 12.6166C7.85058 12.3822 8.16852 12.2505 8.50004 12.2505H15.5C15.8316 12.2505 16.1495 12.3822 16.3839 12.6166C16.6183 12.851 16.75 13.169 16.75 13.5005V20.0005ZM12.47 8.75049H8.53004C8.36063 8.74918 8.19314 8.71452 8.03713 8.64848C7.88112 8.58244 7.73965 8.48631 7.62079 8.3656C7.50193 8.24488 7.40801 8.10193 7.3444 7.94492C7.28078 7.7879 7.24872 7.61989 7.25004 7.45049V4.00049H8.75004V7.25049H12.25V4.00049H13.75V7.45049C13.7514 7.61989 13.7193 7.7879 13.6557 7.94492C13.5921 8.10193 13.4981 8.24488 13.3793 8.3656C13.2604 8.48631 13.119 8.58244 12.9629 8.64848C12.8069 8.71452 12.6394 8.74918 12.47 8.75049Z"
                        fill="white"
                      />
                    </svg>
                    save changes
                  </FillButton>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ContentManagement;
