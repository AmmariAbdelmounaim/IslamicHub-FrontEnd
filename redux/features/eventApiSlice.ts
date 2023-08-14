import { useAppSelector } from "../store";
import { apiSlice } from "./apiSlice";

const EVENTS_URL = "/api/event/user";

export const eventsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createEvent: builder.mutation({
      query: (data) => ({
        url: `${EVENTS_URL}/create`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          id: data.id,
          name: data.name,
          description: data.description,
          location: data.location,
          startAt: data.startAt,
          endAt: data.endAt,
          homPageId: data.homPageId,
        },
      }),
    }),
    getEvent: builder.mutation({
      query: (data) => ({
        url: `${EVENTS_URL}/getEvent/${data.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
    editEvent: builder.mutation({
      query: (data) => ({
        url: `${EVENTS_URL}/edit/${data.id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        body: {
          name: data.name,
          description: data.description,
          location: data.location,
          startAt: data.startAt,
          endAt: data.endAt,
        },
      }),
    }),
    deleteEvent: builder.mutation({
      query: (data) => ({
        url: `${EVENTS_URL}/delete/${data.id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }),
    }),
  }),
});

export const {
  useCreateEventMutation,
  useDeleteEventMutation,
  useEditEventMutation,
  useGetEventMutation,
} = eventsApiSlice;
