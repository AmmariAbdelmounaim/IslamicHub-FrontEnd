import React, { useState, useEffect, useRef, useCallback } from "react";
import { Field, useField } from "formik";
import { SketchPicker, ColorResult } from "react-color";

interface ColorPickerProps<T> {
  name: keyof T;
}

export function ColorPicker<T>({ name }: ColorPickerProps<T>) {
  const [color, setColor] = useState("#ffffff");
  const [showPicker, setShowPicker] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [, meta, helpers] = useField(name as string);

  const handleChange = (chosenColor: ColorResult) => {
    setColor(chosenColor.hex);
    helpers.setValue(chosenColor.hex);
  };

  const handlePickerDisplay = () => {
    setShowPicker(!showPicker);
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowPicker(false);
      }
    },
    [setShowPicker]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="mt-[300px] ml-[100px]">
      <div
        onClick={handlePickerDisplay}
        className="px-[16px] py-[8px] flex items-center justify-between w-[229px] h-[56px] hover:cursor-pointer  border-[2px] border-solid border-secondary-brown-normal rounded-[10px]  relative"
        ref={ref}
      >
        <div className="px-[16px] py-[14px]">
          <p className="text-secondary-brown-normal-60-opacity font-poppins text-[16px] font-medium text-center">
            {color}
          </p>
        </div>
        <div
          className={`w-[56px] h-[40px] rounded-[10px] border-[1px] border-secondary-brown-normal bg-[${color}]`}
          style={{ backgroundColor: color }}
        >
          {showPicker && (
            <div className="absolute bottom-[56px] right-[0px] ">
              <SketchPicker color={color} onChange={handleChange} />
            </div>
          )}
        </div>
      </div>
      <Field type="hidden" name={name} />
    </div>
  );
}

export default ColorPicker;
