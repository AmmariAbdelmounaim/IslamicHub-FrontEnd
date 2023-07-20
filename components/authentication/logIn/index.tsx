import { Formik, Form } from "formik";
import { useEffect } from "react";
import Link from "next/link";
import FillButton from "../../button/FillButton";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useLoginMutation } from "../../../redux/features/usersApiSlice";
import { setCredentials } from "../../../redux/features/authSlice";
import { useRouter } from "next/navigation";
import { CustomField } from "../../formInputs/customField";
import { validationSchemaLoginForm } from "../validationSchema";
import { toast } from "react-toastify";

interface FormValues {
  email: string;
  password: string;
}
export const LoginForm = () => {
  //redux:
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state) => state.auth);
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();

  useEffect(() => {}, [userInfo]);

  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <h1 className=" capitalize text-secondary-brown-darker font-sourceSerif text-[32px] font-normal">
          Welcome Back!
        </h1>
        <p className="capitalize font-poppins text-[16px] font-normal text-secondary-brown-normal">
          Quote
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaLoginForm}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const res = await login({
              email: values.email,
              password: values.password,
            }).unwrap();
            console.log("login response", res);
            dispatch(setCredentials({ ...res }));
            router.push("/cms");
          } catch (err) {
            toast.error("Wrong email or password !", {
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
                name="email"
                label="Email"
                placeholder="example@gmail.com"
              />
              <CustomField<FormValues>
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
            </div>

            <div className="flex flex-col gap-[32px] justify-center items-center">
              <FillButton
                type="submit"
                additionalStyle="w-[195px] h-[45px] flex items-center justify-center"
              >
                Sign In
              </FillButton>
              <p className="capitalize font-poppins text-[16px]">
                Dont have an account?{" "}
                <Link
                  href="/authentication/signup"
                  className="text-primary-orange-normal"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
