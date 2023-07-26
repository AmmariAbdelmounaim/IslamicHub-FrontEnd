import React from "react";
import { useField } from "formik";

interface CustomCheckBoxProps {
  id: string;
  name: string;
  label: string;
}

export default function CustomCheckBox({ label, name }: CustomCheckBoxProps) {
  const [field] = useField(name as string);

  return (
    <div className="flex items-center gap-[16px] py-[8px] px-[16px]">
      <input
        type="checkbox"
        {...field}
        name={name}
        value=""
        className="w-4 h-4 text-primary-orange-normal-hover bg-gray-100 border-gray-300 rounded focus:ring-primary-orange-normal-hover  focus:ring-2 cursor-pointer"
      />
      <label
        htmlFor={name}
        className="font-poppins text-[18px] capitalize text-secondary-brown-darker "
      >
        {label}
      </label>
    </div>
  );
}
