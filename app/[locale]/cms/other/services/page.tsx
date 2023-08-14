"use client";
import React, { useEffect, useState } from "react";
import OurService from "../../../preview/OurServices";
import { FieldArray, Form, Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
import { Service } from "../../../../../types/types";
import { toast } from "react-toastify";

import { CustomField } from "../../../../../components/formInputs/customField";
import FillButton from "../../../../../components/button/FillButton";
import {
  useCreateServiceMutation,
  useDeleteServiceMutation,
  useEditServiceMutation,
} from "../../../../../redux/features/serviceApiSlice";
import {
  removeService,
  setService,
  updateService,
} from "../../../../../redux/features/authSlice";
interface FormValues {
  services: Service[];
}
function ServicesSection() {
  const [isClient, setIsClient] = useState(false);
  const [editService] = useEditServiceMutation();
  const [createService] = useCreateServiceMutation();
  const [deleteService] = useDeleteServiceMutation();
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const initialValues: FormValues = {
    services: (userInfo?.centerDTO.homePageDTO.serviceDTOList as Service[]) ?? [
      {
        name: "",
        description: "",
      },
    ],
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
              services section
            </h1>
            <p className="font-poppins text-primary-orange-dark-active text-[18px] capitalize">
              in this section you can display the various services your center
              provides.
            </p>
          </div>
          <div className="flex flex-col gap-[24px]">
            <h3 className="font-poppins text-[20px] font-semibold capitalize">
              service component example
            </h3>
            <div className="flex justify-center">
              <OurService />
            </div>
            <Formik
              initialValues={initialValues}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  console.log("submit values: ", values);

                  // Looping through each event and calling editEvent
                  for (const service of values.services) {
                    const serviceRes = await editService({
                      id: service.id,
                      token: userInfo?.token,
                      name: service.name,
                      description: service.description,
                    });
                    if ("data" in serviceRes) {
                      dispatch(updateService({ ...serviceRes.data }));
                    }
                    // Optional: log the response for each event if you need
                    console.log("service response: ", { serviceRes });
                  }
                  toast.success("Content updated successfully !", {
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
                    <h1 className="font-poppins text-[20px] capitalize text-secondary-brown-darker border-b border-b-secondary-brown-normal-30-opacity pb-[10px]">
                      service content
                    </h1>
                    <FieldArray
                      name="services"
                      render={(arrayHelpers) => (
                        <div className="flex flex-col gap-[40px] items-center">
                          {(userInfo?.centerDTO.homePageDTO.serviceDTOList
                            .length as number) > 0 &&
                            userInfo?.centerDTO.homePageDTO.serviceDTOList.map(
                              (service: Service, index) => (
                                <div
                                  key={index}
                                  className="flex flex-col gap-[40px]"
                                >
                                  <h3 className="font-poppins capitalize text-[20px] font-semibold text-center">
                                    {`service ${index + 1}`}
                                  </h3>
                                  <CustomField
                                    label="service name"
                                    placeholder="Your service name"
                                    name={`services[${index}].name`}
                                  />
                                  <CustomField
                                    label="service details"
                                    placeholder="Your service details"
                                    name={`services[${index}].description`}
                                  />
                                  <div className="flex items-center justify-center">
                                    <FillButton
                                      additionalStyle="pt-[12px] px-[40px] gap-[10px] w-[250px]"
                                      type="button"
                                      onClick={async () => {
                                        const serviceRes = await deleteService({
                                          id: service.id,
                                          token: userInfo?.token,
                                        }).unwrap();
                                        console.log(
                                          "service response: ",
                                          serviceRes
                                        );
                                        dispatch(
                                          removeService({ id: service.id })
                                        );
                                        arrayHelpers.remove(index);
                                        toast.success(
                                          `Service ${index + 1} deleted !`,
                                          {
                                            position: "bottom-right",
                                            autoClose: 100,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "light",
                                          }
                                        );
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="24"
                                        height="24"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
                                      </svg>
                                      delete service
                                    </FillButton>
                                  </div>
                                </div>
                              )
                            )}

                          <FillButton
                            additionalStyle="pt-[12px] px-[40px] gap-[10px] w-[250px]"
                            onClick={async () => {
                              const serviceRes = await createService({
                                id: 0,
                                name: "",
                                description: "",
                                homPageId: userInfo?.centerDTO.homePageDTO.id,
                                token: userInfo?.token,
                              }).unwrap();
                              console.log("service response: ", serviceRes);
                              dispatch(setService({ ...serviceRes }));
                              arrayHelpers.push(serviceRes);
                              console.log("values: ", values);
                              toast.success("New service created !", {
                                position: "bottom-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                              });
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z"
                                fill="white"
                              />
                            </svg>
                            new service
                          </FillButton>
                        </div>
                      )}
                    />
                  </div>
                  <div className="flex mt-[40px] items-center justify-center">
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
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
}

export default ServicesSection;
