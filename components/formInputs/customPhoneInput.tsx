import { useFormikContext } from "formik";
import { ErrorMessage } from "./errorMessage";
import PhoneInput from "react-phone-number-input";

interface CustomPhoneInputProps<T extends Record<string, string | undefined>> {
  name: keyof T;
  label: string;
}

export function CustomPhoneInput<T extends Record<string, string | undefined>>({
  name,
  label,
}: CustomPhoneInputProps<T>) {
  const { setFieldValue, values, errors, touched } = useFormikContext<T>();
  const hasError = Boolean(touched[name as keyof T] && errors[name as keyof T]);

  return (
    <div>
      <label
        htmlFor={String(name)}
        className="font-poppins capitalize text-[18px] text-secondary-brown-dark"
      >
        {label}
      </label>
      <ErrorMessage name={String(name)} />
      <PhoneInput
        international={false}
        inputstyle={{
          background: "lightblue",
        }}
        placeholder="Enter Your Phone Number"
        defaultCountry="MA"
        value={values[name as keyof T]}
        onChange={(value) => setFieldValue(name as string, value)}
        className={`
          w-full flex h-[40px] pl-[16px] items-center rounded-lg 
          font-poppins text-[16px] font-medium placeholder:text-color-placeholder bg-transparent
          ${
            hasError
              ? "border-2 border-red-600"
              : "border-2 border-secondary-brown-normal placeholder:capitalize"
          }
        `}
      />
    </div>
  );
}
