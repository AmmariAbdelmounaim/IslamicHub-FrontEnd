import { apiSlice } from "./apiSlice";

const TESTIMONIALS_URL = "/api/testimonial/user";
export const testimonialsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTestimonial: builder.mutation({
      query: (data) => ({
        url: `${TESTIMONIALS_URL}/create`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          id: data.id,
          userName: data.userName,
          comment: data.comment,
          image: data.image,
          homePageId: data.homePageId,
        },
      }),
    }),
    getTestimonial: builder.mutation({
      query: (data) => ({
        url: `${TESTIMONIALS_URL}/getTestimonial/${data.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    editTestimonial: builder.mutation({
      query: (data) => ({
        url: `${TESTIMONIALS_URL}/edit/${data.id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          userName: data.userName,
          comment: data.comment,
          image: data.image,
        },
      }),
    }),
    deleteTestimonial: builder.mutation({
      query: (data) => ({
        url: `${TESTIMONIALS_URL}/delete/${data.id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
  }),
});

export const {
  useCreateTestimonialMutation,
  useDeleteTestimonialMutation,
  useEditTestimonialMutation,
  useGetTestimonialMutation,
} = testimonialsApiSlice;
