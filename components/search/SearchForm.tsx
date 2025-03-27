"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SearchIcon from "./SearchIcon";

const formSchema = z.object({
  search: z.string(),
});

function SearchForm({label}:{label?:string}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  
  function onSubmit(values: z.infer<typeof formSchema>) {
  
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center relative">
                  <Input
                    className="background-dark400_light850 min-h-[50px] rounded-full border-primary-100 border text-darkBlack_light100 focus-visible:ring-0 px-6 font-mont"
                    placeholder={label}
                    {...field}
                  />
                  <Button
                    className="absolute end-0 rounded-e-full h-[48px] min-w-[100px]"
                    variant={"ghost"}
                    type="submit"
                  >
                    <SearchIcon isPopup={true}/>
                  </Button>
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default SearchForm;
