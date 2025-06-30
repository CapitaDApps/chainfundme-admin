"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SignUpScema } from "@/lib/schema";
import SignUpFormField from "@/components/auth/SignupFormField";
import { useRouter } from "next/navigation";

export default function ProfileForm() {
  const form = useForm<z.infer<typeof SignUpScema>>({
    resolver: zodResolver(SignUpScema),
 defaultValues:{
     name: "John Doe",
    email: "johndoe@exaple.com",
    password: "123456789",
    confirmPassword:'123456789'
 }

  });
  const router = useRouter()
  function onSubmit(values: z.infer<typeof SignUpScema>) {
    console.log(values);
        router.push('/auth/otp')
  }
  return (
    <div className="space-y-6 w-full">
      <h2 className="text-white text-xl lg:text-2xl">Admin Sign up</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
          <div className="space-y-4">
            <SignUpFormField
              control={form.control}
              label="Name"
              name="name"
              type="text"
              placeholder="e.g John Doe"
            />
            <SignUpFormField
              control={form.control}
              label="Email"
              name="email"
              type="email"
              placeholder="e.g johndoe@exaple.com"
            />
            <SignUpFormField
              control={form.control}
              label="Password"
              name="password"
              type="Password"
              placeholder="e.g 12345678"
            />
            <SignUpFormField
              control={form.control}
              label="Confirm Password"
              name="confirmPassword"
              type="Password"
              placeholder="e.g 12345678"
            />
          </div>

          <div className="flex text-sm flex-col gap-2 w-full">
            <Button
              className="bg-primary-text hover:bg-primary-text cursor-pointer text-primary-bg "
              type="submit"
            >
              Send confirmation email
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
