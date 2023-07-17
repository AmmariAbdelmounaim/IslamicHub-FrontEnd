import { ErrorMessage as FormikErrorMessage } from "formik";

export const ErrorMessage: React.FC<{ name: string }> = ({ name }) => (
  <FormikErrorMessage name={name}>
    {(msg) => <p className="text-red-600 font-poppins font-medium">{msg}</p>}
  </FormikErrorMessage>
);
