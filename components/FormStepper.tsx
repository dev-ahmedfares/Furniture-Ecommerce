"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { CheckIcon, ChevronRightIcon, ChevronLeftIcon } from "lucide-react";

import SignInForm from "./forms/SignInForm";
import SignUpForm from "./forms/SignUpForm";
import SignTabs from "./SignTabs";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { FloatingInput, FloatingLabel } from "./ui/floating-label-input";
import { AiOutlineWarning } from "react-icons/ai";
import Image from "next/image";
import OrderCard from "./OrderCard";
import { redirect } from "next/navigation";
import { actGetOrderPrice } from "@/store/cart/cartSlice";

const formSchema = z.object({
  city: z.string().min(1, { message: "City is required" }),
  street_name: z.string().min(1, { message: "Street Name is required" }),
  building_number: z.string().min(1, { message: "City is required" }),
  payment_method: z.string().min(1, { message: "Payment method is required" }),
});
type stepKey = 0 | 1 | 2 | 3 | 4 | 5;
export default function FormStepper() {
  const { accessToken, user } = useAppSelector((state) => state.auth);
  const [currentStep, setCurrentStep] = useState<stepKey>(1);
  const { items, totalPriceFromApi } = useAppSelector((state) => state.cart);

  if (items.length === 0) redirect("/");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actGetOrderPrice());
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      setCurrentStep(1);
    } else {
      setCurrentStep(0);
    }
  }, [accessToken]);

  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
    },
    accountDetails: {
      username: "",
      password: "",
    },
    preferences: {
      theme: "light",
      notifications: "all",
    },
    additionalInfo: {
      bio: "",
      interests: "",
    },
  });

  const steps = [
    {
      id: "step-1",
      name: "Register",
      //   fields: ["firstName", "lastName", "email"],
    },
    {
      id: "step-2",
      name: "Data",
      fields: ["username", "password"],
    },
    {
      id: "step-3",
      name: "payment",
      fields: ["theme", "notifications"],
    },
    {
      id: "step-4",
      name: "review",
      fields: ["bio", "interests"],
    },
  ];

  const [currentValues, setCurrentValues] = useState({});
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      city: "",
      //   password: "",
    },
    mode: "onChange",
  });

  const validateStep: (step: 1 | 2 | 3) => Promise<boolean> = async (step) => {
    const stepFields: Record<1 | 2 | 3, string[]> = {
      1: ["city", "street_name", "building_number"],
      2: ["payment_method"],
      3: ["review"],
    };

    const fieldsToValidate = stepFields[step];
    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      setCurrentValues((prev: any) => ({
        ...prev,
        ...form.getValues(fieldsToValidate),
      }));
    }
    return isValid;
  };

  // To Dynamically Validate Fields
  //   const title_ar = form.watch("city");

  const [complete, setComplete] = useState(false);
  const handleNext = async () => {
    // setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    const isValid = await validateStep(currentStep);
    if (isValid) {
      if (currentStep === steps.length) {
        setComplete(true);
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit the form data
    console.log("Form submitted:", formData);
    // You would typically send this data to your backend here
    alert("Form submitted successfully!");
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    // mutate({ data: values, userType: "personal" });
  }

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 ">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  index < currentStep
                    ? "bg-primary border-primary text-primary-foreground"
                    : index === currentStep
                    ? "border-primary text-primary"
                    : "border-muted text-muted-foreground"
                }`}
              >
                {index < currentStep ? (
                  <CheckIcon className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span
                className={`text-xs mt-2 font-medium ${
                  index <= currentStep
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {step.name}
              </span>
            </div>
          ))}
        </div>
        <div className="relative w-full h-1 bg-muted rounded-full">
          <div
            className="absolute top-0 left-0 h-1 bg-primary rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="w-full">
        {currentStep === 0 && (
          <>
            <div className="text-center">
              <h1 className="h1-bold text-darkBlack_light100">
                Welcome to Our store
              </h1>
              <p className="font-medium leading-[160%] text-light500_light100">
                Bringing Your Style Home
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex mt-12 gap-4 max-lg:hidden">
                <SignInForm />
                <SignUpForm />
              </div>

              <div className="lg:hidden">
                <SignTabs />
              </div>
            </div>
          </>
        )}
        <Form {...form}>
          <form
            id="stepForm"
            className="flex flex-col flex-1 space-y-8 z-[1] relative"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {currentStep !== 0 && (
              <div className="text-center">
                <h1 className="h1-bold text-darkBlack_light100 max-md:text-[20px] max-md:mb-2">
                  Your customer data for the order
                </h1>
                <p className="font-medium leading-[160%] text-light500_light100">
                  Bringing Your Style Home
                </p>
              </div>
            )}
            {currentStep === 1 && (
              <>
                <h4 className="font-mont font-semibold text-start mt-8 md:mt-12 uppercase">
                  Delivery address
                </h4>
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field, formState: { errors } }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex items-center flex-1">
                          <div className="relative flex-1">
                            <FloatingInput
                              id="city-signin"
                              {...field}
                              className={`${
                                errors?.city ? "!border-red-100" : ""
                              } rounded-none  text-darkBlack_light100 border-x-0 border-t-0 shadow-none !border-b-1 border-black dark:border-light-100   focus-visible:ring-0 `}
                            />
                            <FloatingLabel htmlFor="city-signin">
                              City
                              <span className="text-lg text-red-100">*</span>
                            </FloatingLabel>
                            {errors?.city && (
                              <span className="absolute  top-1/2 right-2 -translate-y-1/2 text-red-100">
                                <AiOutlineWarning size={20} />
                              </span>
                            )}
                          </div>
                        </div>
                      </FormControl>

                      <FormMessage className="ps-4 font-mont" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="street_name"
                  render={({ field, formState: { errors } }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex items-center flex-1">
                          <div className="relative flex-1">
                            <FloatingInput
                              id="street_name-signin"
                              {...field}
                              className={`${
                                errors?.street_name ? "!border-red-100" : ""
                              } rounded-none  text-darkBlack_light100 border-x-0 border-t-0 shadow-none !border-b-1 border-black dark:border-light-100   focus-visible:ring-0 `}
                            />
                            <FloatingLabel htmlFor="street_name-signin">
                              Street Name
                              <span className="text-lg text-red-100">*</span>
                            </FloatingLabel>
                            {errors?.street_name && (
                              <span className="absolute  top-1/2 right-2 -translate-y-1/2 text-red-100">
                                <AiOutlineWarning size={20} />
                              </span>
                            )}
                          </div>
                        </div>
                      </FormControl>

                      <FormMessage className="ps-4 font-mont" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="building_number"
                  render={({ field, formState: { errors } }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex items-center flex-1">
                          <div className="relative flex-1">
                            <FloatingInput
                              type="number"
                              id="building_number-signin"
                              {...field}
                              className={`${
                                errors?.building_number ? "!border-red-100" : ""
                              } rounded-none no-spinner text-darkBlack_light100 border-x-0 border-t-0 shadow-none !border-b-1 border-black dark:border-light-100   focus-visible:ring-0 `}
                            />
                            <FloatingLabel htmlFor="building_number-signin">
                              Building Number
                              <span className="text-lg text-red-100">*</span>
                            </FloatingLabel>
                            {errors?.building_number && (
                              <span className="absolute  top-1/2 right-2 -translate-y-1/2 text-red-100">
                                <AiOutlineWarning size={20} />
                              </span>
                            )}
                          </div>
                        </div>
                      </FormControl>

                      <FormMessage className="ps-4 font-mont" />
                    </FormItem>
                  )}
                />
              </>
            )}

            {currentStep === 2 && (
              <>
                <h4 className="font-mont font-semibold text-start mt-8 md:mt-12 uppercase">
                  Payment method
                </h4>
                <FormField
                  control={form.control}
                  name="payment_method"
                  render={({ field }) => (
                    <FormItem className="space-y-3 ">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-4"
                        >
                          <FormItem className="border-b pb-4 flex items-center justify-between space-x-3 space-y-0">
                            <div className="flex gap-3">
                              <FormControl>
                                <RadioGroupItem
                                  value="STRIPE"
                                  className="data-[state=checked]:border-primary-100"
                                />
                              </FormControl>
                              <FormLabel className="font-normal font-mont">
                                Card Payment
                              </FormLabel>
                            </div>
                            <div className="flex items-center gap-2">
                              <Image
                                width={40}
                                height={30}
                                alt="paypal payment"
                                src="/assets/icons/visa_logo.svg"
                              />
                              <Image
                                width={35}
                                height={30}
                                alt="paypal payment"
                                src="/assets/icons/Mastercard_logo.svg"
                              />
                            </div>
                          </FormItem>
                          <FormItem className="flex items-center justify-between space-x-3 space-y-0">
                            <div className="flex gap-3">
                              <FormControl>
                                <RadioGroupItem
                                  value="PAYPAL"
                                  className="data-[state=checked]:border-primary-100"
                                />
                              </FormControl>
                              <FormLabel className="font-normal font-mont">
                                Paypal
                              </FormLabel>
                            </div>
                            <div>
                              <Image
                                width={45}
                                height={30}
                                alt="paypal payment"
                                src="/assets/icons/paypal_payment.svg"
                              />
                            </div>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage className="ps-4 font-mont" />
                    </FormItem>
                  )}
                />
              </>
            )}

            {currentStep === 3 && (
              <>
                <h4 className="font-mont font-semibold text-darkBlack_light100 text-start mt-2 md:mt-12 uppercase">
                  Review order
                </h4>
                <p className="font-mont text-sm text-dark-600 !mt-2 dark:text-light-100">
                  Dear customer, please check your information for accuracy.
                </p>
                <div className="flex max-lg:flex-col-reverse gap-10">
                  <div className="flex-1">
                    <h4 className="md:text-xl  text-darkBlack_light100 font-mont font-semibold mb-8 uppercase">
                      your shopping cart ({items.length})
                    </h4>
                    <div className="!background-light650_dark200 rounded-[23px] pe-1 overflow-hidden">
                      <div className=" relative flex flex-col  !pt-4  gap-10 pb-20 max-h-[500px] px-4 overflow-y-auto  ">
                        {items?.length > 0 ? (
                          items?.map((order, idx) => (
                            <OrderCard
                              key={`${order?.item_id}  ${idx}`}
                              order={order}
                              withOutBtns={true}
                              customStyle="min-w-[200px]"
                            />
                          ))
                        ) : (
                          <div className="min-w-[280px] text-center text-xl">
                            Cart is empty
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1  text-darkBlack_light100">
                    <div className="flex max-sm:flex-col sm:items-start   gap-6">
                      <div className="flex-1">
                        <h4 className="md:text-xl font-mont font-semibold mb-8 uppercase">
                          Delivery address
                        </h4>
                        <div className="rounded-[23px] background-light650_dark200">
                          <ul className="flex flex-col gap-1 p-4">
                            <li>
                              {user.name} {user.lastname}
                            </li>
                            <li>{form.getValues("city")}</li>
                            <li>{form.getValues("street_name")}</li>
                            <li>{form.getValues("building_number")}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h4 className="md:text-xl font-mont font-semibold mb-8 uppercase">
                          payment
                        </h4>
                        <div className="rounded-[23px] flex-1 background-light650_dark200">
                          <ul className="flex flex-col gap-3 p-4">
                            <li>
                              {form.getValues("payment_method") === "STRIPE"
                                ? "Card Payment"
                                : "Paypal"}
                            </li>
                            <li>
                              {form.getValues("payment_method") === "STRIPE" ? (
                                <Image
                                  width={60}
                                  height={30}
                                  alt="paypal payment"
                                  src="/assets/icons/Mastercard_logo.svg"
                                />
                              ) : (
                                <Image
                                  width={80}
                                  height={30}
                                  alt="paypal payment"
                                  src="/assets/icons/paypal_payment.svg"
                                />
                              )}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className=" border-t pt-8 mt-8 max-lg:hidden">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-darkBlack_light100">
                          Total
                        </p>
                        <p className="font-semibold font-mont text-darkBlack_light100">
                          € {totalPriceFromApi}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" border-t pt-8 mt-8 lg:hidden">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-darkBlack_light100">
                      Total
                    </p>
                    <p className="font-semibold font-mont text-darkBlack_light100">
                      € {totalPriceFromApi}
                    </p>
                  </div>
                </div>
              </>
            )}
          </form>
        </Form>
        {currentStep > 0 && (
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              <ChevronLeftIcon className="mr-2 h-4 w-4" />
              Previous
            </Button>
            {currentStep < steps.length - 1 ? (
              <Button
                className="bg-primary-100 hover:bg-primary-100/90 text-light-100"
                onClick={handleNext}
              >
                Next
                <ChevronRightIcon className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button className="bg-primary-100 hover:bg-primary-100/90 text-light-100" type="submit" form="stepForm">
                Submit
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
