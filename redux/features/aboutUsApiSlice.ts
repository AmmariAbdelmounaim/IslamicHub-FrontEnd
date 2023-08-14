import { apiSlice } from "./apiSlice";

const ABOUTUS_URL = "/api/aboutUs/user";
export const aboutUsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAboutUs: builder.mutation({
      query: (data) => ({
        url: `${ABOUTUS_URL}/create`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          id: data.id,
          title: data.title,
          paragraph: data.paragraph,
          homePageId: data.homePageId,
        },
      }),
    }),
    getAboutUs: builder.mutation({
      query: (data) => ({
        url: `${ABOUTUS_URL}/getAboutUs/${data.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    editAboutUs: builder.mutation({
      query: (data) => ({
        url: `${ABOUTUS_URL}/edit/${data.id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          title: data.title,
          paragraph: data.paragraph,
        },
      }),
    }),
    deleteAboutUs: builder.mutation({
      query: (data) => ({
        url: `${ABOUTUS_URL}/delete/${data.id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
  }),
});

export const {
  useCreateAboutUsMutation,
  useDeleteAboutUsMutation,
  useEditAboutUsMutation,
  useGetAboutUsMutation,
} = aboutUsApiSlice;
