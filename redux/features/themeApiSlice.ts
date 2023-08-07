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
    getTheme: builder.mutation({
      query: (data) => ({
        url: `${THEMES_URL}/getTheme/${data.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    editTheme: builder.mutation({
      query: (data) => ({
        url: `${THEMES_URL}/edit/${data.id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
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

export const {
  useCreateThemeMutation,
  useGetThemeMutation,
  useEditThemeMutation,
} = themesApiSlice;
