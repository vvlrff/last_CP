import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hackApi = createApi({
  reducerPath: "hackApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000",
  }),
  endpoints: (builder) => ({
    uploadFile: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: `/api/upload`,
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    }),
  }),
});

export const { useUploadFileMutation } = hackApi;
