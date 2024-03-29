"use client";
"use strict";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Field, useField } from "formik";
import { SketchPicker, ColorResult } from "react-color";
import Canvas from "canvas";
interface ColorPickerProps<T> {
  name: keyof T;
  label: string;
  defaultColor?: string;
}

function ColorPicker<T>({ name, label, defaultColor }: ColorPickerProps<T>) {
  const [color, setColor] = useState<string>(defaultColor as string);
  const [showPicker, setShowPicker] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [, meta, helpers] = useField(name as string);

  const handleChange = (chosenColor: ColorResult) => {
    setColor(chosenColor.hex);
    helpers.setValue(chosenColor.hex);
  };

  const handlePickerDisplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPicker(!showPicker);
  };

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (ref.current && !ref.current.contains(event.target as Node)) {
  //       setShowPicker(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [ref]);

  return (
    <div className="flex flex-col gap-[24px] items-center justify-center">
      <label
        htmlFor={name as string}
        className="font-poppins capitalize text-center font-normal text-[18px] text-secondary-brown-darker"
      >
        {label}
      </label>
      <div
        onClick={handlePickerDisplay}
        className="px-[16px] py-[8px] flex items-center justify-between w-[229px] h-[56px] hover:cursor-pointer  border-[2px] border-solid border-secondary-brown-normal rounded-[10px]  relative "
        ref={ref}
      >
        <div className="px-[16px] py-[14px]">
          <p className="text-secondary-brown-normal-60-opacity font-poppins text-[16px] font-medium text-center ">
            {color}
          </p>
        </div>
        <div
          className={`w-[56px] h-[40px] rounded-[10px] border-[1px] border-secondary-brown-normal `}
          style={{ backgroundColor: color }}
        >
          {showPicker && (
            <div className="absolute top-[56px] right-[0px] z-50 ">
              <SketchPicker
                disableAlpha={false}
                color={color}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
      </div>
      <Field type="hidden" name={name} />
    </div>
  );
}
export default ColorPicker;
