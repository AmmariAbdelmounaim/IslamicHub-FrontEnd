import { Field, FieldProps } from "formik";
import React from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface DatePickerProps {
  label: string;
  name: string;
  placeholder: string;
}

type CustomInputProps = {
  value?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  placeholder: string;
};

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick, placeholder }, ref) => (
    <input
      className="w-full flex items-center h-[40px] pl-[16px] rounded-lg min-w-[366px] font-poppins text-[16px] border-2 border-secondary-brown-normal font-medium placeholder:text-color-placeholder bg-transparent"
      onClick={onClick}
      placeholder={placeholder}
      value={value}
      ref={ref}
    />
  )
);

CustomInput.displayName = "CustomInput";

function DatePicker({ label, name, placeholder }: DatePickerProps) {
  return (
    <div className="flex flex-col justify-center w-[366px]">
      <label
        htmlFor={name}
        className="text-center mb-[16px]
        font-poppins capitalize text-[18px] text-secondary-brown-dark"
      >
        {label}
      </label>
      <Field name={name} placeholder={placeholder}>
        {({ form, field }: FieldProps) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              selected={value}
              closeOnScroll={true}
              placeholderText="Select a date "
              onChange={(val) => setFieldValue(name, val)}
              customInput={<CustomInput placeholder={placeholder} />}
            />
          );
        }}
      </Field>
    </div>
  );
}

export default DatePicker;
