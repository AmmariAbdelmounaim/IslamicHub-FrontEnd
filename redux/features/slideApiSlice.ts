import { apiSlice } from "./apiSlice";

const SLIDES_URL = "/api/slide/user";
export const slidesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createSlide: builder.mutation({
      query: (data) => ({
        url: `${SLIDES_URL}/create`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          id: data.id,
          image: data.image,
          homePageId: data.homePageId,
        },
      }),
    }),
    getSlide: builder.mutation({
      query: (data) => ({
        url: `${SLIDES_URL}/getSlide/${data.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    editSlide: builder.mutation({
      query: (data) => ({
        url: `${SLIDES_URL}/edit/${data.id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          image: data.image,
        },
      }),
    }),
    deleteSlide: builder.mutation({
      query: (data) => ({
        url: `${SLIDES_URL}/delete/${data.id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
  }),
});

export const {
  useCreateSlideMutation,
  useDeleteSlideMutation,
  useEditSlideMutation,
  useGetSlideMutation,
} = slidesApiSlice;
