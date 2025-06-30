import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { ForgottenSchema } from "@/lib/schema";

interface FormInput {
  control: Control<z.infer<typeof ForgottenSchema>>;
  name: FieldPath<z.infer<typeof ForgottenSchema>>;
  label: string;
  placeholder: string;
  type: string;
}

export default function FormForgottenField({
  control,
  name,
  label,
  type,
  placeholder,
}: FormInput) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white text-sm">{label}</FormLabel>
          <FormControl>
            <Input className="text-primary-text border-zinc-500 text-xs placeholder:text-xs" placeholder={placeholder} type={type} {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
