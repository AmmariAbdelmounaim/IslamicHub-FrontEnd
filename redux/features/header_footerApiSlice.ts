import { apiSlice } from "./apiSlice";

const HEADERS_FOOTERS_URL = "/api/headerFooter/user";
export const headers_footersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createHeader_Footer: builder.mutation({
      query: (data) => ({
        url: `${HEADERS_FOOTERS_URL}/create`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          id: data.id,
          headerBGColor: data.titleColor,
          headerTextColor: data.textColor,
          headerAboutUs: data.backgroundColor,
          headerOurServices: data.primaryColor,
          headerOurEvents: data.centerId,
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

export const { useCreateHeader_FooterMutation } = headers_footersApiSlice;
