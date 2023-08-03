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
  }),
});

export const { useCreateSlideMutation } = slidesApiSlice;
