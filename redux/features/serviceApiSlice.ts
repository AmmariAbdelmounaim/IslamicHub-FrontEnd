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
  }),
});

export const { useCreateServiceMutation } = servicesApiSlice;
