import axiosInstance from "@/app/api/axios";
import { axiosErrorHandler } from "@/lib/utils";
import { RootState } from "@/store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

const actDestroyCart = createAsyncThunk(
  "cart/actDestroyCart",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState() as RootState;
    try {
      
      const res = await axiosInstance.post(`/api/cart/destroy-cart`, null, {
        headers: {
        //   "Country-Id": "1",
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });

      
      return { isSuccessful: res?.data?.isSuccessful };
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actDestroyCart;
