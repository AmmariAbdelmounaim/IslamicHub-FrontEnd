"use client";
import React from "react";
import FillButton from "../button/FillButton";
import { CustomField } from "../formInputs/customField";
import DatePicker from "./datePicker";

export default function EventCard({
  title,
  withoutBorder = false,
}: {
  title: string;
  withoutBorder?: boolean;
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
            name={`${title.split(" ")[0]}eventName`}
          />
          <DatePicker
            label="event date"
            placeholder="Enter The Date of Your Event"
            name={`${title.split(" ")[0]}eventDate`}
          />
        </div>
        <div className="flex gap-[64px]">
          <CustomField
            label="event location"
            placeholder="Enter The Location Of Your Event"
            cms
            name={`${title.split(" ")[0]}eventLocation`}
          />
          <CustomField
            label="event time"
            placeholder="Enter The Time Of Your Event"
            cms
            name={`${title.split(" ")[0]}eventTime`}
          />
        </div>
        <div className="flex items-center justify-center">
          <CustomField
            label="event description"
            placeholder="Event Description"
            cms
            textarea
            name={`${title.split(" ")[0]}eventDescription`}
          />
        </div>
        <div
          className={`flex items-center justify-center ${
            !withoutBorder && "mb-[40px]"
          } `}
        >
          <FillButton additionalStyle="pt-[12px] px-[40px] ">
            add event
          </FillButton>
        </div>
      </div>
    </div>
  );
}
