"use client";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { CustomField } from "../../../../../components/formInputs/customField";
import FillButton from "../../../../../components/button/FillButton";
import Select from "../../../../../components/formInputs/select";
import { CustomSelectField } from "../../../../../components/formInputs/customSelectField";
import { validationSchemaPrayerTime } from "../../../../../components/authentication/validationSchema";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
import { useEditPrayerMutation } from "../../../../../redux/features/prayerApiSlice";
import { toast } from "react-toastify";
import { setPrayer } from "../../../../../redux/features/authSlice";
import { Prayer, PrayerTime } from "../../../../../types/types";
import { useGetPrayerTimeMutation } from "../../../../../redux/features/prayerTimeApiSlice";
import { useEditPrayerTimeMutation } from "../../../../../redux/features/prayerTimeBDApiSlice";

interface FormValues {
  country: string;
  city: string;
  state?: string;
  highLatitude: number;
  prayer: number;
  asar: number;
}
function PrayerTimeSection() {
  const [isClient, setIsClient] = useState(false);
  const [editPrayer] = useEditPrayerMutation();
  const [getPrayerTime] = useGetPrayerTimeMutation();
  const [editPrayerTime] = useEditPrayerTimeMutation();
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  let prayerTimeData: PrayerTime = {
    fajr: userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO
      .fajr as string,
    shuruq: userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO
      .shuruq as string,
    zohar: userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO
      .zohar as string,
    asar: userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO
      .asar as string,
    maghrib: userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO
      .maghrib as string,
    isha: userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO
      .isha as string,
    day: userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO.day as string,
    year: userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO
      .year as string,
    month: userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO
      .month as string,
  };
  let prayerData: Prayer = {
    asar: userInfo?.centerDTO.homePageDTO.prayerDTO.asar as number,
    city: userInfo?.centerDTO.homePageDTO.prayerDTO.city as string,
    country: userInfo?.centerDTO.homePageDTO.prayerDTO.country as string,
    highLatitude: userInfo?.centerDTO.homePageDTO.prayerDTO
      .highLatitude as number,
    prayer: userInfo?.centerDTO.homePageDTO.prayerDTO.prayer as number,
    prayerTimeDTO: prayerTimeData,
  };

  const initialValues: FormValues = {
    country: userInfo?.centerDTO.homePageDTO.prayerDTO.country ?? "",
    city: userInfo?.centerDTO.homePageDTO.prayerDTO.city ?? "",
    highLatitude: userInfo?.centerDTO.homePageDTO.prayerDTO.highLatitude ?? 1,
    prayer: userInfo?.centerDTO.homePageDTO.prayerDTO.prayer ?? 1,
    asar: userInfo?.centerDTO.homePageDTO.prayerDTO.asar ?? 1,
  };
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[24px]">
            <h1 className="font-poppins capitalize text-secondary-brown-darker text-[24px]">
              prayer time section
            </h1>
            <p className="font-poppins text-primary-orange-dark-active text-[18px] capitalize">
              this section is for displaying prayer time in your city.
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchemaPrayerTime}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                console.log(values);
                const prayerTimeApiRes = await getPrayerTime({
                  city: values.city,
                  country: values.country,
                  method: values.prayer,
                  school: values.asar,
                  latitudeAdjustmentMethod: values.highLatitude,
                });
                if ("data" in prayerTimeApiRes) {
                  prayerTimeData.fajr = prayerTimeApiRes.data.data.timings.Fajr;
                  prayerTimeData.shuruq =
                    prayerTimeApiRes.data.data.timings.Sunrise;
                  prayerTimeData.zohar =
                    prayerTimeApiRes.data.data.timings.Dhuhr;
                  prayerTimeData.asar = prayerTimeApiRes.data.data.timings.Asr;
                  prayerTimeData.maghrib =
                    prayerTimeApiRes.data.data.timings.Maghrib;
                  prayerTimeData.isha = prayerTimeApiRes.data.data.timings.Isha;
                  prayerTimeData.day =
                    prayerTimeApiRes.data.data.date.hijri.day;
                  prayerTimeData.year =
                    prayerTimeApiRes.data.data.date.hijri.year;
                  prayerTimeData.month =
                    prayerTimeApiRes.data.data.date.hijri.month.en;
                }
                const prayerTimeRes = await editPrayerTime({
                  id: userInfo?.centerDTO.homePageDTO.prayerDTO.prayerTimeDTO
                    .id,
                  fajr: prayerTimeData.fajr,
                  shuruq: prayerTimeData.shuruq,
                  zohar: prayerTimeData.zohar,
                  asar: prayerTimeData.asar,
                  maghrib: prayerTimeData.maghrib,
                  isha: prayerTimeData.isha,
                  day: prayerTimeData.day,
                  month: prayerTimeData.month,
                  year: prayerTimeData.year,
                  token: userInfo?.token,
                });
                console.log("praye time response: ", prayerTimeRes);
                const prayerRes = await editPrayer({
                  id: userInfo?.centerDTO.homePageDTO.prayerDTO.id,
                  country: values.country,
                  city: values.city,
                  state: values.state,
                  highLatitude: values.highLatitude,
                  prayer: values.prayer,
                  asar: values.asar,
                  prayerTimeDTO: prayerTimeRes,
                  token: userInfo?.token,
                }).unwrap();
                dispatch(
                  setPrayer({
                    ...(prayerRes as Prayer),
                  })
                );
                toast.success("Prayer time has being updated", {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              } catch (err) {
                toast.error("Something went wrong", {
                  position: "bottom-right",
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
            {({ values, initialValues }) => (
              <Form>
                <div className="flex flex-col gap-[40px] border rounded-[10px] border-secondary-brown-normal-30-opacity p-[16px]">
                  <h1 className="font-poppins text-[20px] capitalize font-semibold text-secondary-brown-darker border-b border-b-secondary-brown-normal-30-opacity pb-[10px]">
                    Location information{" "}
                  </h1>
                  <div className="flex flex-col gap-[64px] items-center">
                    <div className="flex gap-[64px] justify-between">
                      <div className="w-[420px]">
                        <CustomSelectField name="country" label="Country" />
                      </div>
                      <div className="w-[420px]">
                        <CustomField
                          name="city"
                          label="city"
                          placeholder="Enter the name of the city"
                        />
                      </div>
                    </div>
                    <div className="flex gap-[64px] justify-between">
                      <div className="w-[420px]">
                        <CustomField
                          name={"state"}
                          label="state"
                          placeholder="Enter the name of your state"
                        />
                      </div>

                      <Select
                        name="highLatitude"
                        label="high latitude method"
                        options={[
                          { key: "Angle Based", value: 3 },
                          { key: "Middle of the Night", value: 1 },
                          { key: "One Seventh", value: 2 },
                        ]}
                      />
                    </div>
                    <div className="flex gap-[64px] justify-between">
                      <Select
                        name="prayer"
                        label="prayer method"
                        options={[
                          { key: "Muslim World League", value: 3 },
                          {
                            key: "Egyptian General Authority of Survey",
                            value: 5,
                          },
                          {
                            key: " Islamic Society of North America",
                            value: 2,
                          },
                          {
                            key: " University of Islamic Sciences",
                            value: 1,
                          },
                        ]}
                      />
                      <Select
                        name="asar"
                        label="asar method"
                        options={[
                          { key: "Shafi", value: 0 },
                          { key: "Hanafi", value: 1 },
                        ]}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mt-[40px] items-center justify-center">
                  <FillButton
                    additionalStyle="px-[40px] py-[12px] flex gap-[12px]"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17 20.7505H7C6.27065 20.7505 5.57118 20.4608 5.05546 19.945C4.53973 19.4293 4.25 18.7298 4.25 18.0005V6.00049C4.25 5.27114 4.53973 4.57167 5.05546 4.05594C5.57118 3.54022 6.27065 3.25049 7 3.25049H14.5C14.6988 3.25066 14.8895 3.3298 15.03 3.47049L19.53 8.00049C19.6707 8.14101 19.7498 8.33164 19.75 8.53049V18.0005C19.75 18.7298 19.4603 19.4293 18.9445 19.945C18.4288 20.4608 17.7293 20.7505 17 20.7505ZM7 4.75049C6.66848 4.75049 6.35054 4.88218 6.11612 5.1166C5.8817 5.35103 5.75 5.66897 5.75 6.00049V18.0005C5.75 18.332 5.8817 18.65 6.11612 18.8844C6.35054 19.1188 6.66848 19.2505 7 19.2505H17C17.3315 19.2505 17.6495 19.1188 17.8839 18.8844C18.1183 18.65 18.25 18.332 18.25 18.0005V8.81049L14.19 4.75049H7Z"
                        fill="white"
                      />
                      <path
                        d="M16.75 20.0005H15.25V13.7505H8.75004V20.0005H7.25004V13.5005C7.25004 13.169 7.38174 12.851 7.61616 12.6166C7.85058 12.3822 8.16852 12.2505 8.50004 12.2505H15.5C15.8316 12.2505 16.1495 12.3822 16.3839 12.6166C16.6183 12.851 16.75 13.169 16.75 13.5005V20.0005ZM12.47 8.75049H8.53004C8.36063 8.74918 8.19314 8.71452 8.03713 8.64848C7.88112 8.58244 7.73965 8.48631 7.62079 8.3656C7.50193 8.24488 7.40801 8.10193 7.3444 7.94492C7.28078 7.7879 7.24872 7.61989 7.25004 7.45049V4.00049H8.75004V7.25049H12.25V4.00049H13.75V7.45049C13.7514 7.61989 13.7193 7.7879 13.6557 7.94492C13.5921 8.10193 13.4981 8.24488 13.3793 8.3656C13.2604 8.48631 13.119 8.58244 12.9629 8.64848C12.8069 8.71452 12.6394 8.74918 12.47 8.75049Z"
                        fill="white"
                      />
                    </svg>
                    save changes
                  </FillButton>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
}

export default PrayerTimeSection;
