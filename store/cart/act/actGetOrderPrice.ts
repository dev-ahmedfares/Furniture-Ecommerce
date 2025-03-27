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
const actGetOrderPrice = createAsyncThunk(
  "cart/actGetOrderPrice",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState() as RootState;
    try {
      // TODO Language
      const res = await axiosInstance.get(`/api/order/order-price`, {
        headers: {
          "Country-Id": "1",

          Authorization: `Bearer ${auth.accessToken}`,
        },
      });

    
      return res?.data?.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetOrderPrice;
