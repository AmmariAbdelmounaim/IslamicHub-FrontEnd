"use client";

import {
  Formik,
  Field,
  Form,
  ErrorMessage as FormikErrorMessage,
  useFormikContext,
} from "formik";
import { useEffect } from "react";
import { useRegisterMutation } from "../../../redux/features/usersApiSlice";
import { setCredentials } from "../../../redux/features/authSlice";
import * as Yup from "yup";
import FillButton from "../../button/FillButton";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

countries.registerLocale(enLocale);

interface FormValues {
  islamicCenterName: string;
  email: string;
  password: string;
  country: string;
  address: string;
  phoneNumber: string;
}

// Validation schema
const validationSchema = Yup.object({
  islamicCenterName: Yup.string().required("Islamic Center name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters")
    .required("Password required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  country: Yup.string().required("Country is required"),
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.string()
    .test("phoneNumber", "Phone number is not valid", (value) =>
      isPossiblePhoneNumber(value ?? "")
    )
    .required("Phone number is required"),
});

// Custom Field
const CustomField: React.FC<{
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}> = ({ name, label, placeholder, type }) => {
  const { errors, touched } = useFormikContext<FormValues>(); // access formik context
  const hasError = Boolean(
    touched[name as keyof FormValues] && errors[name as keyof FormValues]
  );

  return (
    <div>
      <label
        htmlFor={name}
        className="font-poppins capitalize text-[18px] text-secondary-brown-dark"
      >
        {label}
      </label>
      <ErrorMessage name={name} />
      <Field
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        className={`
          w-full flex h-[40px] pl-[16px] items-center rounded-lg 
          font-poppins text-[16px] font-medium placeholder:text-color-placeholder
          ${
            hasError
              ? "border-2 border-red-600"
              : "border-2 border-secondary-brown-normal placeholder:capitalize"
          }
        `}
      />
    </div>
  );
};

// Custom Select Field
const CustomSelectField: React.FC<{ name: string; label: string }> = ({
  name,
  label,
}) => {
  const { errors, touched } = useFormikContext<FormValues>(); // access formik context
  const hasError = Boolean(
    touched[name as keyof FormValues] && errors[name as keyof FormValues]
  ); // check if this field has an error

  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map(([key, value]) => ({
    label: value,
    value: key,
  }));

  return (
    <div>
      <label
        htmlFor={name}
        className="font-poppins capitalize text-[18px] text-secondary-brown-dark"
      >
        {label}
      </label>
      <ErrorMessage name={name} />
      <div className="relative">
        <Field
          as="select"
          name={name}
          className={`
            w-full appearance-none h-[40px] pl-[16px] pr-[30px] items-center rounded-lg 
            font-poppins text-[16px] font-medium placeholder:text-color-placeholder
            ${
              hasError
                ? "border-2 border-red-600"
                : "border-2 border-secondary-brown-normal placeholder:capitalize"
            }
          `}
        >
          <option value="">Select your country</option>
          {countryArr.map((country) => (
            <option key={country.value} value={country.label}>
              {country.label}
            </option>
          ))}
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
    </div>
  );
};

// Custom Error Message
const ErrorMessage: React.FC<{ name: string }> = ({ name }) => (
  <FormikErrorMessage name={name}>
    {(msg) => <p className="text-red-600 font-poppins font-medium">{msg}</p>}
  </FormikErrorMessage>
);

// Custom Phone Input

const CustomPhoneInput: React.FC<{ name: string; label: string }> = ({
  name,
  label,
}) => {
  const { setFieldValue, values, errors, touched } =
    useFormikContext<FormValues>();
  const hasError = Boolean(
    touched[name as keyof FormValues] && errors[name as keyof FormValues]
  );

  return (
    <div>
      <label
        htmlFor={name}
        className="font-poppins capitalize text-[18px] text-secondary-brown-dark"
      >
        {label}
      </label>
      <ErrorMessage name={name} />
      <PhoneInput
        international={false}
        placeholder="Enter Your Phone Number"
        defaultCountry="MA"
        value={values[name as keyof FormValues]}
        onChange={(value) => setFieldValue(name, value)}
        className={`
          w-full flex h-[40px] pl-[16px] items-center rounded-lg 
          font-poppins text-[16px] font-medium placeholder:text-color-placeholder
          ${
            hasError
              ? "border-2 border-red-600"
              : "border-2 border-secondary-brown-normal placeholder:capitalize"
          }
        `}
      />
    </div>
  );
};

const CountrySelectWithCodes: React.FC<any> = ({ value, onChange }) => {
  const countryOptions = getCountries().map((countryCode) => {
    const callingCode = getCountryCallingCode(countryCode);
    return (
      <option key={countryCode} value={countryCode}>
        {countryCode}+{callingCode}
      </option>
    );
  });

  return (
    <select value={value} onChange={onChange}>
      {countryOptions}
    </select>
  );
};

const SignUpForm: React.FC = () => {
  countries.registerLocale(enLocale);

  const initialValues: FormValues = {
    islamicCenterName: "",
    email: "",
    password: "",
    country: "",
    address: "",
    phoneNumber: "",
  };

  //redux:
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state) => state.auth);
  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      console.log("there is already a user (:");
    }
  }, [userInfo]);
  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <h1 className=" capitalize text-secondary-brown-darker font-sourceSerif text-[32px] font-normal">
          sign up to islamic hub
        </h1>
        <p className="capitalize font-poppins text-[16px] font-normal text-secondary-brown-normal">
          enter your details below
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const res = await register({
              firstname: values.islamicCenterName,
              lastname: "",
              email: values.email,
              tele: values.phoneNumber,
              ville: values.country,
              adresse: values.address,
              password: values.password,
            }).unwrap();
            dispatch(setCredentials({ ...res }));
          } catch (err) {
            console.log("error");
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <div className="my-[40px] flex flex-col gap-[32px]">
              <CustomField
                name="islamicCenterName"
                label="Islamic Center Name"
                placeholder="The Islamic Center Name"
              />
              <CustomField
                type="email"
                name="email"
                label="Email"
                placeholder="Example@gmail.com"
              />
              <CustomField
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your password"
              />
              <CustomSelectField name="country" label="Country" />
              <CustomField
                name="address"
                label="Address"
                placeholder="Enter your address"
              />
              <CustomPhoneInput name="phoneNumber" label="Phone Number" />
            </div>

            <div className="flex flex-col gap-[32px] justify-center items-center">
              <FillButton
                type="submit"
                disabled={isSubmitting}
                additionalStyle="w-[195px] h-[45px] flex items-center justify-center "
              >
                Sign Up
              </FillButton>
              <p className="capitalize font-poppins text-[16px]">
                you have an account?{" "}
                <span className="text-primary-orange-normal">Sign In</span>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
