"use client";
import React from "react";
import FillButton from "../button/FillButton";
import { CustomField } from "../formInputs/customField";
import DatePicker from "./datePicker";
import { FieldArrayRenderProps } from "formik";

export default function EventCard({
  title,
  index,
  withoutBorder = false,
  arrayHelpers,
}: {
  title: string;
  index: number;
  withoutBorder?: boolean;
  arrayHelpers: FieldArrayRenderProps;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-[40px]${
        !withoutBorder &&
        "  border-b border-b-secondary-brown-normal-30-opacity"
      }`}
    >
      <p className="font-poppins text-[18px] font-semibold capitalize">
        {title}
      </p>
      <div className="flex flex-col gap-[56px]">
        <div className="flex gap-[64px]">
          <CustomField
            label="event name"
            placeholder="Enter The Name Of Your Event"
            cms
            name={`events.${index}.eventName`}
          />
          <DatePicker
            label="event date"
            placeholder="Enter The Date of Your Event"
            name={`events.${index}.eventDate`}
          />
        </div>
        <div className="flex gap-[64px]">
          <CustomField
            label="event location"
            placeholder="Enter The Location Of Your Event"
            cms
            name={`events.${index}.eventLocation`}
          />
          <CustomField
            label="event time"
            placeholder="Enter The Time Of Your Event"
            cms
            name={`events.${index}.eventTime`}
          />
        </div>
        <div className="flex items-center justify-center">
          <CustomField
            label="event description"
            placeholder="Event Description"
            cms
            textarea
            name={`events.${index}.eventDescription`}
          />
        </div>
        <div
          className={`flex items-center justify-center ${
            !withoutBorder && "mb-[40px]"
          } `}
        >
          <div
            className={`flex items-center justify-center ${
              !withoutBorder && "mb-[40px]"
            } `}
          >
            <FillButton
              additionalStyle="pt-[12px] px-[40px] gap-[10px]"
              onClick={() => arrayHelpers.remove(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
              </svg>
              Delete Event
            </FillButton>
          </div>
        </div>
      </div>
    </div>
  );
}
