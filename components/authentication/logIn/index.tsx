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

interface FormValues {
  islamicCenterName: string;
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
    islamicCenterName: Yup.string().required("Islamic Center name is required"),
  });

  //custom field
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
        <p className="text-red-600 font-medium">
          <ErrorMessage name={name} />
        </p>
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

  // Custom Error Message
  const ErrorMessage: React.FC<{ name: string }> = ({ name }) => (
    <FormikErrorMessage name={name}>
      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
    </FormikErrorMessage>
  );
  const initialValues: FormValues = {
    islamicCenterName: "",
    password: "",
  };
  return (
    <div>
      {/* Logo */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          {/* 2 input filed for islamic center name and password */}
          <CustomField
            name="islamicCenterName"
            label="islamic center name"
            placeholder="Enter your islamic center name "
          />
        </Form>
      </Formik>

      {/* sign in button */}
      {/* you have an account -> sign up  <Link/>*/}
    </div>
  );
};
