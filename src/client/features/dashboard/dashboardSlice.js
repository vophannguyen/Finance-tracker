import api from "../../store/api";

/** Authentication endpoints */
const dashboardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/dashboard/",
    }),
  }),
});

export const { useGetUserQuery } = dashboardApi;
