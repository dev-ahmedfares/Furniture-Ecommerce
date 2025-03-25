import { ICartProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import actGetCartItems from "./act/actGetCartItems";
import { isString } from "@/types/guards";
import actAddItemToCart from "./act/actAddItemToCart";
import actIncreaseItemQty from "./act/actIncreaseItemQty";
import actDecreaseItemQty from "./act/actDecreaseItemQty";
import actRemoveItemFromCart from "./act/actRemoveItemFromCart";
import actDestroyCart from "./act/actDestroyCart";
import actGetOrderPrice from "./act/actGetOrderPrice";

interface IInitialState {
  items: ICartProduct[];
  total: number;
  loading: boolean;
  loadingAddToCart: boolean;
  loadingDeleteFromCart: boolean;
  loadingDestroyCart: boolean;
  loadingIncrease:boolean;
  loadingDecrease:boolean;
  error: string | null;
  totalPriceFromApi: number;
}

const initialState: IInitialState = {
  items: [],
  total: 0,
  loading: false,
  loadingAddToCart: false,
  loadingDeleteFromCart: false,
  loadingDestroyCart: false,
  loadingIncrease:false,
  loadingDecrease:false,
  error: null,
  totalPriceFromApi: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemLocal: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (product) => product.item_id === item.item_id
      );

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push(item);
      }

      state.total = state.items.reduce(
        (acc, ele) => acc + +ele.price * +ele.qty,
        0
      );
    },

    // action here is {item_id:number ,qty:number}
    increaseItemLocal: (state, action) => {
      const item = state.items.find(
        (item) => item.item_id === action.payload.item_id
      );

      if (item) {
        item.qty += 1;
        state.total = state.items.reduce(
          (acc, ele) => acc + +ele.price * +ele.qty,
          0
        );
      }
    },
    decreaseItemLocal: (state, action) => {
      const item = state.items.find(
        (item) => item.item_id === action.payload.item_id
      );

      if (item && item.qty > 1) {
        item.qty -= 1;
        state.total = state.items.reduce(
          (acc, ele) => acc + +ele.price * +ele.qty,
          0
        );
      }
    },
    removeItemLocal: (state, action) => {
      const deleteItem = state.items.find(
        (item) => item.item_id === action.payload.item_id
      );

      if (deleteItem) {
        state.items = state.items.filter(
          (item) => item.item_id !== action.payload.item_id
        );

        state.total = state.items.reduce(
          (acc, ele) => acc + +ele.price * +ele.qty,
          0
        );
      }
    },
    clearCartLocal: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    // Get Cart Items
    builder
      .addCase(actGetCartItems.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(actGetCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;

        state.total = state.items.reduce(
          (acc, ele) => acc + +ele.price * +ele.qty,
          0
        );
      })
      .addCase(actGetCartItems.rejected, (state, action) => {
        state.loading = false;
        if (isString(action.payload)) state.error = action.payload;
      });

    // add item to Cart Items
    builder
      .addCase(actAddItemToCart.pending, (state) => {
        state.loadingAddToCart = true;
        state.error = null;
      })
      .addCase(actAddItemToCart.fulfilled, (state, action) => {
        state.loadingAddToCart = false;

        if (action.payload.isSuccessful) {
          const existingItem = state.items.find(
            (product) => product.item_id === action.payload.item.item_id
          );

          if (existingItem) {
            existingItem.qty += 1;
          } else {
            state.items.push(action.payload.item);
          }

          state.total = state.items.reduce(
            (acc, ele) => acc + +ele.price * +ele.qty,
            0
          );
        }
      })
      .addCase(actAddItemToCart.rejected, (state, action) => {
        state.loadingAddToCart = false;
        if (isString(action.payload)) state.error = action.payload;
      });
    // increase item to Cart Items
    builder
      .addCase(actIncreaseItemQty.pending, (state) => {
        state.loadingIncrease = true;
        state.error = null;
      })
      .addCase(actIncreaseItemQty.fulfilled, (state, action) => {
        state.loadingIncrease = false;

        if (action.payload.isSuccessful) {
          const existingItem = state.items.find(
            (product) => product.item_id === action.payload.item.item_id
          );

          if (existingItem) {
            existingItem.qty += 1;
          } else {
            state.items.push(action.payload.item);
          }

          state.total = state.items.reduce(
            (acc, ele) => acc + +ele.price * +ele.qty,
            0
          );
        }
      })
      .addCase(actIncreaseItemQty.rejected, (state, action) => {
        state.loadingIncrease = false;
        if (isString(action.payload)) state.error = action.payload;
      });
    // decrease item to Cart Items
    builder
      .addCase(actDecreaseItemQty.pending, (state) => {
        state.loadingDecrease = true;
        state.error = null;
      })
      .addCase(actDecreaseItemQty.fulfilled, (state, action) => {
        state.loadingDecrease = false;

        if (action.payload.isSuccessful) {
          const item = state.items.find(
            (item) => item.item_id === action.payload.item.item_id
          );

          if (item && item.qty > 1) {
            item.qty -= 1;
            state.total = state.items.reduce(
              (acc, ele) => acc + +ele.price * +ele.qty,
              0
            );
          }
        }
      })
      .addCase(actDecreaseItemQty.rejected, (state, action) => {
        state.loadingDecrease = false;
        if (isString(action.payload)) state.error = action.payload;
      });
    // Delete item from Cart Items
    builder
      .addCase(actRemoveItemFromCart.pending, (state) => {
        state.loadingDeleteFromCart = true;
        state.error = null;
      })
      .addCase(actRemoveItemFromCart.fulfilled, (state, action) => {
        state.loadingDeleteFromCart = false;

        if (action.payload.isSuccessful) {
          const deleteItem = state.items.find(
            (item) => item.item_id === action.payload.item.item_id
          );

          if (deleteItem) {
            state.items = state.items.filter(
              (item) => item.item_id !== action.payload.item.item_id
            );

            state.total = state.items.reduce(
              (acc, ele) => acc + +ele.price * +ele.qty,
              0
            );
          }
        }
      })
      .addCase(actRemoveItemFromCart.rejected, (state, action) => {
        state.loadingDeleteFromCart = false;
        if (isString(action.payload)) state.error = action.payload;
      });
    // Destroy  Cart Items
    builder
      .addCase(actDestroyCart.pending, (state) => {
        state.loadingDestroyCart = true;
        state.error = null;
      })
      .addCase(actDestroyCart.fulfilled, (state, action) => {
        state.loadingDestroyCart = false;

        if (action.payload.isSuccessful) {
          state.items = [];
          state.total = 0;
        }
      })
      .addCase(actDestroyCart.rejected, (state, action) => {
        state.loadingDestroyCart = false;
        if (isString(action.payload)) state.error = action.payload;
      });
    // Get Order Price
    builder
      .addCase(actGetOrderPrice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(actGetOrderPrice.fulfilled, (state, action) => {
        state.loading = false;
        state.totalPriceFromApi = action.payload.grand_total;
      })
      .addCase(actGetOrderPrice.rejected, (state, action) => {
        state.loading = false;
        if (isString(action.payload)) state.error = action.payload;
      });
  },
});

export const {
  addItemLocal,
  clearCartLocal,
  removeItemLocal,
  decreaseItemLocal,
  increaseItemLocal,
} = cartSlice.actions;

export {
  actGetCartItems,
  actIncreaseItemQty,
  actDecreaseItemQty,
  actRemoveItemFromCart,
  actGetOrderPrice,
};
export default cartSlice.reducer;
