import { Field, useFormikContext } from "formik";
import { ErrorMessage } from "./errorMessage";

interface CustomFieldProps<T> {
  name: keyof T;
  label: string;
  placeholder: string;
  type?: string;
}

export function CustomField<T>({
  name,
  label,
  placeholder,
  type,
}: CustomFieldProps<T>) {
  const { errors, touched } = useFormikContext<T>(); // access formik context
  const hasError = Boolean(touched[name as keyof T] && errors[name as keyof T]);

  return (
    <div>
      <label
        htmlFor={name as string}
        className="font-poppins capitalize text-[18px] text-secondary-brown-dark"
      >
        {label}
      </label>
      <ErrorMessage name={name as string} />
      <Field
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        className={`
          w-full flex h-[40px] pl-[16px] items-center rounded-lg min-w-[420px]
          font-poppins text-[16px] font-medium placeholder:text-color-placeholder bg-transparent
          ${
            hasError
              ? "border-2 border-red-600"
              : "border-2 border-secondary-brown-normal "
          }
        `}
      />
    </div>
  );
}
