"use client";

import { Formik, Form } from "formik";
import { useRegisterMutation } from "../../../redux/features/usersApiSlice";
import { setCredentials } from "../../../redux/features/authSlice";
import FillButton from "../../button/FillButton";
import "react-phone-number-input/style.css";
import { useAppDispatch } from "../../../redux/store";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CustomField } from "../../formInputs/customField";
import { CustomSelectField } from "../../formInputs/customSelectField";
import { CustomPhoneInput } from "../../formInputs/customPhoneInput";
import { validationSchemaSignUpForm } from "../validationSchema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cookies } from "next/headers";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  country: string;
  address: string;
  phoneNumber: string;
}

const SignUpForm: React.FC = () => {
  const initialValues: FormValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    country: "",
    address: "",
    phoneNumber: "",
  };

  //redux:
  const router = useRouter();

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
        validationSchema={validationSchemaSignUpForm}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            localStorage.setItem("formValues", JSON.stringify(values));
            router.push("/verification");
          } catch (err) {
            toast.error("Email already exists !", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        }}
      >
        {() => (
          <Form>
            <div className="my-[40px] flex flex-col gap-[32px]">
              <CustomField<FormValues>
                name="firstname"
                label="First Name"
                placeholder="Enter your first name"
              />
              <CustomField<FormValues>
                name="lastname"
                label="Last Name"
                placeholder="Enter your last name"
              />
              <CustomField<FormValues>
                type="email"
                name="email"
                label="Email"
                placeholder="Example@gmail.com"
              />
              <CustomField<FormValues>
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your password"
              />
              <CustomSelectField name="country" label="Country" />
              <CustomField<FormValues>
                name="address"
                label="Address"
                placeholder="Enter your address"
              />
              <CustomPhoneInput name="phoneNumber" label="Phone Number" />
            </div>

            <div className="flex flex-col gap-[32px] justify-center items-center">
              <FillButton
                type="submit"
                additionalStyle="w-[195px] h-[45px] flex items-center justify-center "
              >
                Sign Up
              </FillButton>
              <p className="capitalize font-poppins text-[16px]">
                you have an account?{" "}
                <Link
                  href="/authentication/login"
                  className="text-primary-orange-normal"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
