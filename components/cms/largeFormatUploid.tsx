import { useField } from "formik";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface LargeFormatUploidProps<T> {
  label: string;
  name: keyof T;
}

export default function LargeFormatUploid<T>({
  label,
  name,
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

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div
        {...getRootProps()}
        className="flex flex-col gap-8 border-2 border-secondary-brown-normal-30-opacity w-[377px] h-[277px] justify-center items-center rounded-lg cursor-pointer relative"
      >
        <input {...getInputProps()} />

        <Image src={"/uploid.svg"} alt="uploid icon" width={78} height={78} />

        <p className="font-poppins text-center text-[18px] font-normal text-secondary-brown-darker capitalize">
          uploid your center&apos;s logo here
        </p>
      </div>
      {preview && (
        <div className="inline-flex rounded-[2px] border-solid border-[1px] border-secondary-brown-normal-30-opacity mt-[10px]  w-[100px] h-[100px] p-[4px] box-border">
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
    </>
  );
}