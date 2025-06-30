"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormFieldInput from "@/components/auth/FormFieldInput";
import { LoginScema } from "@/lib/schema";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfileForm() {
  const form = useForm<z.infer<typeof LoginScema>>({
    resolver: zodResolver(LoginScema),
    defaultValues:{
      name:'John Doe',
      email:'johndoe@exaple.com',
      password:'123456789'
    }
  });
  const router = useRouter()

  function onSubmit(values: z.infer<typeof LoginScema>) {
    console.log(values);
    router.push('/admin')
  }
  return (
    <div className="space-y-6 w-full">
      <h2 className="text-white text-xl lg:text-2xl">Admin login</h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 "
        >
          <div className="space-y-6">
            <FormFieldInput
              control={form.control}
              label="Name"
              name="name"
              type="text"
              placeholder="e.g John Doe"
            />
            <FormFieldInput
              control={form.control}
              label="Email"
              name="email"
              type="email"
              placeholder="e.g johndoe@exaple.com"
            />
            <div className="space-y-2">
              <FormFieldInput
                control={form.control}
                label="Password"
                name="password"
                type="Password"
                placeholder="e.g 12345678"
              />
              <div className="flex justify-between items-center">
                <p />
                <Link
                  href="/auth/forgotten-password"
                  className="text-xs cursor-pointer font-normal text-primary-text"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>

          <div className="flex text-sm items-center gap-2 w-full">
            <Button
              className="bg-primary-text hover:bg-primary-text cursor-pointer w-[50%] text-primary-bg "
              type="submit"
            >
              Login
            </Button>
            <Button
              className="bg-transparent border border-primary-text text-primary-text cursor-pointer w-[50%]"
              type="reset"
            >
              <Link className="w-full" href='/auth/sign-up'>Sign Up</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
