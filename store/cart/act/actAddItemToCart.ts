import axiosInstance from "@/app/api/axios";
import { axiosErrorHandler } from "@/lib/utils";
import { RootState } from "@/store/store";
import { ICartProduct } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";



const actAddItemToCart = createAsyncThunk(
  "cart/actAddItemToCart",
  async (item: ICartProduct, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState() as RootState;

    try {
      // TODO Language
      const res = await axiosInstance.post(`api/cart/add-item`, item, {
        headers: {
          "Country-Id": "1",
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });

      return { isSuccessful: res?.data?.isSuccessful, item };
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actAddItemToCart;
