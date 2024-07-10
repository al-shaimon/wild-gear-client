// src/redux/features/productsApi.ts
import { baseApi } from '@/redux/api/baseApi';

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery } = productsApi;
export default productsApi;
