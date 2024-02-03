import api from "./index";
import { USER } from "./urls";
import { ErrorHandle } from "@/utils/ErrorHandle";
import { ShowUserMessage } from "@/utils/ShowUserMessage";

// singup api
export const singupApiReq = api.injectEndpoints({
  endpoints: (builder) => ({
    deviceSingup: builder.query({
      query: () => `${USER.SIGNUP}`,
      transformResponse: (data: any) => {
        const token = localStorage.getItem("token");
        const device = localStorage.getItem("device_id");
        if (token !== undefined) {
          localStorage.setItem("token", data.innerData.token);
        }
        if (device !== undefined) {
          localStorage.setItem("device_id", data.innerData.device_id);
        }
        return data;
      },
    }),
    userSignup: builder.mutation({
      query: (body: any) => ({
        url: `${USER.SIGNUPUSER}`,
        method: "POST",
        body,
      }),
      transformResponse: (res: any) => {
        ShowUserMessage(res);
        return res.innerData;
      },
      transformErrorResponse: (res: any) => ErrorHandle(res),
    }),
  }),
});

export const { useLazyDeviceSingupQuery, useUserSignupMutation } = singupApiReq;
