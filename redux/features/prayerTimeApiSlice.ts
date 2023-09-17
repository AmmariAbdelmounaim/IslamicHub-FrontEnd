import { apiSlice } from "./apiSlice";

const PRAYERTIME_URL = "http://api.aladhan.com/v1/timingsByCity";
export const pryaerTimeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPrayerTime: builder.mutation({
      query: (data) => ({
        url: `${PRAYERTIME_URL}?city=${data.city}&country=${data.country}&method=${data.method}&school=${data.school}&latitudeAdjustmentMethod=${data.latitudeAdjustmentMethod}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPrayerTimeMutation } = pryaerTimeApiSlice;
