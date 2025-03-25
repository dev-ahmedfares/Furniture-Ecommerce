"use client";
import { signOutClean, storeUser } from "@/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { IUser } from "@/types";
import { useSession } from "next-auth/react";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IAuthContext {
  isAuthenticatedWithGoogle: boolean;
  isAuthenticatedWithCredential: boolean;
  accessToken: string;
  user: IUser;

}

const authContext = createContext<IAuthContext | undefined>(undefined);

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticatedWithGoogle, setIsAuthenticatedWithGoogle] =
    useState(false);
  const [isAuthenticatedWithCredential, setIsAuthenticatedWithCredential] =
    useState(false);

  const { data, status } = useSession();
  console.log("data", data, status);
  const dispatch = useAppDispatch();

  const { accessToken, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    console.log(data, status)
    // @ts-ignore
    if (status === "authenticated" && data?.accessToken ) {
      dispatch(
        storeUser({
          user: data?.user,
          // @ts-ignore
          accessToken: data?.accessToken,
        })
      );
      setIsAuthenticatedWithGoogle(true);
    } else {
      setIsAuthenticatedWithGoogle(false);
    }

    if (status === "unauthenticated" && accessToken) {
      if (user?.image) {
         dispatch(signOutClean());
      } else {
        setIsAuthenticatedWithCredential(true);
      }
    } else {
      setIsAuthenticatedWithCredential(false);
    }
  }, [data,status, accessToken]);

  return (
    <authContext.Provider
      value={{
        isAuthenticatedWithGoogle,
        isAuthenticatedWithCredential,
        accessToken,
        user,
        
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export const useCustomAuth = () => {
  const context = useContext(authContext);

  if (context === undefined) {
    throw new Error("useCustomAuth must be used within a AuthProvider");
  }

  return context;
};
