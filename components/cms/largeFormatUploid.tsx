import { useField } from "formik";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface LargeFormatUploidProps<T> {
  name: keyof T;
  smallFormat?: boolean;
}

export default function LargeFormatUploid<T>({
  name,
  smallFormat = false,
}: LargeFormatUploidProps<T>) {
  const [field, meta, helpers] = useField(name as string);
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    helpers.setValue(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const removeFile = useCallback(() => {
    helpers.setValue(null);
    setPreview(null);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col gap-[24px]">
      <label
        htmlFor={name as string}
        className="font-poppins text-[18px] capitalize text-secondary-brown-darker"
      >
        {smallFormat ? "small format logo" : "large format logo"}
      </label>

      <div
        {...getRootProps()}
        className={`flex flex-col gap-8 border-2 border-secondary-brown-normal-30-opacity ${
          smallFormat ? "w-[196px] h-[163px]" : "w-[377px] h-[277px]"
        }  justify-center items-center rounded-lg cursor-pointer relative`}
      >
        <input {...getInputProps()} />

        <Image
          src={"/uploid.svg"}
          alt="uploid icon"
          width={smallFormat ? 40 : 78}
          height={smallFormat ? 40 : 78}
        />

        <p className="font-poppins text-center text-[18px] font-normal text-secondary-brown-darker capitalize">
          uploid your center&apos;s logo here
        </p>
      </div>
      {preview && (
        <div className="inline-flex rounded-[2px] border-solid border-[1px] border-secondary-brown-normal-30-opacity mt-[10px]  w-[100px] h-[100px] p-[4px] box-border relative">
          <button
            onClick={removeFile}
            className="absolute flex items-center justify-center top-[-12px] right-[-12px] bg-primary-orange-normal hover:bg-primary-orange-normal-hover rounded-full text-white w-6 h-6"
          >
            <Image
              src={"/cross_icon.svg"}
              width={12}
              height={12}
              alt="cross icon"
            />
          </button>
          <div className="flex min-w-0 overflow-hidden">
            <Image
              src={preview}
              alt="Preview"
              className="block w-auto h-[100%] "
              width={!smallFormat ? 450 : 350}
              height={!smallFormat ? 100 : 50}
            />
          </div>
        </div>
      )}
    </div>
  );
}
