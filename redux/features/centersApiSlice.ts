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
    getAllCenters: builder.mutation({
      query: (data) => ({
        url: `${CENTERS_URL}/getAll`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    getCenter: builder.mutation({
      query: (data) => ({
        url: `${CENTERS_URL}/getCenter/${data.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    editCenter: builder.mutation({
      query: (data) => ({
        url: `${CENTERS_URL}/edit/${data.id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          name: data.name,
          address: data.address,
          description: data.description,
        },
      }),
    }),
    deleteCenter: builder.mutation({
      query: (data) => ({
        url: `${CENTERS_URL}/delete/${data.id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
  }),
});

export const {
  useCreateCenterMutation,
  useGetAllCentersMutation,
  useGetCenterMutation,
  useEditCenterMutation,
  useDeleteCenterMutation,
} = centersApiSlice;
