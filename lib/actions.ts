"use server";

import axiosInstance from "@/app/api/axios";
import { axiosErrorHandler } from "./utils";
import { ISignInProps, ISignUpProps } from "@/types";



export async function signUp({ data, userType }: ISignUpProps) {
  try {
    const res = await axiosInstance.post("/api/register", data, {
      headers: {
        "Content-Type": "application/json",
        "User-Type": userType,
      },
    });
    
    
    return res.data
  } catch (error) {
    console.log(error)
    return axiosErrorHandler(error);
  }
}

export async function signIn({ data, userType }: ISignInProps) {
  try {
    const res = await axiosInstance.post("/api/login", data, {
      headers: {
        "Content-Type": "application/json",
        "User-Type": userType,
      },
    });
    
    
    return res.data
  } catch (error) {
    console.log(error)
    return axiosErrorHandler(error);
  }
}

export async function signWithSocial({ data, userType }: ISignInProps) {
  try {
    const res = await axiosInstance.post("api/user/social-login", data, {
      headers: {
        "Content-Type": "application/json",
        "User-Type": userType,
      },
    });
    
    
    return res.data
  } catch (error) {
    console.log(error)
    return axiosErrorHandler(error);
  }
}
