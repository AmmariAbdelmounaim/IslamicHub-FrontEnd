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
          eventBorderColor: data.eventBorderColor,
          eventBgColor: data.eventBgColor,
          eventAdditionalInfoColor: data.eventAdditionalInfoColor,
          iconSlidesColor: data.iconSlidesColor,
          slideDTOList: data.slideDTOList,
          serviceDTOList: data.serviceDTOList,
          testimonialDTOList: data.testimonialDTOList,
          aboutUsDTOList: data.aboutUsDTOList,
          prayerDTO: data.prayerDTO,
          centerId: data.centerId,
        },
      }),
    }),
    getHomePage: builder.mutation({
      query: (data) => ({
        url: `${HOMEPAGE_URL}/getHomePage/${data.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    editHomePage: builder.mutation({
      query: (data) => ({
        url: `${HOMEPAGE_URL}/edit/${data.id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          eventBorderColor: data.eventBorderColor,
          eventBgColor: data.eventBgColor,
          eventAdditionalInfoColor: data.eventAdditionalInfoColor,
          iconSlidesColor: data.iconSlidesColor,
          slideDTOList: data.slideDTOList,
          serviceDTOList: data.serviceDTOList,
          testimonialDTOList: data.testimonialDTOList,
          aboutUsDTOList: data.aboutUsDTOList,
        },
      }),
    }),
  }),
});

export const {
  useCreateHomePageMutation,
  useEditHomePageMutation,
  useGetHomePageMutation,
} = homePagesApiSlice;
