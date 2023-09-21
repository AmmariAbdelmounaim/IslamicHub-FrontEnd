import { apiSlice } from "./apiSlice";

const PRAYERTIMEBD_URL = "/api/prayerTime/user";
export const pryaerTimeBDApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPrayerTime: builder.mutation({
      query: (data) => ({
        url: `${PRAYERTIMEBD_URL}/create`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          id: data.id,
          fajr: data.fajr,
          shuruq: data.shuruq,
          zohar: data.zohar,
          asar: data.asar,
          maghrib: data.maghrib,
          isha: data.isha,
          day: data.day,
          month: data.month,
          year: data.year,
          prayerId: data.prayerId,
        },
      }),
    }),
    getPrayerTimeBD: builder.mutation({
      query: (data) => ({
        url: `${PRAYERTIMEBD_URL}/getPrayerTime/${data.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    editPrayerTime: builder.mutation({
      query: (data) => ({
        url: `${PRAYERTIMEBD_URL}/edit/${data.id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          fajr: data.fajr,
          shuruq: data.shuruq,
          zohar: data.zohar,
          asar: data.asar,
          maghrib: data.maghrib,
          isha: data.isha,
          day: data.day,
          month: data.month,
          year: data.year,
        },
      }),
    }),
    deletePrayer: builder.mutation({
      query: (data) => ({
        url: `${PRAYERTIMEBD_URL}/delete/${data.id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
  }),
});

export const {
  useCreatePrayerTimeMutation,
  useEditPrayerTimeMutation,
  useDeletePrayerMutation,
  useGetPrayerTimeBDMutation,
} = pryaerTimeBDApiSlice;
