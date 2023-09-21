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
  setHeaderFooter,
  setHomePage,
  setPrayer,
  setPrayerTime,
  setTheme,
} from "../../../redux/features/authSlice";
import {
  HeaderFooter,
  HomePage,
  Prayer,
  PrayerTime,
} from "../../../types/types";
import { useCreateThemeMutation } from "../../../redux/features/themeApiSlice";
import { useCreateHeaderFooterMutation } from "../../../redux/features/header_footerApiSlice";
import { useCreateHomePageMutation } from "../../../redux/features/homePageApiSlice";
import { useCreatePrayerMutation } from "../../../redux/features/prayerApiSlice";
import { useGetPrayerTimeMutation } from "../../../redux/features/prayerTimeApiSlice";
import { useCreatePrayerTimeMutation } from "../../../redux/features/prayerTimeBDApiSlice";

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
  const [createPrayer] = useCreatePrayerMutation();
  const [createPrayerTime] = useCreatePrayerTimeMutation();
  const [getPrayerTime] = useGetPrayerTimeMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  let prayerTimeData: PrayerTime = {
    fajr: "",
    shuruq: "",
    zohar: "",
    asar: "",
    maghrib: "",
    isha: "",
    day: "",
    year: "",
    month: "",
  };
  let prayerData: Prayer = {
    asar: 0,
    city: "",
    country: "",
    highLatitude: 0,
    prayer: 0,
    prayerTimeDTO: prayerTimeData,
  };

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
            centerId: res.id,
            token: userInfo?.token,
          }).unwrap();

          dispatch(setTheme({ ...themeRes }));
          console.log("theme response: ", { ...themeRes });
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
            centerId: res.id,
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
            eventAdditionalInfoColor: "#997950",
            iconSlidesColor: "#997950",
            centerId: res.id,
            eventDTOList: [],
            slideDTOList: [],
            prayerDTO: null,
            token: userInfo?.token,
          });
          if ("data" in homePageRes) {
            console.log("home page response :", homePageRes.data as HomePage);
            dispatch(setHomePage({ ...(homePageRes.data as HomePage) }));
          } else if ("error" in homePageRes) {
            console.error("Error:", homePageRes.error);
          }

          if ("data" in homePageRes) {
            const prayerTimeRes = await getPrayerTime({
              city: "agadir",
              country: "morocco",
              method: 3,
              school: 0,
              latitudeAdjustmentMethod: 1,
            });
            if ("data" in prayerTimeRes) {
              prayerTimeData.fajr = prayerTimeRes.data.data.timings.Fajr;
              prayerTimeData.shuruq = prayerTimeRes.data.data.timings.Sunrise;
              prayerTimeData.zohar = prayerTimeRes.data.data.timings.Dhuhr;
              prayerTimeData.asar = prayerTimeRes.data.data.timings.Asr;
              prayerTimeData.maghrib = prayerTimeRes.data.data.timings.Maghrib;
              prayerTimeData.isha = prayerTimeRes.data.data.timings.Isha;
              prayerTimeData.day = prayerTimeRes.data.data.date.hijri.day;
              prayerTimeData.year = prayerTimeRes.data.data.date.hijri.year;
              prayerTimeData.month =
                prayerTimeRes.data.data.date.hijri.month.en;
              console.log("prayer time data: ", prayerTimeData);
            } else if ("error" in prayerTimeRes) {
              console.error("Error:", prayerTimeRes.error);
            }

            const prayerRes = await createPrayer({
              id: 0,
              country: "morocco",
              city: "agadir",
              state: "",
              highLatitude: 1,
              prayer: 3,
              asar: 0,
              token: userInfo?.token,
              homePageId: homePageRes.data.id,
            });
            if ("data" in prayerRes) {
              //creating prayer time:
              const prayerTimeBDRes = await createPrayerTime({
                id: 0,
                fajr: prayerTimeData.fajr,
                shuruq: prayerTimeData.shuruq,
                zohar: prayerTimeData.zohar,
                asar: prayerTimeData.asar,
                maghrib: prayerTimeData.maghrib,
                isha: prayerTimeData.isha,
                day: prayerTimeData.day,
                year: prayerTimeData.year,
                month: prayerTimeData.month,
                token: userInfo?.token,
                prayerId: prayerRes.data.id,
              });
              console.log("prayer time create response: ", prayerTimeBDRes);
              prayerData = { ...prayerRes.data };
              prayerData.prayerTimeDTO = prayerTimeData;
              dispatch(
                setPrayer({
                  ...(prayerData as Prayer),
                })
              );
            } else if ("error" in prayerRes) {
              console.error("Error:", prayerRes.error);
            }
          } else if ("error" in homePageRes) {
            console.error("Error:", homePageRes.error);
          }

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
