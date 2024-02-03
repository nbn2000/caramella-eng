import api from "./index";
import { CART } from "./urls";
import { ErrorHandle } from "@/utils/ErrorHandle";
import { ShowUserMessage } from "@/utils/ShowUserMessage";

// cart api
export const cartApiReq = api.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (body: any) => ({
        url: `${CART.ADDTOCART}`,
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

    getCart: builder.query({
      query: (id) => `${CART.GETCART}/${id}`,
      transformResponse: (res: any) => res?.innerData,
      providesTags: ["ADDTOCART"],
    }),

    changeAmount: builder.mutation({
      query: (body: any) => ({
        url: `${CART.CHANGEAMOUNT}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["ADDTOCART"],
    }),
    deleteItem: builder.mutation({
      query: (body) => ({
        url: `${CART.DELETEITEM}`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["ADDTOCART"],
    }),

    checkItem: builder.query({
      query: ({ device_id, _id }: { device_id: string; _id: string }) =>
        `${CART.CHECKITEM}?device_id=${device_id}&_id=${_id}`,
      transformResponse: (res: any) => res?.innerData,
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useChangeAmountMutation,
  useDeleteItemMutation,
  useLazyCheckItemQuery,
} = cartApiReq;
