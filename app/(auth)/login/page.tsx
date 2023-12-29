import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { UserAuthForm } from "@/forms/loginForm";

export const metadata: Metadata = {
  title: "Login | Next Admin",
  description: "Login to next admin dashboard.",
};

export default function AuthenticationPage() {
  const skillsUsed = [
    "NextJs 14",
    "Typescript",
    "NodeJs",
    "MongodB",
    "Shadcn UI",
    "Recharts",
    "Tailwind CSS",
    "Theming",
    "Analytics",
  ];

  return (
    <>
      {/* <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/examples/authentication"
          className={cn("absolute right-4 top-4 md:right-8 md:top-8")}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-[#161b22]" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div> */}
      <div className="min-h-screen grid lg:pt-0 pt-24 pb-14 md:pt-16 lg:grid-flow-col grid-flow-row [background-size:10px_10px] bg-[repeating-linear-gradient(45deg,_#dedede_0,_#dedede_1px,_#ffffff_0,_#ffffff_50%)] dark:bg-[repeating-linear-gradient(45deg,_#272a2f_0,_#272a2f_1px,_#161b22_0,_#161b22_50%)]">
        <div className="lg:col-span-7 flex flex-col justify-between text-white">
          <div></div>
          <div className="text-center">
            <p className="text-4xl mb-5 font-bold sm:text-4xl xl:text-6xl/none bg-clip-text text-transparent dark:bg-gradient-to-r bg-gradient-to-tr dark:from-white from-black to-neutral-400 dark:to-neutral-800 capitalize">
              NextJs Admin Dashboard
            </p>
            <p className="hidden lg:block lg:max-w-[600px] max-w-[90%] leading-7 mx-auto text-center text-xs lg:text-md bg-clip-text text-transparent dark:bg-gradient-to-br bg-gradient-to-tr dark:from-white from-black to-neutral-900 dark:to-neutral-700">
              A dashboard build by me to showcase my NextJs development
              capabilities. <br /> In future I will add more complex features to
              this dashboard.
            </p>
            <div className="lg:max-w-[500px] max-w-[95%] w-fit mx-auto mt-5 lg:mt-10 flex flex-wrap justify-center py-3 lg:py-5 rounded-xl">
              {skillsUsed.map((ele: any, ei: any) => (
                <div
                  key={ei}
                  className="lg:p-2 p-1 font-bold text-gray-900 border-gray-400 bg-white dark:bg-transparent dark:border-gray-600 border-2 rounded-sm text-xs lg:text-sm dark:text-gray-400 m-2"
                >
                  {ele}
                </div>
              ))}
            </div>
            <div className=" lg:mt-8 mt-4 mb-6 bg-gray-900 text-sm lg:text-lg p-4 w-fit mx-auto rounded-lg">
              <span className="text-gray-300 dark:text-gray-400">
                Developed by{" "}
              </span>

              <span className="animate-text font-bold bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Gaurav Sekhri
              </span>
            </div>
          </div>
          <div></div>
        </div>
        <div className="lg:col-span-5 flex flex-col px-10 lg:p-0 justify-start lg:justify-center lg:items-start items-center">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <UserAuthForm />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 rounded-lg p-3 bg-transparent flex items-center">
        <span className="mr-4 animate-bounce dark:text-gray-400">
          Try Theme
        </span>
        <ThemeToggle />
      </div>
    </>
  );
}
