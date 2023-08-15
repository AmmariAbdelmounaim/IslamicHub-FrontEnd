import { Field, FieldProps, useFormikContext } from "formik";
import React from "react";
import { ErrorMessage } from "./errorMessage";

interface Option {
  key: string;
  value: number | string;
}

interface SelectProps<T> {
  label: string;
  name: string;
  options: Option[];
}

function Select<T>({ label, name, options }: SelectProps<T>) {
  const { errors, touched } = useFormikContext<T>(); // access formik context
  const hasError = Boolean(touched[name as keyof T] && errors[name as keyof T]); // check if this field has an error

  return (
    <div>
      <label
        htmlFor={name as string}
        className="font-poppins capitalize text-[18px] text-secondary-brown-dark"
      >
        {label}
      </label>
      <div className="relative">
        <Field
          as="select"
          id={name}
          name={name}
          className={`
            w-full appearance-none h-[40px] pl-[16px] min-w-[420px] pr-[30px] items-center rounded-lg 
            font-poppins text-[16px] font-medium placeholder:text-color-placeholder bg-transparent
            ${
              hasError
                ? "border-2 border-red-600"
                : "border-2 border-secondary-brown-normal placeholder:capitalize"
            }
          `}
        >
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            );
          })}
        </Field>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <svg
            className=" h-4 w-4 fill-secondary-brown-normal"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.787-0.335c0 0-4.287-4.084-4.695-4.502s0.062-1.17 0-1.615z" />
          </svg>
        </div>
      </div>

      <ErrorMessage name={name as string} />
    </div>
  );
}

export default Select;
