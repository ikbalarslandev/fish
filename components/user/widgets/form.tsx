"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { RecordSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Checkbox } from "@/components/ui/checkbox";
import { record } from "@/actions/record";

export const RecordForm = () => {
  const searchParams = useSearchParams();

  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof RecordSchema>>({
    resolver: zodResolver(RecordSchema),
    defaultValues: {
      temprature: 1,
      ph: 1,
      food: 1,
      antibiotics: 1,
      deadPieces: 1,
      webCheck: false,
    },
  });

  const localInfo = window.localStorage.getItem("boatandpool");
  const info = localInfo && JSON.parse(localInfo);
  const boat = info.choosenb;
  const pool = info.choosenp;

  const onSubmit = (values: z.infer<typeof RecordSchema>) => {
    setError("");
    setSuccess("");

    const newValues = {
      ...values,
      boatId: boat,
      poolId: pool,
    };

    record(newValues).catch(() => setError("Something went wrong"));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" mt-5 p-2 py-4 border shadow rounded"
      >
        <div className="space-y-4">
          <>
            <FormField
              control={form.control}
              name="temprature"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tempature</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="4 (Celsius)"
                      type="number"
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (!isNaN(value)) {
                          field.onChange(value);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ph"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PH</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="4 (Celsius)"
                      type="number"
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (!isNaN(value)) {
                          field.onChange(value);
                        }
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="food"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Food</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="4 (Celsius)"
                      type="number"
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (!isNaN(value)) {
                          field.onChange(value);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="antibiotics"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Antibiyotics</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="4 (Celsius)"
                      type="number"
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (!isNaN(value)) {
                          field.onChange(value);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deadPieces"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dead Pieces</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="4 (Celsius)"
                      type="number"
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (!isNaN(value)) {
                          field.onChange(value);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="webCheck"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mr-5">Web Check</FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        </div>
        <FormError message={error || urlError} />
        <FormSuccess message={success} />
        <Button type="submit" className="w-full mt-4">
          Gonder
        </Button>
      </form>
    </Form>
  );
};
