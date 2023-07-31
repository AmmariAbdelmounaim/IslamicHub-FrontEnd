import { useField } from "formik";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
interface SliderProps<T> {
  name: keyof T;
  label?: string;
}

function Slider<T>({
  name,
  label = "upload images for your slider",
}: SliderProps<T>) {
  const [field, meta, helpers] = useField(name as string);
  const [previews, setPreviews] = useState<Array<string>>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    helpers.setValue(acceptedFiles);

    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews((prevState) => [...prevState, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: true, // Allow multiple files
    onDrop,
  });

  return (
    <div className="flex gap-[40px] items-center overflow-x-auto whitespace-nowrap scrollbar-hide p-[10px]">
      <div className="">
        <div
          {...getRootProps()}
          className="flex flex-col gap-[32px]  border-2 border-secondary-brown-normal-30-opacity w-[377px] h-[277px] justify-center items-center rounded-lg cursor-pointer relative "
        >
          <input {...getInputProps()} />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="79"
            height="78"
            viewBox="0 0 79 78"
            fill="none"
          >
            <g clipPath="url(#clip0_1227_7606)">
              <path
                d="M68.75 48.7499V58.4999H78.5V64.9999H68.75V74.7499H62.25V64.9999H52.5V58.4999H62.25V48.7499H68.75ZM68.776 9.74988C70.557 9.74988 72 11.1961 72 12.9771V42.2499H65.5V16.2499H13.5V61.7466L46 29.2499L55.75 38.9999V48.1941L46 38.4441L22.6878 61.7499H46V68.2499H10.224C9.36864 68.249 8.54861 67.9086 7.94409 67.3035C7.33957 66.6984 7 65.878 7 65.0226V12.9771C7.00595 12.1236 7.34743 11.3067 7.95067 10.7028C8.55391 10.099 9.37049 9.75669 10.224 9.74988H68.776ZM26.5 22.7499C28.2239 22.7499 29.8772 23.4347 31.0962 24.6537C32.3152 25.8727 33 27.526 33 29.2499C33 30.9738 32.3152 32.6271 31.0962 33.8461C29.8772 35.0651 28.2239 35.7499 26.5 35.7499C24.7761 35.7499 23.1228 35.0651 21.9038 33.8461C20.6848 32.6271 20 30.9738 20 29.2499C20 27.526 20.6848 25.8727 21.9038 24.6537C23.1228 23.4347 24.7761 22.7499 26.5 22.7499Z"
                fill="#CE7D39"
              />
            </g>
            <defs>
              <clipPath id="clip0_1227_7606">
                <rect
                  width="78"
                  height="78"
                  fill="white"
                  transform="translate(0.5 -0.00012207)"
                />
              </clipPath>
            </defs>
          </svg>

          <p className="font-poppins text-center text-[18px] font-normal text-secondary-brown-darker capitalize">
            {label}
          </p>
        </div>
      </div>
      {previews && (
        <div className="flex gap-[40px] ">
          {previews.map((preview, index) => (
            <div
              key={index}
              className="inline-flex rounded-[10px] border-solid border-[1px] border-secondary-brown-normal-30-opacity w-[377px] h-[278px] box-border relative"
            >
              <div className="flex min-w-0 overflow-hidden">
                <Image
                  src={preview}
                  alt={`Preview ${index}`}
                  className="block w-auto h-[100%] rounded-[10px] "
                  width={450}
                  height={100}
                />
              </div>
              <button
                className="absolute top-[-10px] right-[-10px] bg-primary-orange-normal hover:bg-primary-orange-normal-hover text-white rounded-full w-6 h-6 flex justify-center items-center"
                onClick={() => {
                  // Create new arrays without the selected image/file
                  const newPreviews = [...previews];
                  newPreviews.splice(index, 1);
                  const newFiles = [...field.value];
                  newFiles.splice(index, 1);

                  // Update state and field value
                  setPreviews(newPreviews);
                  helpers.setValue(newFiles);
                }}
              >
                <Image
                  src={"/cross_icon.svg"}
                  width={10}
                  height={10}
                  alt="cross icon"
                />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Slider;
