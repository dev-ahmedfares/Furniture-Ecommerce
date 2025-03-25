import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  user: {
    name: string;
    lastname: string;
    email: string;
    is_admin: number;
    is_verfied: number;
    socialite_id: string;
    image:""
  };
  accessToken: string;
}

const initialState: IInitialState = {
  user: {
    name: "",
    lastname: "",
    email: "",
    is_admin: 0,
    is_verfied: 0,
    socialite_id: "",
    image:""
  },
  accessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeUser: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload.user,
      };
      //   state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    signOutClean: (state) => {
      state.user = {
        name: "",
        lastname: "",
        email: "",
        is_admin: 0,
        is_verfied: 0,
        socialite_id: "",
        image:""
      };
      state.accessToken = "";
    },
  },
  // extraReducers:(builder)=>{
  //     builder.addCase()
  // }
});

export default authSlice.reducer;
export const { storeUser, signOutClean } = authSlice.actions;
