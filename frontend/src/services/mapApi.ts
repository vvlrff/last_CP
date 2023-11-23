import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const mapApi = createApi({
  reducerPath: "mapApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000",
  }),
  endpoints: (builder) => ({
    getTrainIndexes: builder.query<any, string>({
      query: () => ({
        url: `/admin/trains_index`,
      })
    }),
    postListSupport2: builder.mutation<any, { train_index: string[] }>({
      query: ({ train_index }) => ({
        url: `/admin/List_Support_2`,
        method: "POST",
        body: {
          train_index,
        },
      }),
    }),
    postListTrainWagonData: builder.mutation<any, { train_index: string[], current_data: string }>({
      query: ({ train_index, current_data }) => ({
        url: `/admin/list_one_train_with_time`,
        method: "POST",
        body: {
          train_index,
          current_data
        }
      })
    }),
  }),
});

export const { useGetTrainIndexesQuery, usePostListSupport2Mutation, usePostListTrainWagonDataMutation } = mapApi;