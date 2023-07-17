"use client";

import { Formik, Form } from "formik";
import { useRegisterMutation } from "../../../redux/features/usersApiSlice";
import { setCredentials } from "../../../redux/features/authSlice";
import FillButton from "../../button/FillButton";
import "react-phone-number-input/style.css";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CustomField } from "../../formInputs/customField";
import { CustomSelectField } from "../../formInputs/customSelectField";
import { CustomPhoneInput } from "../../formInputs/customPhoneInput";
import { validationSchemaSignUpForm } from "../validationSchema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormValues {
  islamicCenterName: string;
  email: string;
  password: string;
  country: string;
  address: string;
  phoneNumber: string;
}

const SignUpForm: React.FC = () => {
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
            const res = await register({
              firstname: values.islamicCenterName,
              lastname: "test",
              email: values.email,
              tele: values.phoneNumber,
              ville: values.country,
              adresse: values.address,
              password: values.password,
            }).unwrap();
            dispatch(setCredentials({ ...res }));
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
        {({ isSubmitting }) => (
          <Form>
            <div className="my-[40px] flex flex-col gap-[32px]">
              <CustomField<FormValues>
                name="islamicCenterName"
                label="Islamic Center Name"
                placeholder="The Islamic Center Name"
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
                disabled={isSubmitting}
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
