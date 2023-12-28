import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

export default async function Features() {
  return (
    <>
      <div className="absolute top-0 h-[50px] dark:h-[70px] bg-gradient-to-b from-primary/90 to-primary/100 dark:from-primary/40 dark:to-primary/60 filter blur-[70px] dark:blur-[100px] w-[100%]"></div>
      <div className="p-4 sm:p-4 sm:m-4">
        <div className="flex items-center justify-between mb-4 md:mb-8 lg:mb-12">
          <h2 className="text-2xl text-foreground font-semibold tracking-tight">
            Dashboard
          </h2>
          <div className="flex items-center">
            <ThemeToggle />
            <Button className="ml-4">Login</Button>
          </div>
        </div>
      </div>

      <section className="py-3">
        <div className="container px-4 mx-auto">
          <div className="relative pt-12 lg:py-18 px-8 md:px-18 rounded-2xl overflow-hidden">
            <img
              className="absolute top-0 left-0 h-full w-full object-cover"
              src="https://shuffle.dev/trizzle-assets/images/banner-background.png"
              alt=""
              data-config-id="auto-img-1-1"
            />
            <div className="relative max-w-sm mx-auto lg:mx-0 mb-16 lg:mb-0">
              <h3
                className="text-3xl font-bold text-white mb-3"
                data-config-id="auto-txt-1-1"
              >
                Ideal banner asset for your dashboard project
              </h3>
              <p
                className="font-medium text-blue-200 mb-6"
                data-config-id="auto-txt-2-1"
              >
                Go global with our UI Resources and solutions
              </p>
              <a
                className="inline-block w-full sm:w-auto px-6 md:px-18 py-3 leading-6 text-center font-semibold text-blue-50 bg-gray-500 hover:bg-gray-600 transition duration-200 rounded-lg"
                href="#"
                data-config-id="auto-txt-3-1"
              >
                Get Started
              </a>
            </div>
            <img
              className="hidden lg:block absolute bottom-0 right-0 lg:max-w-lg xl:max-w-2xl xl:mr-18"
              src="https://shuffle.dev/trizzle-assets/images/banner-placeholder-dashboard.png"
              alt=""
              data-config-id="auto-img-2-1"
            />
            <img
              className="relative lg:hidden block mx-auto"
              src="https://shuffle.dev/trizzle-assets/images/banner-placeholder-dashboard.png"
              alt=""
              data-config-id="auto-img-3-1"
            />
          </div>
        </div>
      </section>

      {/* <div className="py-8 text-center">This is NOT a clone app</div> */}

      <div
        className="p-4 mb-4 max-w-4xl mx-auto text-center text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span className="font-medium">This is NOT a clone app!</span>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full px-4 md:px-14 xl:px-24 min-h-[50vh]">
        <div className="flex flex-col items-center lg:items-start gap-6 lg:text-left text-center">
          <h1 className="sm:text-3xl font-semibold capitalize text-4xl md:text-6xl">
            A Powerful dashboard to <br className="md:block hidden" /> manage
            blogs
          </h1>
          <p className="text-[15px] leading-normal font-light w-[95%] md:w-[100%] opacity-80 md:text-lg">
            From creating to publishing, everything under one roof. Built for{" "}
            <br className="md:block hidden" />
            developers and designers.
          </p>
        </div>
        <div className="w-[100%] md:w-[80%] lg:w-[50%] flex gap-4 items-center relative lg:flex-row flex-col">
          two
        </div>
      </div>
      <div className="lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto flex flex-col items-center gap-20 md:gap-36">
        <div className="flex items-center justify-center gap-4 md:gap-32 flex-col m-auto w-full">
          <div className="flex items-start gap-4 w-full justify-center lg:flex-row flex-col">
            <div className="flex flex-col items-start gap-10 flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold capitalize">
                Powerful Analytics at Your Fingertips
              </h1>
              <p className="md:text-md font-light w-[95%] md:w-[100%] opacity-80 text-[15px]">
                Dive deep into the performance of your blog with comprehensive
                analytics, empowering you to make data-driven decisions for
                unprecedented growth.
              </p>
            </div>
            <div className="flex-1 w-full flex items-end justify-end">
              Image
            </div>
          </div>

          <div className="flex items-start gap-4 w-full justify-center lg:flex-row-reverse flex-col">
            <div className="flex flex-col items-start gap-10 flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold capitalize">
                Effortless Organization
              </h1>
              <p className="md:text-md font-light w-[95%] md:w-[100%] opacity-80 text-[15px]">
                Streamline your content creation process with our intuitive
                dashboard, making it easy to manage and organize your blog posts
                seamlessly.
              </p>
            </div>
            <div className="flex-1 w-full flex items-start justify-start">
              Image
            </div>
          </div>

          <div className="sm:flex sm:items-center sm:justify-between w-full py-8 text-gray-500 dark:text-gray-400">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024
            </span>
            <div className="flex mt-4 sm:justify-center items-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <span className="text-sm ml-5">Developed by Gaurav Sekhri</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
