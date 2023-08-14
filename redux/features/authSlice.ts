"use client";
import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/types";

type AuthState = {
  userInfo: User | null;
};

const initialState = {
  userInfo:
    typeof window !== "undefined" && window.localStorage.getItem("userInfo")
      ? JSON.parse(window.localStorage.getItem("userInfo") as string)
      : null,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    setCenter: (state, action) => {
      if (state.userInfo) {
        state.userInfo.centerDTO = action.payload;
      }
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
      console.log(localStorage.getItem("userInfo"));
    },
    setTheme: (state, action) => {
      if (state.userInfo) {
        state.userInfo.centerDTO.themeDTO = action.payload;
      }
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    setHeaderFooter: (state, action) => {
      if (state.userInfo) {
        state.userInfo.centerDTO.headerFooterDTO = action.payload;
      }
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    setHomePage: (state, action) => {
      if (state.userInfo) {
        state.userInfo.centerDTO.homePageDTO = action.payload;
      }
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    setEvent: (state, action) => {
      if (state.userInfo) {
        state.userInfo.centerDTO.homePageDTO.eventDTOList.push(action.payload);
      }
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    removeEvent: (state, action) => {
      if (state.userInfo) {
        const eventList = state.userInfo.centerDTO.homePageDTO.eventDTOList;
        const eventIndex = eventList.findIndex(
          (event) => event.id === action.payload.id
        );
        if (eventIndex !== -1) {
          eventList.splice(eventIndex, 1);
        }
        localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
      }
    },
    updateEvent: (state, action) => {
      if (state.userInfo) {
        const eventList = state.userInfo.centerDTO.homePageDTO.eventDTOList;
        // Find the index of the event to be updated

        const eventIndex = eventList.findIndex(
          (event) => event.id === action.payload.id
        );
        if (eventIndex !== -1) {
          // Update the event details with the new payload data
          eventList[eventIndex] = action.payload;
        }
        // Update local storage
        localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
      }
    },

    setService: (state, action) => {
      if (state.userInfo) {
        state.userInfo.centerDTO.homePageDTO.serviceDTOList.push(
          action.payload
        );
      }
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    removeService: (state, action) => {
      if (state.userInfo) {
        const serviceList = state.userInfo.centerDTO.homePageDTO.serviceDTOList;
        const serviceIndex = serviceList.findIndex(
          (service) => service.id === action.payload.id
        );
        if (serviceIndex !== -1) {
          serviceList.splice(serviceIndex, 1);
        }
        localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
      }
    },
    updateService: (state, action) => {
      if (state.userInfo) {
        const serviceList = state.userInfo.centerDTO.homePageDTO.serviceDTOList;
        // Find the index of the event to be updated

        const serviceIndex = serviceList.findIndex(
          (service) => service.id === action.payload.id
        );
        if (serviceIndex !== -1) {
          // Update the event details with the new payload data
          serviceList[serviceIndex] = action.payload;
        }
        // Update local storage
        localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
      }
    },

    setTestmonial: (state, action) => {
      if (state.userInfo) {
        state.userInfo.centerDTO.homePageDTO.testimonialDTOList.push(
          action.payload
        );
      }
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    removeTestmonial: (state, action) => {
      if (state.userInfo) {
        const testimonialList =
          state.userInfo.centerDTO.homePageDTO.testimonialDTOList;
        const testimonialIndex = testimonialList.findIndex(
          (testimonial) => testimonial.id === action.payload.id
        );
        if (testimonialIndex !== -1) {
          testimonialList.splice(testimonialIndex, 1);
        }
        localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
      }
    },
    updateTestmonial: (state, action) => {
      if (state.userInfo) {
        const testimonialList =
          state.userInfo.centerDTO.homePageDTO.testimonialDTOList;
        // Find the index of the event to be updated

        const testimonialIndex = testimonialList.findIndex(
          (testimonial) => testimonial.id === action.payload.id
        );
        if (testimonialIndex !== -1) {
          // Update the event details with the new payload data
          testimonialList[testimonialIndex] = action.payload;
        }
        // Update local storage
        localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
      }
    },

    setAboutUs: (state, action) => {
      if (state.userInfo) {
        state.userInfo.centerDTO.homePageDTO.aboutUsDTOList.push(
          action.payload
        );
      }
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    removeAboutUs: (state, action) => {
      if (state.userInfo) {
        const aboutUsList = state.userInfo.centerDTO.homePageDTO.aboutUsDTOList;
        const aboutUsIndex = aboutUsList.findIndex(
          (aboutUs) => aboutUs.id === action.payload.id
        );
        if (aboutUsIndex !== -1) {
          aboutUsList.splice(aboutUsIndex, 1);
        }
        localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
      }
    },
    updateAboutUs: (state, action) => {
      if (state.userInfo) {
        const aboutUsList = state.userInfo.centerDTO.homePageDTO.aboutUsDTOList;
        // Find the index of the event to be updated

        const aboutUsIndex = aboutUsList.findIndex(
          (aboutUs) => aboutUs.id === action.payload.id
        );
        if (aboutUsIndex !== -1) {
          // Update the event details with the new payload data
          aboutUsList[aboutUsIndex] = action.payload;
        }
        // Update local storage
        localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
      }
    },

    setSlide: (state, action) => {
      if (state.userInfo) {
        state.userInfo.centerDTO.homePageDTO.slideDTOList.push(action.payload);
      }
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    removeSlide: (state, action) => {
      if (state.userInfo) {
        const slidesList = state.userInfo.centerDTO.homePageDTO.slideDTOList;
        const slideIndex = slidesList.findIndex(
          (slide) => slide.id === action.payload.id
        );
        if (slideIndex !== -1) {
          slidesList.splice(slideIndex, 1);
        }
        localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
      }
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const {
  setCredentials,
  setHomePage,
  setCenter,
  setTheme,
  setHeaderFooter,
  setEvent,
  removeEvent,
  updateEvent,
  setSlide,
  removeSlide,
  logout,
  setService,
  removeService,
  updateService,
  setTestmonial,
  removeTestmonial,
  updateTestmonial,
  setAboutUs,
  removeAboutUs,
  updateAboutUs,
} = authSlice.actions;
export default authSlice.reducer;
