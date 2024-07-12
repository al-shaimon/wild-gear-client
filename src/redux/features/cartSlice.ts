import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  inventory: {
    quantity: number;
  };
  [key: string]: any;
}

interface CartState {
  items: CartItem[];
  error?: string;
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i._id === item._id);
      if (existingItem) {
        if (existingItem.quantity < existingItem.inventory.quantity) {
          existingItem.quantity += 1;
        } else {
          state.error = 'Product stock limit reached.';
        }
      } else {
        if (item.inventory.quantity > 0) {
          state.items.push({
            ...item,
            quantity: 1,
          });
        } else {
          state.error = 'Product is out of stock.';
        }
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item._id === id);

      if (existingItem) {
        if (quantity <= 0) {
          state.items = state.items.filter((item) => item._id !== id);
        } else if (quantity <= existingItem.inventory.quantity) {
          existingItem.quantity = quantity;
        } else {
          state.error = 'Product stock limit reached.';
        }
      }
    },
    clearCart(state) {
      state.items = [];
    },
    clearError(state) {
      state.error = undefined;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, clearError } =
  cartSlice.actions;

export default cartSlice.reducer;
