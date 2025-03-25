import axiosInstance from "@/app/api/axios";
import { axiosErrorHandler } from "@/lib/utils";
import { RootState } from "@/store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface ICartItems {
  discount: number;
  id: number;
  price: number;
  subtotal: number;
  qty: number;
  name: string;
}
const actGetCartItems = createAsyncThunk(
  "cart/actGetCartItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState() as RootState;
    try {
      // TODO Language
      const res = await axiosInstance.get(`/api/cart/items`, {
        headers: {
          "Country-Id": "1",
          "Accept-Language": "ar",
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });

      console.log(res);
      return res?.data?.data.cart_items.map((item: ICartItems) => {
        return {
          item_id: item.id,
          qty: item.qty,
          price: item.price,
          subtotal: item.subtotal,
          name: item.name,
        };
      });
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetCartItems;
