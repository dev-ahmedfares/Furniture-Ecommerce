import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "./forms/SignInForm";
import SignUpForm from "./forms/SignUpForm";

function SignTabs() {
  return (
    <Tabs defaultValue="signin" className="mt-12">
      <TabsList className="w-full background-light200_dark200 text-darkBlack_light-100 min-h-[50px]">
        <TabsTrigger value="signin" className="flex-1 !font-bold leading-[160%] h-full data-[state=active]:text-primary-100 data-[state=active]:dark:text-light-100 data-[state=active]:bg-primary-100/15 data-[state=active]:dark:bg-black">Sign in</TabsTrigger>
        <TabsTrigger value="signup" className="flex-1 !font-bold leading-[160%] h-full data-[state=active]:text-primary-100 data-[state=active]:dark:text-light-100 data-[state=active]:bg-primary-100/15 data-[state=active]:dark:bg-black">Sign up</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <SignInForm />
      </TabsContent>
      <TabsContent value="signup">
        <SignUpForm />
      </TabsContent>
    </Tabs>
  );
}

export default SignTabs;
