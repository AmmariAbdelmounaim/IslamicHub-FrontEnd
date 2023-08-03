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
  }),
});

export const { useCreateEventMutation } = eventsApiSlice;
