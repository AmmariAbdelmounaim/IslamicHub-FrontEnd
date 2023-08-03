import { apiSlice } from "./apiSlice";

const CENTERS_URL = "/api/center/user";
export const centersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCenter: builder.mutation({
      query: (data) => ({
        url: `${CENTERS_URL}/create`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          id: data.id,
          name: data.name,
          address: data.address,
          ownerId: data.ownerId,
          description: data.description,
        },
      }),
    }),
  }),
});

export const { useCreateCenterMutation } = centersApiSlice;
