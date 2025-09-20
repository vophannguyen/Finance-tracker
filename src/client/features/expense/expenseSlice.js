import api from "../../store/api";

const expenseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getExpense: builder.query({
      query: () => "/expense",
    }),
  }),
});
export const { useGetExpenseQuery } = expenseApi;
