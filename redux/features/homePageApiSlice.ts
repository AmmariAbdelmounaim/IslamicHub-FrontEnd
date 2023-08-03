import { apiSlice } from "./apiSlice";

const HOMEPAGE_URL = "/api/homePage/user";
export const homePagesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createHomePage: builder.mutation({
      query: (data) => ({
        url: `${HOMEPAGE_URL}/create`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          id: data.id,
          whoAreWe: data.whoAreWe,
          ourVision: data.ourVision,
          eventBorderColor: data.eventBorderColor,
          eventBgColor: data.eventBgColor,
          eventAdditionalInfoColor: data.eventAdditionalInfoColor,
          iconSlidesColor: data.iconSlidesColor,
          centerId: data.centerId,
        },
      }),
    }),
  }),
});

export const { useCreateHomePageMutation } = homePagesApiSlice;
