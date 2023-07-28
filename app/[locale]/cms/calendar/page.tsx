"use client";
import React from "react";
import Event from "../../../../components/cms/event";
import ColorPicker from "../../../../components/cms/colorPicker";
import { Form, Formik } from "formik";
import { CustomField } from "../../../../components/formInputs/customField";
import FillButton from "../../../../components/button/FillButton";
import EventCard from "../../../../components/cms/eventCard";
import { useTranslations } from "next-intl";

interface FormValues {
  favoriteColor: string;
}

const initialValues: FormValues = {
  favoriteColor: "#ffffff",
};

export default function CalendarManagement() {
  const t = useTranslations("calendar");
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
                calendar management
              </h3>
              <p className="font-poopins text-[18px]  capitalize text-primary-orange-dark-active">
                this one of the main section of your landing page, where you can
                display 3 upcoming events of your islamic center. by provigind
                essential event iformations such as: event date, event name,
                event description, event time and location
              </p>
            </div>
            {/* event example */}
            <div className="flex flex-col gap-[24px]">
              <h4 className="font-poppins capitalize text-[20px] text-secondary-brown-darker font-semibold">
                event component example
              </h4>
              <Event />
            </div>
            {/* colors */}
            <div className="flex flex-col p-[16px] gap-[40px] rounded-[10px] border-solid border-[1px] border-secondary-brown-normal-30-opacity">
              <div className="flex flex-col border-b-[1px] border-b-secondary-brown-normal-30-opacity">
                <p className="font-poppins capitalize text-[20px] text-secondary-brown-darker font-semibold mb-[10px]">
                  colors
                </p>
              </div>
              <div className="flex justify-between">
                <ColorPicker
                  label="border color"
                  name={"borderColor"}
                  defaultColor="#362A1C"
                />
                <ColorPicker
                  label="background color"
                  name={"backgroundColor"}
                  defaultColor="#F8ECE1"
                />
                <ColorPicker
                  label="additional info color"
                  name={"additionalInfoColor"}
                  defaultColor="#CE7D39"
                />
              </div>
            </div>

            {/* event information */}
            <div className="px-[16px] pt-[16px] pb-[32px] flex flex-col gap-[40px] border-solid border-[1px] border-secondary-brown-normal-30-opacity rounded-[10px] ">
              <div className="flex flex-col border-b-[1px] border-b-secondary-brown-normal-30-opacity">
                <p className="font-poppins capitalize text-[20px] text-secondary-brown-darker font-semibold mb-[10px]">
                  event information
                </p>
              </div>
              {/* fist event */}
              <EventCard title="first event" />
              {/* second event */}
              <EventCard title="second event" />
              {/* third event */}
              <EventCard title="third event" withoutBorder />
            </div>
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
