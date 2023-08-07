"use client";
import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { CustomField } from "../../../components/formInputs/customField";
import FillButton from "../../../components/button/FillButton";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useCreateCenterMutation } from "../../../redux/features/centersApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  setCenter,
  setCredentials,
  setHeaderFooter,
  setTheme,
} from "../../../redux/features/authSlice";
import { Center, HeaderFooter } from "../../../types/types";
import { useCreateThemeMutation } from "../../../redux/features/themeApiSlice";
import { useCreateHeaderFooterMutation } from "../../../redux/features/header_footerApiSlice";
import { useCreateHomePageMutation } from "../../../redux/features/homePageApiSlice";
import { useCreateEventMutation } from "../../../redux/features/eventApiSlice";

interface FormValues {
  IslamicCenterName: string;
  IslamicCenterAddress: string;
  IslamicCenterDescription: string;
}

// Validation schema
const validationSchema = Yup.object({
  IslamicCenterName: Yup.string().required("Islamic Center Name is required"),
  IslamicCenterAddress: Yup.string().required(
    "Islamic Center Address is required"
  ),
  IslamicCenterDescription: Yup.string().required(
    "Islamic Center Description is required"
  ),
});

const initialValues: FormValues = {
  IslamicCenterName: "",
  IslamicCenterAddress: "",
  IslamicCenterDescription: "",
};

function CenterInfo() {
  const { userInfo } = useAppSelector((state) => state.auth);
  const [createCenter] = useCreateCenterMutation();
  const [createTheme] = useCreateThemeMutation();
  const [createHeaderFooter] = useCreateHeaderFooterMutation();
  const [createHomePage] = useCreateHomePageMutation();
  const [createEvent] = useCreateEventMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!userInfo) {
      router.push("/authentication/login");
    }
  }, [userInfo, router]);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          const res = await createCenter({
            id: 0,
            name: values.IslamicCenterName,
            address: values.IslamicCenterAddress,
            ownerId: userInfo?.id,
            description: values.IslamicCenterDescription,
            token: userInfo?.token,
          }).unwrap();
          dispatch(setCenter({ ...res }));
          const themeRes = await createTheme({
            id: 0,
            titleColor: "#555555",
            textColor: "#5D381A",
            backgroundColor: "#F5F2EE",
            primaryColor: "#CE7D39",
            centerId: userInfo?.centerDTO.id,
            token: userInfo?.token,
          }).unwrap();
          console.log("theme response: ", { ...themeRes });
          dispatch(setTheme({ ...themeRes }));
          const headerFooterRes = await createHeaderFooter({
            id: 0,
            headerBGColor: "#9B5E2B",
            headerTextColor: "#F5F2EE",
            headerAboutUs: false,
            headerOurServices: true,
            headerOurEvents: false,
            headerPrayerTime: true,
            headerTestimonials: true,
            headerContanctUs: false,
            largeLogo: null,
            smallLogo: null,
            footerBGColor: "#482C14",
            footerTextColor: "#F5F2EE",
            footerFacebook: null,
            footerInsta: null,
            footerTwitter: null,
            footerThreads: null,
            footerEmail: null,
            footerPhoneNumber: null,
            footerAddress: null,
            footerwtp: null,
            centerId: userInfo?.centerDTO.id,
            token: userInfo?.token,
          });
          if ("data" in headerFooterRes) {
            console.log(
              "header footer response :",
              headerFooterRes.data as HeaderFooter
            );
            dispatch(setHeaderFooter({ ...headerFooterRes.data }));
          } else if ("error" in headerFooterRes) {
            console.error("Error:", headerFooterRes.error);
          }
          const homePageRes = await createHomePage({
            id: 0,
            whoAreWe: "",
            ourVision: "",
            eventBorderColor: "#CE7D39",
            eventBgColor: "#F8ECE1",
            eventAdditionalInfoColor: "#FAF2EB",
            iconSlidesColor: "#997950",
            centerId: userInfo?.centerDTO.id,
            token: userInfo?.token,
          });
          console.log("home page response: ", { ...homePageRes });
          dispatch(setTheme({ ...homePageRes }));

          toast.success(`${values.IslamicCenterName} is created successfuly !`);

          router.push("/cms");
        } catch (err) {
          toast.error("Something went wrong !", {
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
      {({}) => (
        <Form className="flex h-screen items-center justify-center ">
          <div className="flex flex-col gap-[20px] w-[600px]  p-[30px] items-center  border-[2px] border-solid   rounded-md border-secondary-brown-normal-80-opacity">
            <div className="flex flex-col w-full gap-[20px] ">
              <CustomField
                label="islamic center name"
                name="IslamicCenterName"
                placeholder="Enter your islamic center name"
              />
              <CustomField
                label="islamic center address"
                name="IslamicCenterAddress"
                placeholder="Enter your islamic center address"
              />
            </div>
            <div className="w-full ">
              <CustomField
                label="islamic center description"
                name="IslamicCenterDescription"
                placeholder="Enter the description of your islamic center"
                textarea
              />
            </div>
            <FillButton type="submit" additionalStyle="w-1/2 ">
              Submit
            </FillButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CenterInfo;
