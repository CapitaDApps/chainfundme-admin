"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { OTPSchema } from "@/lib/schema";
import OtpFormInput from "@/components/auth/OtpFormInput";
import { useRouter } from "next/navigation";

export default function ProfileForm() {
  const form = useForm<z.infer<typeof OTPSchema>>({
    resolver: zodResolver(OTPSchema),
     defaultValues:{
     otp: "123456788",

 }
  });
  const router = useRouter()
  function onSubmit(values: z.infer<typeof OTPSchema>) {
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
            <OtpFormInput
              control={form.control}
              label="OTP"
              name="otp"
              type="text"
              placeholder="e.g 342324"
            />
          </div>

          <div className="flex text-sm flex-col gap-2 w-full">
            <Button
              className="bg-primary-text hover:bg-primary-text cursor-pointer text-primary-bg "
              type="submit"
            >
              Submit
            </Button>
        
          </div>
        </form>
      </Form>
    </div>
  );
}
