import { apiSlice } from "./apiSlice";

const SERVICES_URL = "/api/service/user";
export const servicesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (data) => ({
        url: `${SERVICES_URL}/create`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          id: data.id,
          name: data.name,
          description: data.description,
          homPageId: data.homPageId,
        },
      }),
    }),
    getService: builder.mutation({
      query: (data) => ({
        url: `${SERVICES_URL}/getService/${data.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    editService: builder.mutation({
      query: (data) => ({
        url: `${SERVICES_URL}/edit/${data.id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          name: data.name,
          description: data.description,
        },
      }),
    }),
    deleteService: builder.mutation({
      query: (data) => ({
        url: `${SERVICES_URL}/delete/${data.id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useDeleteServiceMutation,
  useEditServiceMutation,
  useGetServiceMutation,
} = servicesApiSlice;
