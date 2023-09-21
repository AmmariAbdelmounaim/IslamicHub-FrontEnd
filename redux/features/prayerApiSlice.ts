import { apiSlice } from "./apiSlice";

const PRAYER_URL = "/api/prayer/user";
export const prayerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPrayer: builder.mutation({
      query: (data) => ({
        url: `${PRAYER_URL}/create`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          id: data.id,
          country: data.country,
          city: data.city,
          state: data.state,
          highLatitude: data.highLatitude,
          prayer: data.prayer,
          asar: data.asar,
          prayerTimeDTO: data.prayerTimeDTO,
          homePageId: data.homePageId,
        },
      }),
    }),
    getPrayer: builder.mutation({
      query: (data) => ({
        url: `${PRAYER_URL}/getPrayer/${data.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    editPrayer: builder.mutation({
      query: (data) => ({
        url: `${PRAYER_URL}/edit/${data.id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          country: data.country,
          city: data.city,
          state: data.state,
          highLatitude: data.highLatitude,
          prayer: data.prayer,
          prayerTimeDTO: data.prayerTimeDTO,
          asar: data.asar,
        },
      }),
    }),
    deletePrayer: builder.mutation({
      query: (data) => ({
        url: `${PRAYER_URL}/delete/${data.id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
  }),
});

export const {
  useCreatePrayerMutation,
  useDeletePrayerMutation,
  useEditPrayerMutation,
  useGetPrayerMutation,
} = prayerApiSlice;
