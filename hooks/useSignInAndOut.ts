import { useCustomAuth } from "@/context/AuthContext";
import { signOut, signOutWithGoogle } from "@/lib/actions";
import { signOutClean } from "@/store/auth/authSlice";
import { useAppDispatch } from "@/store/hook";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

import { toast } from "sonner";

export function useSignInAndOut() {
    const t = useTranslations("signPage.signin")
  const { accessToken, isAuthenticatedWithGoogle, user } = useCustomAuth();
  const dispatch = useAppDispatch();

  const { mutate, isPending } = useMutation({
    mutationKey: ["signOut"],
    mutationFn: () => signOut({ accessToken, userType: "personal" }),
    onSuccess: (data) => {
      console;
      if (data?.isSuccessful) {
        dispatch(signOutClean());
        toast.success(t("successOut"));
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


  return {mutate,isPending,isAuthenticatedWithGoogle,user,accessToken}
}
