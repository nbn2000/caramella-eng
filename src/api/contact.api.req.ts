import api from "./index";
import { CONTACT } from "./urls";
import { ErrorHandle } from "@/utils/ErrorHandle";
import { ShowUserMessage } from "@/utils/ShowUserMessage";

// contact api
export const contactApiReq = api.injectEndpoints({
  endpoints: (builder) => ({
    contactUs: builder.mutation({
      query: (body: any) => ({
        url: `${CONTACT.SENDCONTACT}`,
        method: "POST",
        body,
      }),
      transformErrorResponse: (err) => ErrorHandle(err),
      transformResponse: (res: any) => {
        ShowUserMessage(res);
        return res?.innerData;
      },
    }),
  }),
});

export const { useContactUsMutation } = contactApiReq;
