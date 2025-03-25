import axiosInstance from "@/app/api/axios";
import { axiosErrorHandler } from "@/lib/utils";
import { RootState } from "@/store/store";
import { ICartProduct } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const actCreateOrder = createAsyncThunk(
  "cart/actCreateOrder",
  async (item:ICartProduct, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState() as RootState;
    try {
      
      const res = await axiosInstance.post(`/api/order/create`, item, {
        headers: {
            "Country-Id": "1",
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });

      console.log(res,"createOrder");
    //   return { isSuccessful: res?.data?.isSuccessful, item };
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actCreateOrder;
