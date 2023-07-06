import { useFormik } from "formik";
import * as Yup from "yup";
import FillButton from "../../button/FillButton";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      islamicCenterName: "",
      email: "",
      password: "",
      country: "",
      address: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      islamicCenterName: Yup.string().required(
        "Islamic Center name ss required"
      ),
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
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone number is not valid"
        )
        .required("Phone number is required"),
    }),
    onSubmit(values, formikHelpers) {
      console.log("submit");
    },
  });
  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <h1 className="text-center capitalize text-secondary-brown-darker font-sourceSerif text-[32px] font-normal">
          sign up to islamic hub
        </h1>
        <p className="text-center capitalize font-poppins text-[16px] font-normal text-secondary-brown-normal">
          enter your details below
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-[32px]">
        <div>
          <label
            htmlFor="islamicCenterName"
            className="font-poppins m-0 capitalize text-[18px] text-secondary-brown-dark"
          >
            Islamic Center Name
          </label>
          <input
            id="islamicCenterName"
            type="text"
            placeholder="The islamic Center Name"
            className="w-full flex h-[40px] pl-[16px] items-center rounded-lg border-2 border-secondary-brown-normal placeholder:capitalize font-poppins text-[16px] font-medium placeholder:text-color-placeholder"
            {...formik.getFieldProps("islamicCenterName")}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="font-poppins capitalize text-[18px] text-secondary-brown-dark"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Example@gmail.com"
            className="flex w-full h-[40px] pl-[16px] items-center rounded-lg border-2 border-secondary-brown-normal  font-poppins text-[16px] font-medium placeholder:text-color-placeholder"
            {...formik.getFieldProps("email")}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="font-poppins capitalize text-[18px] text-secondary-brown-dark"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="enter your password"
            className="flex w-full h-[40px] pl-[16px] items-center rounded-lg border-2 border-secondary-brown-normal placeholder:capitalize font-poppins text-[16px] font-medium placeholder:text-color-placeholder"
            {...formik.getFieldProps("password")}
          />
        </div>
        <div>
          <label
            htmlFor="country"
            className="font-poppins capitalize text-[18px] text-secondary-brown-dark"
          >
            Country
          </label>
          <input
            id="country"
            type="text"
            placeholder="select your country"
            className="flex w-full h-[40px] pl-[16px] items-center rounded-lg border-2 border-secondary-brown-normal placeholder:capitalize font-poppins text-[16px] font-medium placeholder:text-color-placeholder"
            {...formik.getFieldProps("country")}
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="font-poppins capitalize text-[18px] text-secondary-brown-dark"
          >
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="enter your address"
            className="flex w-full h-[40px] pl-[16px] items-center rounded-lg border-2 border-secondary-brown-normal placeholder:capitalize font-poppins text-[16px] font-medium placeholder:text-color-placeholder"
            {...formik.getFieldProps("address")}
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="font-poppins capitalize text-[18px] text-secondary-brown-dark"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            placeholder="enter your phone number"
            className="flex w-full h-[40px] pl-[16px] items-center rounded-lg border-2 border-secondary-brown-normal placeholder:capitalize font-poppins text-[16px] font-medium placeholder:text-color-placeholder"
            {...formik.getFieldProps("phoneNumber")}
          />
        </div>
        <div className="flex justify-center">
          <FillButton
            additionalStye="w-[195px] h-[45px] flex items-center justify-center "
            type="submit"
          >
            Sign Up
          </FillButton>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
