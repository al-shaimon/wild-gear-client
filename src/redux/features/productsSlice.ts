import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  products: any[];
  searchTerm: string;
  category: string;
  sortBy: string;
  sortOrder: string;
}

const initialState: ProductsState = {
  products: [],
  searchTerm: '',
  category: '',
  sortBy: '',
  sortOrder: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<any[]>) => {
      state.products = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSortBy: (state, action: PayloadAction<{ sortBy: string; sortOrder: string }>) => {
      state.sortBy = action.payload.sortBy;
      state.sortOrder = action.payload.sortOrder;
    },
    clearFilters: (state) => {
      state.searchTerm = '';
      state.category = '';
      state.sortBy = '';
      state.sortOrder = '';
    },
  },
});

export const { setProducts, setSearchTerm, setCategory, setSortBy, clearFilters } =
  productsSlice.actions;

export default productsSlice.reducer;
