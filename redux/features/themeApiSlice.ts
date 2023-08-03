import { apiSlice } from "./apiSlice";

const THEMES_URL = "/api/theme/user";
export const themesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTheme: builder.mutation({
      query: (data) => ({
        url: `${THEMES_URL}/create`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          id: data.id,
          titleColor: data.titleColor,
          textColor: data.textColor,
          backgroundColor: data.backgroundColor,
          primaryColor: data.primaryColor,
          centerId: data.centerId,
        },
      }),
    }),
  }),
});

export const { useCreateThemeMutation } = themesApiSlice;
