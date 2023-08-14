import { Field, FieldProps } from "formik";
import React from "react";
import DateView, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface DatePickerProps {
  label: string;
  name: string;
  placeholder: string;
  timeOnly?: boolean;
  value?: string;
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
      readOnly
      value={value}
      ref={ref}
    />
  )
);

CustomInput.displayName = "CustomInput";

function DatePicker({
  label,
  name,
  placeholder,
  timeOnly = false,
}: DatePickerProps) {
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
              selected={(field.value && new Date(field.value)) || null}
              closeOnScroll={true}
              showTimeSelect
              onChange={(val) => setFieldValue(name, val)}
              showTimeSelectOnly={timeOnly}
              placeholderText="Select a date "
              customInput={<CustomInput placeholder={placeholder} />}
              dateFormat={`${timeOnly ? "h:mm aa" : "MMMM d, yyyy h:mm aa"} `}
            />
          );
        }}
      </Field>
    </div>
  );
}

export default DatePicker;
