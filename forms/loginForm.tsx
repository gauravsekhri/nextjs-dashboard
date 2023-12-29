"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    // console.log({ response });

    if (!response?.error && response?.ok) {
      // router.refresh();
      router.push("/");
      console.log("loginn");
    } else {
      toast.error("invalid credentials");
      setIsLoading(false);
    }

    // setIsLoading(false);

    // if (!response?.error) {
    //   router.push("/");
    //   router.refresh();
    // }
  };

  return (
    <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 lg:text-sm text-xs font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <Input
          type="email"
          name="email"
          id="email"
          className="focus:border-none"
          // className="bg-gray-50 border border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="name@company.com"
          // defaultValue="gaurav@sekhri.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 lg:text-sm text-xs font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          // defaultValue="thisisatestvalue"
          // className="bg-gray-50 border border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>
      <div className="flex items-center justify-end">
        <a
          href="#"
          className="text-xs lg:text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </a>
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Please wait..." : "Sign in"}
      </Button>
      <p className="text-xs lg:text-sm font-light text-center text-gray-500 dark:text-gray-400">
        Don't have an account?{" "}
        <a
          href="#"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign up
        </a>
      </p>
    </form>
  );
}
