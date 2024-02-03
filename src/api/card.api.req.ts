import api from "./index";
import { CARD } from "./urls";

// card api
export const cardApiReq = api.injectEndpoints({
  endpoints: (builder) => ({
    getSingleCard: builder.query({
      query: (id: string) => `${CARD.GETSINGLECARD}/${id}`,
      transformResponse: (data: any) => data.innerData,
    }),
    getNewThreeCard: builder.query({
      query: () => `${CARD.GETTHREENEWCARD}`,
      transformResponse: (data: any) => data.innerData,
    }),
    getPaginationCard: builder.query({
      query: ({
        category,
        page,
        limit,
      }: {
        category: any;
        page: string;
        limit: string;
      }) =>
        `${CARD.GETPAGINATIONCARD}?category=${category}&page=${page}&limit=${limit}`,
      transformResponse: (data: any) => data.innerData,
    }),
  }),
});

export const {
  useLazyGetSingleCardQuery,
  useGetNewThreeCardQuery,
  useLazyGetPaginationCardQuery,
} = cardApiReq;
