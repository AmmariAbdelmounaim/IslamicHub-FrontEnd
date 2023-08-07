"use client";
import React from "react";
import Event from "../../../../components/cms/event";
import ColorPicker from "../../../../components/cms/colorPicker";
import { FieldArray, Form, Formik } from "formik";
import FillButton from "../../../../components/button/FillButton";
import EventCard from "../../../../components/cms/eventCard";
import { useTranslations } from "next-intl";

interface FormValues {
  events: {
    eventName: string;
    eventDescription: string;
    eventDate: string;
    eventLocation: string;
    eventTime: string;
  }[];
  borderColor: string;
  backgroundColor: string;
  additionalInfoColor: string;
}

const initialValues: FormValues = {
  events: [
    {
      eventName: "",
      eventDescription: "",
      eventDate: "",
      eventLocation: "",
      eventTime: "",
    },
  ],
  borderColor: "#CE7D39",
  backgroundColor: "#F8ECE1",
  additionalInfoColor: "#FAF2EB",
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
      {({ values }) => (
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
              <Event
                additionalInfoColor={values.additionalInfoColor}
                backgroundColor={values.backgroundColor}
                borderColor={values.borderColor}
              />
            </div>
            {/* colors */}
            <div className="flex flex-col p-[16px] gap-[40px] rounded-[10px] border-solid border-[1px] border-secondary-brown-normal-30-opacity">
              <div className="flex flex-col border-b-[1px] border-b-secondary-brown-normal-30-opacity">
                <p className="font-poppins capitalize text-[20px] text-secondary-brown-darker font-semibold mb-[10px]">
                  colors
                </p>
              </div>
              <div className="flex justify-between">
                <ColorPicker<FormValues>
                  label="border color"
                  name={"borderColor"}
                  defaultColor={initialValues.borderColor}
                />
                <ColorPicker<FormValues>
                  label="background color"
                  name={"backgroundColor"}
                  defaultColor={initialValues.backgroundColor}
                />
                <ColorPicker<FormValues>
                  label="additional info color"
                  name={"additionalInfoColor"}
                  defaultColor={initialValues.additionalInfoColor}
                />
              </div>
            </div>

            {/* event information */}
            <div className="px-[16px] pt-[16px] pb-[32px] flex flex-col gap-[40px] border-solid border-[1px] border-secondary-brown-normal-30-opacity rounded-[10px]  ">
              <div className="flex flex-col border-b-[1px] border-b-secondary-brown-normal-30-opacity">
                <p className="font-poppins capitalize text-[20px] text-secondary-brown-darker font-semibold mb-[10px]">
                  event information
                </p>
              </div>
              <FieldArray
                name="events"
                render={(arrayHelpers) => (
                  <div className="flex flex-col ">
                    {values.events.map((event, index) => (
                      <EventCard
                        key={index}
                        title={`event ${index + 1}`}
                        index={index}
                        arrayHelpers={arrayHelpers}
                      />
                    ))}
                    <div className="flex w-full items-center justify-center ">
                      <FillButton
                        onClick={() =>
                          arrayHelpers.push({
                            eventName: "",
                            eventDescription: "",
                            eventDate: "",
                            eventLocation: "",
                            eventTime: "",
                          })
                        }
                        additionalStyle="mt-[27px] gap-[10px] w-[250px]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="30"
                          fill="white"
                          height="30"
                          viewBox="0 0 128 128"
                        >
                          <path d="M 64 6.0507812 C 49.15 6.0507812 34.3 11.7 23 23 C 0.4 45.6 0.4 82.4 23 105 C 34.3 116.3 49.2 122 64 122 C 78.8 122 93.7 116.3 105 105 C 127.6 82.4 127.6 45.6 105 23 C 93.7 11.7 78.85 6.0507812 64 6.0507812 z M 64 12 C 77.3 12 90.600781 17.099219 100.80078 27.199219 C 121.00078 47.499219 121.00078 80.500781 100.80078 100.80078 C 80.500781 121.10078 47.500781 121.10078 27.300781 100.80078 C 7.0007813 80.500781 6.9992188 47.499219 27.199219 27.199219 C 37.399219 17.099219 50.7 12 64 12 z M 64 42 C 62.3 42 61 43.3 61 45 L 61 61 L 45 61 C 43.3 61 42 62.3 42 64 C 42 65.7 43.3 67 45 67 L 61 67 L 61 83 C 61 84.7 62.3 86 64 86 C 65.7 86 67 84.7 67 83 L 67 67 L 83 67 C 84.7 67 86 65.7 86 64 C 86 62.3 84.7 61 83 61 L 67 61 L 67 45 C 67 43.3 65.7 42 64 42 z"></path>
                        </svg>
                        Add Event
                      </FillButton>
                    </div>
                  </div>
                )}
              />
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
