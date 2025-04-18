"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Button } from "../ui/button";
import { FloatingInput, FloatingLabel } from "../ui/floating-label-input";
import { FaAt } from "react-icons/fa6";
import { MdOutlineLock } from "react-icons/md";
import BtnPrimary from "../shared/BtnPrimary";
import { PasswordInput } from "../shared/PasswordInput";
import { AiOutlineWarning } from "react-icons/ai";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import { useMutation } from "@tanstack/react-query";
import { signInWithGoogle, signUp } from "@/lib/actions";
import { ISignUpProps } from "@/types";
import { toast } from "sonner";
import { Spinner } from "../shared/Spinner";
import { FcGoogle } from "react-icons/fc";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

function SignUpForm() {
  
  const t = useTranslations("signPage.signUp");

  const formSchema = z.object({
    firstName: z
      .string()
      .min(2, { message: t("firstNameValid") })
      .max(50),
    lastname: z
      .string()
      .min(2, { message: t("lastNameValid") })
      .max(50),
    email: z
      .string()
      .min(1, { message: t("emailValid") })
      .email({ message: t("emailValid2") })
      .max(50),
    password: z
      .string()
      .min(8, { message: t("passwordValid") })
      .regex(/^[A-Za-z0-9]+$/, {
        message: t("passwordValid2"),
      })
      .regex(/[A-Za-z]/, {
        message: t("passwordValid3"),
      })
      .regex(/[0-9]/, { message: t("passwordValid4") }),
    receiveOffers: z.boolean().default(false).optional(),
  });

  const pathname = usePathname();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastname: "",
      email: "",
      password: "",
      receiveOffers: false,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: (data: ISignUpProps) => signUp(data),
    onSuccess: (data) => {
      
      if (data?.isSuccessful) {
        form.reset();
        toast.success(data.message);
      } else {
        toast.error(data.message);
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
   
    const { receiveOffers, ...data } = values;
    mutate({ data: { name: data.firstName, ...data }, userType: "personal" });
  }
  return (
    <div className="flex-1  flex !min-h-full flex-col background-light200_dark200 p-8 rounded-[23px]">
      <div className="text-center min-h-28">
        <h3 className="font-bold text-2xl uppercase max-md:text-lg">
          {t("h1")}
        </h3>
        <p className="font-mont text-sm mt-2">{t("p")} </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col flex-1 space-y-8"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center relative z-[1] flex-1">
                    <div className="me-2 mt-4 flex justify-center items-center border-b-2 border-black dark:border-light-100 pb-[2px]">
                      <span className="w-3.5 h-3.5 rounded-full background-darkBlack_light100"></span>
                    </div>
                    <div className="relative flex-1">
                      <FloatingInput
                        id="firstName"
                        {...field}
                        className={`${
                          errors?.firstName ? "!border-red-100" : ""
                        } rounded-none relative z-20 text-darkBlack_light100 border-x-0 border-t-0 shadow-none !border-b-1 border-black dark:border-light-100   focus-visible:ring-0 `}
                      />
                      <FloatingLabel htmlFor="firstName">
                        {t("firstName")}
                        <span className="text-lg text-red-100">*</span>
                      </FloatingLabel>
                      {errors?.firstName && (
                        <span className="absolute  top-1/2  right-2 rtl:right-auto rtl:left-2 -translate-y-1/2 text-red-100">
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
            name="lastname"
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center flex-1 relative z-[1]">
                    <div className="me-2 mt-4 flex justify-center items-center border-b-2 border-black dark:border-light-100 pb-[2px]">
                      <span className="w-3.5 h-3.5 rounded-full background-darkBlack_light100"></span>
                    </div>
                    <div className="relative flex-1">
                      <FloatingInput
                        id="lastname"
                        {...field}
                        className={`${
                          errors?.lastname ? "!border-red-100" : ""
                        } rounded-none relative z-20 text-darkBlack_light100 border-x-0 border-t-0 shadow-none !border-b-1 border-black dark:border-light-100   focus-visible:ring-0 `}
                      />
                      <FloatingLabel htmlFor="lastname">
                        {t("lastName")}
                        <span className="text-lg text-red-100">*</span>
                      </FloatingLabel>
                      {errors?.lastname && (
                        <span className="absolute  top-1/2  right-2 rtl:right-auto rtl:left-2 -translate-y-1/2 text-red-100">
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
            name="email"
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center flex-1 relative z-[1]">
                    <FaAt size={19} className="me-2 text-darkBlack_light100" />

                    <div className="relative flex-1">
                      <FloatingInput
                        id="email"
                        {...field}
                        className={`${
                          errors?.email ? "!border-red-100" : ""
                        } rounded-none relative z-20 text-darkBlack_light100 border-x-0 border-t-0 shadow-none !border-b-1 border-black dark:border-light-100   focus-visible:ring-0 `}
                      />
                      <FloatingLabel htmlFor="email">
                        {t("email")}
                        <span className="text-lg text-red-100">*</span>
                      </FloatingLabel>
                      {errors?.email && (
                        <span className="absolute  top-1/2  right-2 rtl:right-auto rtl:left-2 -translate-y-1/2 text-red-100">
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
                  <div className="flex items-center flex-1 relative z-[1]">
                    <MdOutlineLock
                      size={22}
                      className="me-2 text-darkBlack_light100"
                    />

                    <div className="relative flex-1  ">
                      <PasswordInput
                        placeText={t("password")}
                        idHtml={"signUpPassword"}
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

          <FormField
            control={form.control}
            name="receiveOffers"
            render={({ field }) => (
              <FormItem className="flex gap-2 !mt-12 flex-row items-start space-x-3 space-y-0 rounded-md  ">
                <FormControl>
                  <Checkbox
                    className="mt-1 rounded-full data-[state=checked]:bg-primary-100 bg-light-950 border-light-950 data-[state=checked]:border-primary-100"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-2  !leading-5 font-rubik text-darkBlack_light100">
                  <FormLabel className="font-normal">{t("agree")}</FormLabel>
                  <FormDescription className="font-normal  text-darkBlack_light100 !text-sm">
                    <React.Fragment>
                      {t("terms")}
                      <Link href="/" className="underline">
                        {" "}
                        {t("privacy")}
                      </Link>
                    </React.Fragment>
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          <BtnPrimary disabled={isPending} customStyle="[&_svg]:!size-5">
            {isPending ? <Spinner /> : t("btn")}
          </BtnPrimary>
        </form>
      </Form>

      <div>
        <div className="h-[2px] relative  bg-black/30 dark:bg-light-100/30  my-8">
          <span className="font-semibold font-mont  left-1/2 absolute top-1/2 -translate-y-1/2 text-center w-[30%]  background-light200_dark200 -translate-x-1/2">
            {t("or")}
          </span>
        </div>
        <form
          className="flex items-center flex-col gap-4"
          action={() => signInWithGoogle(pathname === "/sign-up&in" ? "/" : "")}
        >
          <p className="capitalize font-mont text-darkBlack_light100">
            {t("signWith")}
          </p>
          <Button className="[&_svg]:size-9 rounded-full w-14 h-14 bg-light-100 hover:bg-light-100">
            <FcGoogle />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
