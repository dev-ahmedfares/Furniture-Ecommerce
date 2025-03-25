"use server";

import axiosInstance from "@/app/api/axios";
import { axiosErrorHandler } from "./utils";
import { ISignInProps, ISignOutProps, ISignUpProps } from "@/types";
import { signIn as signInSocial, signOut as signOutSocial } from "./Auth";

export async function signUp({ data, userType }: ISignUpProps) {
  try {
    const res = await axiosInstance.post("/api/register", data, {
      headers: {
        "Content-Type": "application/json",
        "User-Type": userType,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
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

    return res.data;
  } catch (error) {
    console.log(error);
    return axiosErrorHandler(error);
  }
}
export async function signOut({ accessToken, userType }: ISignOutProps) {
  try {
    const res = await axiosInstance.get("/api/out", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        "User-Type": userType,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
    return axiosErrorHandler(error);
  }
}

export async function signInWithGoogle(path?:string) {
  
  if (path) {
    await signInSocial("google",  { redirectTo: path } );
    
  } else {
    await signInSocial("google");
    
  }
}
export async function signOutWithGoogle() {
  await signOutSocial( { redirectTo: "/" });
}
