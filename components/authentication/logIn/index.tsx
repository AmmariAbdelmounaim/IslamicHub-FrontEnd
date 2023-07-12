import {
  Formik,
  Field,
  Form,
  ErrorMessage as FormikErrorMessage,
  FormikHelpers,
  useFormikContext,
  FieldProps,
} from "formik";
import * as Yup from "yup";
import Link from "next/link";
import FillButton from "../../button/FillButton";

interface FormValues {
  email: string;
  password: string;
}
export const LoginForm = () => {
  // Async submit function
  const onSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Custom field
  const CustomField: React.FC<{
    name: string;
    label: string;
    placeholder: string;
    type?: string;
  }> = ({ name, label, placeholder, type }) => {
    const { errors, touched } = useFormikContext<FormValues>(); // Access formik context
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
        <p className="text-red-600 font-medium">
          <ErrorMessage name={name} />
        </p>
        <Field
          type={type || "text"}
          name={name}
          placeholder={placeholder}
          style={{
            display: "flex",
            height: "40px",
            padding: "14px 10px 15px 10px",
            
          }}
          className={`
          flex h-[40px] pl-[10px] w-full rounded-lg 
          font-poppins text-[16px] font-medium placeholder:text-color-placeholder
          ${
            hasError
              ? "border-2 border-red-600"
              : "border-2 border-secondary-brown-normal "
          }
        `}
        />
      </div>
    );
  };

  // Custom Error Message
  const ErrorMessage: React.FC<{ name: string }> = ({ name }) => (
    <FormikErrorMessage name={name}>
      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
    </FormikErrorMessage>
  );

  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  return (
    <div className="flex flex-col gap-[64px]">
      {/* Premiere div */}
      <div className="flex flex-col gap-[16px]">
        {/* Header */}
        <h1 className="text-[28px] font-sourceSerif font-semibold">
          Welcome Back!
        </h1>

        {/* Quote */}
        <p className="font-poppins text-[18px] font-normal text-secondary-brown-normal">
          Quote
        </p>
      </div>

        {/* Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form 
          className="flex flex-col gap-[64px]"
          >
            {/* Troisieme div */}
            <div className="flex flex-col gap-[24px]">
              {/* 2 input fields for email and password */}
              <CustomField
                name="email"
                label="Email"
                placeholder="example@gmail.Com"
              />
              <CustomField
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
            </div>

            {/* Quatrieme div */}
            <div className="flex flex-col gap-[24px] justify-center">
              {/* Sign in button */}
              <FillButton
                type="submit"
                additionalStyle="w-[195px] h-[45px] flex items-center justify-center"
              >
                Sign In
              </FillButton>

              {/* You have an account -> sign up <Link/> */}
              <p className="font-poppins text-16 font-medium items-center">
                Don't have an account?{" "}
                <Link href="/authentication/signup" className="text-primary-orange-normal">Sign Up</Link>
              </p>
            </div>

          </Form>
        </Formik>
    </div>
  );
};
