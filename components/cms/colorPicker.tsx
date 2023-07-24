"use client";
import { useState, useEffect, useRef } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");
  const [showPicker, setShowPicker] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = (chosenColor: any) => {
    setColor(chosenColor.hex);
  };

  const handlePickerDisplay = () => {
    setShowPicker(!showPicker);
  };

  // Close the picker if the user clicks outside the component
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // cleanup the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mt-[300px] ml-[100px]">
      <div
        className="px-[16px] py-[8px] flex items-center justify-between w-[229px] h-[56px] hover:cursor-pointer  border-[2px] border-solid border-secondary-brown-normal rounded-[10px]  relative"
        onClick={handlePickerDisplay}
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
    </div>
  );
};

export default ColorPicker;
