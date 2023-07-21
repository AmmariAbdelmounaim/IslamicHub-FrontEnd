"use client";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import FillButton from "../../../components/button/FillButton";
import {
  ErrorMessage as FormikErrorMessage,
  Field,
  Form,
  Formik,
  useFormikContext,
} from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import {
  useRegisterMutation,
  useVerificationMutation,
} from "../../../redux/features/usersApiSlice";
import { CustomField } from "../../../components/formInputs/customField";
import { User } from "../../../types/types";
import { setCredentials } from "../../../redux/features/authSlice";

interface FormValues {
  code: string;
}

// Validation schema
const validationSchema = Yup.object({
  code: Yup.string().required("Code is required"),
});

const initialValues: FormValues = {
  code: "",
};

export default function VerificationPage() {
  const [verifCode, setVerifCode] = useState<string>("");
  const [register] = useRegisterMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [verification, { isLoading }] = useVerificationMutation();
  const user: User = JSON.parse(
    window.localStorage.getItem("formValues") as string
  );

  const getCode = async () => {
    try {
      const res = await verification({
        toEmail: user?.email,
        subject: "Registration Islamic Hub",
        body: "",
      }).unwrap();
      setVerifCode(res.code.toString());
    } catch (err) {}
  };

  useEffect(() => {
    getCode();
  }, []);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        if (verifCode === values.code) {
          const res = await register({
            firstname: user?.firstname,
            lastname: user?.lastname,
            email: user?.email,
            tele: user?.phoneNumber,
            ville: user?.country,
            adresse: user?.address,
            password: user?.password,
          }).unwrap();
          //store user in local storage
          dispatch(setCredentials({ ...res }));
          window.localStorage.removeItem("formValues");
          router.push("/authentication/login");
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
        <Form className="flex h-screen items-center justify-center">
          <div className="flex flex-col gap-[20px] p-[30px] ">
            <h1 className="font-poppins text-[32px] font-semibold">
              Enter your verification code
            </h1>
            <p className="font-poppins text-[18px] ">
              We sent the code to the email
            </p>
            <p className="font-poppins text-[18px] font-medium">
              {user?.email}
            </p>
            <CustomField
              name="code"
              label=""
              placeholder="Enter your verification code"
              type="text"
            />
            <FillButton
              type="submit"
              additionalStyle="w-[195px] h-[45px] flex items-center justify-center m-auto"
            >
              Submit
            </FillButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}
