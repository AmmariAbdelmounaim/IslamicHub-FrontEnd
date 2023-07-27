import { Field, useFormikContext } from "formik";
import { ErrorMessage } from "./errorMessage";

interface CustomFieldProps<T> {
  name: keyof T;
  label: string;
  placeholder: string;
  type?: string;
  cms?: boolean;
  textarea?: boolean;
}

export function CustomField<T>({
  name,
  label,
  placeholder,
  type,
  cms = false,
  textarea = false,
}: CustomFieldProps<T>) {
  const { errors, touched } = useFormikContext<T>(); // access formik context
  const hasError = Boolean(touched[name as keyof T] && errors[name as keyof T]);

  return (
    <div className={`${cms && "flex flex-col justify-center w-[366px]"}`}>
      <label
        htmlFor={name as string}
        className={` ${
          cms && "text-center mb-[16px]"
        } font-poppins capitalize text-[18px] text-secondary-brown-dark`}
      >
        {label}
      </label>
      <ErrorMessage name={name as string} />
      <Field
        as={`${textarea ? "textarea" : "input"}`}
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        className={`
          w-full flex  ${
            textarea ? "h-[100px] pt-[10px] pl-[10px]" : "h-[40px] pl-[16px]"
          }
           items-center rounded-lg ${
             !cms && "min-w-[420px]"
           } font-poppins text-[16px] font-medium placeholder:text-color-placeholder bg-transparent
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
