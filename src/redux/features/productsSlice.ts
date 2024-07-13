import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
  products: any[];
  searchTerm: string;
  category: string;
  priceRange: [number, number];
  sortBy: string;
  sortOrder: string;
}

const initialState: ProductsState = {
  products: [],
  searchTerm: '',
  category: '',
  priceRange: [0, 250],
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
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    setSortBy: (state, action: PayloadAction<{ sortBy: string; sortOrder: string }>) => {
      state.sortBy = action.payload.sortBy;
      state.sortOrder = action.payload.sortOrder;
    },
    clearFilters: (state) => {
      state.searchTerm = '';
      state.category = '';
      state.priceRange = [0, 1000];
      state.sortBy = '';
      state.sortOrder = '';
    },
  },
});

export const { setProducts, setSearchTerm, setCategory, setPriceRange, setSortBy, clearFilters } =
  productsSlice.actions;

export default productsSlice.reducer;
