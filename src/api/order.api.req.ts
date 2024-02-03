import api from "./index";
import { ORDER } from "./urls";
import { ErrorHandle } from "@/utils/ErrorHandle";
import { ShowUserMessage } from "@/utils/ShowUserMessage";

// order api
export const orderApiReq = api.injectEndpoints({
  endpoints: (builder) => ({
    sendOrder: builder.mutation({
      query: (body: any) => ({
        url: `${ORDER.SENDORDER}`,
        method: "POST",
        body,
      }),
      transformErrorResponse: (err) => ErrorHandle(err),
      transformResponse: (res: any) => {
        ShowUserMessage(res);
        return res?.innerData;
      },
      invalidatesTags: ["ADDTOCART"],
    }),
  }),
});

export const { useSendOrderMutation } = orderApiReq;
