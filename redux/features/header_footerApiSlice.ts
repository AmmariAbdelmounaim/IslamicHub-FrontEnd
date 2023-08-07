import { apiSlice } from "./apiSlice";

const HEADERS_FOOTERS_URL = "/api/headerFooter/user";
export const headersFootersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createHeaderFooter: builder.mutation({
      query: (data) => ({
        url: `${HEADERS_FOOTERS_URL}/create`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          id: 0,
          headerBGColor: data.headerBGColor,
          headerTextColor: data.headerTextColor,
          headerAboutUs: data.headerAboutUs,
          headerOurServices: data.headerOurServices,
          headerOurEvents: data.headerOurEvents,
          headerPrayerTime: data.headerPrayerTime,
          headerTestimonials: data.headerTestimonials,
          headerContanctUs: data.headerContanctUs,
          largeLogo: data.largeLogo,
          smallLogo: data.smallLogo,
          footerBGColor: data.footerBGColor,
          footerTextColor: data.footerTextColor,
          footerFacebook: data.footerFacebook,
          footerInsta: data.footerInsta,
          footerTwitter: data.footerTwitter,
          footerThreads: data.footerThreads,
          footerEmail: data.footerEmail,
          footerPhoneNumber: data.footerPhoneNumber,
          footerAddress: data.footerAddress,
          footerwtp: data.footerwtp,
          centerId: data.centerId,
        },
      }),
    }),
    getHeaderFooter: builder.mutation({
      query: (data) => ({
        url: `${HEADERS_FOOTERS_URL}/getHeaderFooter/${data.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    editHeaderFooter: builder.mutation({
      query: (data) => ({
        url: `${HEADERS_FOOTERS_URL}/edit/${data.id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          headerBGColor: data.headerBGColor,
          headerTextColor: data.headerTextColor,
          headerAboutUs: data.headerAboutUs,
          headerOurServices: data.headerOurServices,
          headerOurEvents: data.headerOurEvents,
          headerPrayerTime: data.headerPrayerTime,
          headerTestimonials: data.headerTestimonials,
          headerContanctUs: data.headerContanctUs,
          largeLogo: data.largeLogo,
          smallLogo: data.smallLogo,
          footerBGColor: data.footerBGColor,
          footerTextColor: data.footerTextColor,
          footerFacebook: data.footerFacebook,
          footerInsta: data.footerInsta,
          footerTwitter: data.footerTwitter,
          footerThreads: data.footerThreads,
          footerEmail: data.footerEmail,
          footerPhoneNumber: data.footerPhoneNumber,
          footerAddress: data.footerAddress,
          footerwtp: data.footerwtp,
          centerId: data.centerId,
        },
      }),
    }),
  }),
});

export const {
  useCreateHeaderFooterMutation,
  useEditHeaderFooterMutation,
  useGetHeaderFooterMutation,
} = headersFootersApiSlice;
