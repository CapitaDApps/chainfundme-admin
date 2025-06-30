"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ForgottenSchema } from "@/lib/schema";
import FormForgottenField from "@/components/auth/FormForgottenField";
import { useRouter } from "next/navigation";

export default function ProfileForm() {
  const form = useForm<z.infer<typeof ForgottenSchema>>({
    resolver: zodResolver(ForgottenSchema),
     defaultValues:{
     name: "John Doe",
    email: "johndoe@exaple.com",
 }
  });
  const router = useRouter()
  function onSubmit(values: z.infer<typeof ForgottenSchema>) {
    console.log(values);
        router.push('/auth/login')
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
            <FormForgottenField
              control={form.control}
              label="Name"
              name="name"
              type="text"
              placeholder="e.g John Doe"
            />
            <FormForgottenField
              control={form.control}
              label="Email"
              name="email"
              type="email"
              placeholder="e.g johndoe@exaple.com"
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
