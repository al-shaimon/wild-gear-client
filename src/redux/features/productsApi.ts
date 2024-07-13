import { baseApi } from '@/redux/api/baseApi';

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ searchTerm }: { searchTerm?: string } = {}) => ({
        url: '/products',
        params: searchTerm ? { searchTerm } : {},
      }),
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useUpdateProductMutation } =
  productsApi;
