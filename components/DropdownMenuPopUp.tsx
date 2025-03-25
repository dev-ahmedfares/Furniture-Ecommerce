"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import Link from "next/link";
import { useMutation, useQuery } from "@tanstack/react-query";

import { toast } from "sonner";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";
import { signOut, signOutWithGoogle } from "@/lib/actions";
import { signOutClean, storeUser } from "@/store/auth/authSlice";
import { useSession } from "next-auth/react";
import { useCustomAuth } from "@/context/AuthContext";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropdownMenuPopUp() {
  const {
    accessToken,
    isAuthenticatedWithGoogle,
    user,
  } = useCustomAuth();
  const dispatch = useAppDispatch();

  const { mutate, isPending } = useMutation({
    mutationKey: ["signOut"],
    mutationFn: () => signOut({ accessToken, userType: "personal" }),
    onSuccess: (data) => {
      console;
      if (data?.isSuccessful) {
        dispatch(signOutClean());
        toast.success("Successfully logged out");
      } else {
        toast.error(data);
      }
    },

    onError: (error) => {
      if (error?.message) {
        toast.error(error?.message);
      } else if (typeof error === "string") {
        toast.error(error);
      } else {
        toast.error("Un expected error");
      }
    },
  });

  if (!accessToken)
    return (
      <Link href={"/sign-up&in"}>
        <Button
          className="!text-light-400 dark:!text-light-100  bg-light-100 dark:bg-dark-100"
          variant="outline"
        >
          Sign In
        </Button>
      </Link>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="!text-light-400 capitalize gap-.5 dark:!text-light-100 p-2 !py-0 h-8 "
          variant="ghost"
        >
          {`${user?.name} ${user?.lastname}`}
          <MdKeyboardArrowDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" !left-0 !text-light-400 dark:!text-light-100  bg-light-100 dark:bg-dark-100">
        {isAuthenticatedWithGoogle ? (
          <DropdownMenuItem
            disabled={isPending}
            onClick={() => {
              
              signOutWithGoogle();
            }}
            className="cursor-pointer"
          >
            Log out
            <DropdownMenuShortcut>
              <PiSignOut />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem
            disabled={isPending}
            onClick={() => mutate()}
            className="cursor-pointer"
          >
            Log out
            <DropdownMenuShortcut>
              <PiSignOut />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
