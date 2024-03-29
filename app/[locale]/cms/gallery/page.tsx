"use client";
import React, { useEffect, useState } from "react";
import Slider from "../../../../components/cms/slider";
import { Form, Formik } from "formik";
import ColorPicker from "../../../../components/cms/colorPicker";
import FillButton from "../../../../components/button/FillButton";
import { useTranslations } from "next-intl";
import { useEditHomePageMutation } from "../../../../redux/features/homePageApiSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { Slide } from "../../../../types/types";
import { toast } from "react-toastify";
import {
  removeSlide,
  setHomePage,
  setSlide,
} from "../../../../redux/features/authSlice";
import {
  useCreateSlideMutation,
  useDeleteSlideMutation,
} from "../../../../redux/features/slideApiSlice";

interface FormValues {
  slider: Slide[];
  backgroundColor: string;
  iconColor: string;
}

function GalleryManagement() {
  const t = useTranslations("gallery");
  const [editHomePage] = useEditHomePageMutation();
  const [createSlide] = useCreateSlideMutation();
  const [deleteSlide] = useDeleteSlideMutation();
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [isClient, setIsClient] = useState(false);

  const initialValues: FormValues = {
    slider: (userInfo?.centerDTO.homePageDTO.slideDTOList as Slide[]) ?? [],
    backgroundColor: "#997950",
    iconColor: userInfo?.centerDTO.homePageDTO.iconSlidesColor as string,
  };

  useEffect(() => {
    setIsClient(true);
    console.log("initialvalues: ", initialValues.slider);
  }, []);

  return (
    <>
      {isClient && (
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              console.log(values);
              const homePageRes = await editHomePage({
                id: userInfo?.centerDTO.homePageDTO.id,
                centerId: userInfo?.centerDTO.id,
                eventBorderColor:
                  userInfo?.centerDTO.homePageDTO.eventBorderColor,
                eventBgColor: values.backgroundColor,
                eventAdditionalInfoColor:
                  userInfo?.centerDTO.homePageDTO.eventAdditionalInfoColor,
                iconSlidesColor:
                  userInfo?.centerDTO.homePageDTO.iconSlidesColor,
                eventDTOList: userInfo?.centerDTO.homePageDTO.eventDTOList,
                slideDTOList: userInfo?.centerDTO.homePageDTO.slideDTOList,
                serviceDTOList: userInfo?.centerDTO.homePageDTO.serviceDTOList,
                testimonialDTOList:
                  userInfo?.centerDTO.homePageDTO.testimonialDTOList,
                aboutUsDTOList: userInfo?.centerDTO.homePageDTO.aboutUsDTOList,
                token: userInfo?.token,
              }).unwrap();
              console.log("homepage response: ", { homePageRes });

              dispatch(setHomePage({ ...homePageRes }));
              //first of all we delete the old images
              if (
                userInfo?.centerDTO.homePageDTO.slideDTOList !== undefined &&
                userInfo?.centerDTO.homePageDTO.slideDTOList.length > 0
              ) {
                for (const slide of userInfo?.centerDTO.homePageDTO
                  .slideDTOList as Slide[]) {
                  const deleteSliderRes = await deleteSlide({
                    id: slide.id,
                    token: userInfo?.token,
                  });
                  dispatch(removeSlide({ id: slide.id }));
                }
              }

              //then we uploid the new images
              for (const slide of values.slider) {
                const sliderResponse = await createSlide({
                  id: 0,
                  image: slide,
                  homePageId: userInfo?.centerDTO.homePageDTO.id,
                  token: userInfo?.token,
                });
                if ("data" in sliderResponse) {
                  dispatch(setSlide({ ...sliderResponse.data }));
                  console.log("slider response: ", { ...sliderResponse.data });
                }
              }
              toast.success("Gallery updated successfully !", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              setSubmitting(false);
            } catch (err) {
              console.log(err);
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
          {({ isSubmitting }) => (
            <Form>
              <div className="flex flex-col gap-[40px] pb-[20px]  ">
                {/* Introduction */}
                <div className="flex flex-col gap-[24px]">
                  <h3 className="font-poppins text-[24px] capitalize font-medium text-secondary-brown-darker">
                    gallery management
                  </h3>
                  <p className="font-poopins text-[18px]  capitalize text-primary-orange-dark-active">
                    here you can uploid images for your slider and choose colors
                    for background and icons
                  </p>
                </div>
                <div className="flex flex-col gap-[32px] p-[10px] border-[1px] border-secondary-brown-normal-30-opacity rounded-[10px]">
                  {/* Slider */}
                  <div className="flex flex-col  gap-[40px] ">
                    <div className="flex flex-col border-b-[1px] border-b-secondary-brown-normal-30-opacity">
                      <p className="font-poppins capitalize text-[20px] text-secondary-brown-darker font-semibold mb-[10px]">
                        Slider
                      </p>
                    </div>
                    <Slider
                      name={"slider"}
                      slides={userInfo?.centerDTO.homePageDTO.slideDTOList}
                    />
                  </div>
                  {/* colors */}
                  <div className="flex flex-col  gap-[40px] ">
                    <div className="flex flex-col border-b-[1px] border-b-secondary-brown-normal-30-opacity">
                      <p className="font-poppins capitalize text-[20px] text-secondary-brown-darker font-semibold mb-[10px]">
                        colors
                      </p>
                    </div>
                    <div className="flex gap-[40px]">
                      <ColorPicker
                        label="background color"
                        name={"backgroundColor"}
                        defaultColor="#997950"
                      />
                      <ColorPicker
                        label="icon color"
                        name={"iconColor"}
                        defaultColor={
                          userInfo?.centerDTO.homePageDTO.iconSlidesColor
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <FillButton additionalStyle="px-[40px] py-[12px] flex gap-[12px]">
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
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}
export default GalleryManagement;
