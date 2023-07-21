import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "../../../redux/store";
import FillButton from "../../../components/button/FillButton";
import {
  ErrorMessage as FormikErrorMessage,
  Field,
  Form,
  Formik,
  useFormikContext,
} from "formik";
import * as Yup from "yup";
import { FormikValues } from "formik";
import { useState, useEffect } from "react";
import { useVerificationMutation } from "../../../redux/features/usersApiSlice";
import SignUpForm from "../../../components/authentication/signUp";

interface FormValues {
  code: string;
}

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
    <div className="w-[350px]">
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
          w-[445px] flex h-[40px] pl-[16px] items-center rounded-lg 
          font-poppins text-[16px] font-medium placeholder:text-color-placeholder bg-transparent
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

// Validation schema
const validationSchema = Yup.object({
  code: Yup.string().required("Code is required"),
});

// Custom Error Message
const ErrorMessage: React.FC<{ name: string }> = ({ name }) => (
  <FormikErrorMessage name={name}>
    {(msg) => <p className="text-red-600 font-poppins font-medium">{msg}</p>}
  </FormikErrorMessage>
);

const initialValues: FormValues = {
  code: "",
};

export default function VerificationPage() {
  const { userInfo } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState<string>("");
  const [verifCode, setVerifCode] = useState<string>("");
  const router = useRouter();
  const [verification, { isLoading }] = useVerificationMutation();

  const getCode = async () => {
    try {
      const res = await verification({
        toEmail: userInfo?.email,
        subject: "Registration Islamic Hub",
        body: "",
      }).unwrap();
      setVerifCode(res.code.toString());
    } catch (err) {}
  };

  useEffect(() => {
    setEmail(userInfo?.email as string);
    getCode();
  }, []);

  // Ajoutez une variable d'état pour suivre le statut de confirmation du code d'authentification
  const [isCodeConfirmed, setIsCodeConfirmed] = useState(false);

  const handleVerification = async (values: FormikValues) => {
    if (verifCode === values.code) {
      setIsCodeConfirmed(true);
    } else {
      // Afficher un message d'erreur pour indiquer que le code est incorrect
    }
  };

  // Si le code n'est pas confirmé, affichez le formulaire de confirmation de l'email
  if (!isCodeConfirmed) {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleVerification}
      >
        {({ isSubmitting }) => (
          <Form className="flex h-screen items-center justify-center">
            <div className="flex flex-col gap-[20px] p-[30px] ">
              <h1 className="font-poppins text-[32px] font-semibold">
                Enter your verification code
              </h1>
              <p className="font-poppins text-[18px] ">
                We sent the code to the email
              </p>
              <p className="font-poppins text-[18px] font-medium">
                {userInfo?.email}
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

  // Si le code est confirmé, affichez le formulaire d'inscription
  return <SignUpForm />;
}
