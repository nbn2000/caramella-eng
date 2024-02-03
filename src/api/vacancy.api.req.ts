import api from "./index";
import { VACANCY } from "./urls";
import { ErrorHandle } from "@/utils/ErrorHandle";
import { ShowUserMessage } from "@/utils/ShowUserMessage";

// vacancy api
export const vacancyApiReq = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllVacancy: builder.query({
      query: () => `${VACANCY.GETALLVACANCY}`,
      transformResponse: (data: any) => data.innerData.data,
    }),
    getSingleVacancy: builder.query({
      query: (id) => `${VACANCY.GETSINGLEVACANCY}/${id}`,
      transformResponse: (data: any) => data.innerData,
    }),
    applyVacancy: builder.mutation({
      query: (body) => ({
        url: `${VACANCY.APPLIEDVACANCY}`,
        method: "POST",
        body,
      }),
      transformResponse: (res) => {
        ShowUserMessage(res);
        return res;
      },
      transformErrorResponse: (err) => ErrorHandle(err),
    }),
  }),
});

export const {
  useGetAllVacancyQuery,
  useGetSingleVacancyQuery,
  useApplyVacancyMutation,
} = vacancyApiReq;
