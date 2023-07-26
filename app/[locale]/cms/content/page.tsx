"use client";
import { Formik, Form } from "formik";
import ColorPicker from "../../../../components/cms/colorPicker";
import LargeFormatUploid from "../../../../components/cms/largeFormatUploid";
import CmsCustomNavbar from "../../../../components/cms/cmsNavbar";
import CustomCheckBox from "../../../../components/cms/checkBox";
import { CustomField } from "../../../../components/formInputs/customField";
import { CustomPhoneInput } from "../../../../components/formInputs/customPhoneInput";

interface FormValues {
  favoriteColor: string;
}

const initialValues: FormValues = {
  favoriteColor: "#ffffff",
};

function ContentManagement() {
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
      {({ isSubmitting }) => (
        <Form>
          <div className="flex flex-col gap-[40px]">
            {/* introduction */}
            <div className="flex flex-col gap-[24px]">
              <h1 className="font-poppins capitalize text-[24px] font-semibold text-secondary-brown-darker">
                content management
              </h1>
              <p className="font-poppins capitalize text-[18px] font-normal text-secondary-brown-darker">
                {" "}
                this section is for chooseng the main color palette and setting
                up the main components of your islmaic center landing page which
                are the logo, Header and the footer
              </p>
            </div>
            <div className="p-[16px] border-solid border-[2px] border-secondary-brown-normal-30-opacity rounded-[10px] flex flex-col gap-[40px]">
              {/* Color Palette */}
              <div className="flex flex-col gap-[24px]">
                <div className="border-b border-b-secondary-brown-normal-30-opacity">
                  <h1 className="font-poppins capitalize text-[24px] text-secondary-brown-darker font-semibold mb-[10px] ">
                    color palette
                  </h1>
                </div>

                <div className="flex justify-between px-[8px] ">
                  <ColorPicker name={"titleColor"} label="title color" />
                  <ColorPicker name={"textColor"} label="text color" />
                  <ColorPicker
                    name={"backgroundColor"}
                    label="background color"
                  />
                  <ColorPicker name={"primaryColor"} label="primary color" />
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
                  <LargeFormatUploid name={"smallUploid"} smallFormat={true} />
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
                  />
                  <ColorPicker name={"textColorHeader"} label="text color" />
                </div>
                <CmsCustomNavbar />
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
                <div className="border-b border-b-secondary-brown-normal-30-opacity">
                  <h1 className="font-poppins capitalize text-[24px] text-secondary-brown-darker font-semibold mb-[10px] ">
                    footer
                  </h1>
                </div>

                <div className="flex gap-[56px]">
                  <ColorPicker
                    name={"backgroundColorFooter"}
                    label="background color"
                  />
                  <ColorPicker name={"textColorFooter"} label="text color" />
                </div>
              </div>
              <div className="border-solid border-[2px] border-secondary-brown-normal-30-opacity py-[24px] flex flex-col gap-[16px] items-center justify-center">
                <p className="font-poppins text-[18px] capitalize text-secondary-brown-darker text-center">
                  logo
                </p>
                <div className="flex flex-col gap-[32px]">
                  <p className="font-poppins text-[18px] capitalize text-secondary-brown-darker text-center">
                    social media
                  </p>
                  <p className="font-poppins text-[18px] capitalize text-secondary-brown-darker text-center">
                    contact information
                  </p>
                </div>
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
              ?{/*  */}
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
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ContentManagement;
