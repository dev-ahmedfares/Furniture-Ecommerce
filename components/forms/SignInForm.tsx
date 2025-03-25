"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { FloatingInput, FloatingLabel } from "../ui/floating-label-input";
import { FaAt } from "react-icons/fa6";
import { MdOutlineLock } from "react-icons/md";
import BtnPrimary from "../shared/BtnPrimary";
import { PasswordInput } from "../shared/PasswordInput";
import { AiOutlineWarning } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { ISignInProps } from "@/types";
import { Spinner } from "../shared/Spinner";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hook";
import { storeUser } from "@/store/auth/authSlice";
import { signIn } from "@/lib/actions";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email format" }),
  password: z.string().min(1, { message: "Password is required" }),
});

function SignInForm() {
  const pathname = usePathname()
  const dispatch = useAppDispatch();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: (data: ISignInProps) => signIn(data),
    onSuccess: (data) => {
      console.log(data);
      if (data?.isSuccessful) {
        form.reset();
        dispatch(storeUser({ user: data.data, accessToken: data.data.token }));
        toast.success("Successfully logged in");
        
        if (pathname === "/sign-up&in") {
          router.push("/");
        }
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({ data: values, userType: "personal" });
  }

  
  return (
    <div className="flex-1 flex flex-col  background-light200_dark200 p-8 rounded-[23px] min-h-[400px]">
      <div className="text-center min-h-28">
        <h3 className="font-bold text-2xl uppercase max-md:text-lg">
          I am already a customer
        </h3>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col flex-1 space-y-8"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center flex-1">
                    <FaAt size={19} className="me-2 text-darkBlack_light100" />

                    <div className="relative flex-1">
                      <FloatingInput
                        id="email-signin"
                        {...field}
                        className={`${
                          errors?.email ? "!border-red-100" : ""
                        } rounded-none  text-darkBlack_light100 border-x-0 border-t-0 shadow-none !border-b-1 border-black dark:border-light-100   focus-visible:ring-0 `}
                      />
                      <FloatingLabel htmlFor="email-signin">
                        Email Address
                        <span className="text-lg text-red-100">*</span>
                      </FloatingLabel>
                      {errors?.email && (
                        <span className="absolute  top-1/2 right-2 -translate-y-1/2 text-red-100">
                          <AiOutlineWarning size={20} />
                        </span>
                      )}
                    </div>
                  </div>
                </FormControl>

                <FormMessage className="ps-8 font-mont" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center flex-1">
                    <MdOutlineLock
                      size={22}
                      className="me-2 text-darkBlack_light100"
                    />

                    <div className="relative flex-1">
                      <PasswordInput
                        idHtml={"signInPassword"}
                        customStyle={`${
                          errors?.password ? "!text-red-100" : ""
                        }`}
                        className={`${
                          errors?.password ? "!border-red-100" : ""
                        }`}
                        id="password"
                        autoComplete="current-password"
                        {...field}
                      />
                    </div>
                  </div>
                </FormControl>

                <FormMessage className="ps-8 font-mont" />
              </FormItem>
            )}
          />

          <BtnPrimary
            type="submit"
            disabled={isPending}
            customStyle="[&_svg]:!size-5 !mt-auto"
          >
            {isPending ? <Spinner /> : "Sign In"}
          </BtnPrimary>
        </form>
      </Form>
    </div>
  );
}

export default SignInForm;
