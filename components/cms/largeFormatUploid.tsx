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
  const [preview, setPreview] = useState<string | null>(field.value || null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
      helpers.setValue(reader.result);
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
        <div
          className={`inline-flex rounded-[2px] border-solid border-[1px] border-secondary-brown-normal-30-opacity mt-[10px] bg-primary-orange-light-active ${
            !smallFormat ? "w-[100px] h-[100px]" : "w-[80px] h-[80px]"
          }  p-[4px] box-border relative`}
        >
          <button
            onClick={removeFile}
            className={`absolute flex items-center justify-center top-[-12px] right-[-12px] bg-primary-orange-normal hover:bg-primary-orange-normal-hover rounded-full text-white ${
              !smallFormat ? " w-6 h-6" : " w-5 h-5"
            }`}
          >
            <Image
              src={"/cross_icon.svg"}
              width={!smallFormat ? 12 : 10}
              height={!smallFormat ? 12 : 10}
              alt="cross icon"
            />
          </button>
          <div className="flex min-w-0 overflow-hidden">
            <Image
              src={preview}
              alt="Preview"
              className="block w-auto h-[100%] "
              width={450}
              height={100}
            />
          </div>
        </div>
      )}
    </div>
  );
}
