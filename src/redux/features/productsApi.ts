import { baseApi } from '@/redux/api/baseApi';

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (products) => ({
        url: '/products',
        method: 'GET',
        body: products,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
