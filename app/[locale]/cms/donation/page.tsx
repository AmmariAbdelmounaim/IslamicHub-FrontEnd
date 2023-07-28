"use client";
import { Form, Formik } from "formik";
import React from "react";
import { CustomField } from "../../../../components/formInputs/customField";
import Slider from "../../../../components/cms/slider";
import FillButton from "../../../../components/button/FillButton";
import { useTranslations } from "next-intl";

interface FormValues {
  favoriteColor: string;
}

const initialValues: FormValues = {
  favoriteColor: "#ffffff",
};

function DonationManagement() {
  const t = useTranslations("donation");

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
          <div className="flex flex-col gap-[40px] pb-[20px]">
            {/* introduction */}
            <div className="flex flex-col gap-[24px]">
              <h3 className="font-poppins text-[24px] capitalize font-medium text-secondary-brown-darker">
                donation management
              </h3>
              <p className="font-poopins text-[18px]  capitalize text-primary-orange-dark-active">
                you can add donation to your landing page fill the fund raise
                information
              </p>
            </div>
            <div className="border rounded-[10px] p-[16px] border-secondary-brown-normal-30-opacity flex flex-col gap-[40px]">
              {/* fund   raise reason/name */}
              <div className="flex flex-col gap-[40px]">
                <div className="border-b border-b-secondary-brown-normal-30-opacity">
                  <h4 className="font-poppins text-[20px] text-secondary-brown-darker mb-[10px] capitalize font-semibold">
                    fund raise reason/name
                  </h4>
                </div>
                <div className="flex gap-[40px]">
                  <CustomField
                    label="donation reason"
                    placeholder="Enter the title for the donation section"
                    name={"donationReason"}
                  />
                  <CustomField
                    label="encouraging text"
                    placeholder="Ex: Help repair the cetner"
                    name={"donationReason"}
                  />
                </div>
              </div>
              {/* donation goal amount */}
              <div className="flex flex-col gap-[40px]">
                <div className="border-b border-b-secondary-brown-normal-30-opacity">
                  <h4 className="font-poppins text-[20px] text-secondary-brown-darker mb-[10px] capitalize font-semibold">
                    donation goal amount
                  </h4>
                </div>
                <div className="flex gap-[40px]">
                  <CustomField
                    label="dollars amount"
                    placeholder="enter the goal amount with dollars"
                    name={"dollarsAmount"}
                  />
                </div>
              </div>

              {/* donation image */}
              <div className="flex flex-col gap-[40px]">
                <div className="border-b border-b-secondary-brown-normal-30-opacity">
                  <h4 className="font-poppins text-[20px] text-secondary-brown-darker mb-[10px] capitalize font-semibold">
                    donation image
                  </h4>
                </div>
                <div className="flex gap-[40px]">
                  <Slider
                    name={"donationImage"}
                    label="uploid an image for the donation ..."
                  />
                </div>
              </div>
              {/* donation suggestion amount */}
              <div className="flex flex-col gap-[40px]">
                <div className="border-b border-b-secondary-brown-normal-30-opacity">
                  <h4 className="font-poppins text-[20px] text-secondary-brown-darker mb-[10px] capitalize font-semibold">
                    donation suggestion amounts
                  </h4>
                </div>
                <div className="flex flex-col gap-[56px] items-center">
                  <div className="flex gap-[64px]">
                    <CustomField
                      cms
                      name={"firstAmount"}
                      label="first amount"
                      placeholder="enter a suggestion amount. ex: $5"
                    />
                    <CustomField
                      cms
                      name={"secondAmount"}
                      label="second amount"
                      placeholder="enter a suggestion amount. ex: $10"
                    />
                  </div>
                  <div className="flex gap-[64px]">
                    <CustomField
                      cms
                      name={"thirdAmount"}
                      label="third amount"
                      placeholder="enter a suggestion amount. ex: $5"
                    />
                    <CustomField
                      cms
                      name={"fourthAmount"}
                      label="fourth amount"
                      placeholder="enter a suggestion amount. ex: $100"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <CustomField
                      cms
                      name={"fifthAmount"}
                      label="fifth amount"
                      placeholder="enter a suggestion amount. ex: $150"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* save */}
            <div className="flex items-center justify-center">
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
        </Form>
      )}
    </Formik>
  );
}

export default DonationManagement;
