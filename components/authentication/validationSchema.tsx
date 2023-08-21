import { isPossiblePhoneNumber } from "react-phone-number-input";
import * as Yup from "yup";

export const validationSchemaSignUpForm = Yup.object({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters")
    .required("Password required"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
  //   "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
  // ),
  country: Yup.string().required("Country is required"),
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.string()
    .test("phoneNumber", "Phone number is not valid", (value) =>
      isPossiblePhoneNumber(value ?? "")
    )
    .required("Phone number is required"),
});

export const validationSchemaLoginForm = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const validationSchemaPrayerTime = Yup.object({
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
});
