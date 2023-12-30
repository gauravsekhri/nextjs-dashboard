import { fetchAllPublicPosts } from "@/actions/postsActions";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatDate, formatPostDate } from "@/utils/helperFunctions";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const allPosts = await fetchAllPublicPosts();

  return (
    <>
      {/* <div className="absolute top-0 h-[50px] dark:h-[70px] bg-gradient-to-b from-primary/90 to-primary/100 dark:from-primary/40 dark:to-primary/60 filter blur-[70px] dark:blur-[100px] w-[100%]"></div> */}
      <ScrollArea className="h-screen">
        <div className="min-h-screen bg-[#ffd89b] pb-24 bg-[-webkit-linear-gradient(to_top,_#19547b,_#ffd89b)] bg-[linear-gradient(to_top,_#19547b,_#ffd89b)] -- dark:bg-[#ad5389] dark:bg-[-webkit-linear-gradient(to_bottom,_#3c1053,_#ad5389)] dark:bg-[linear-gradient(to_bottom,_#3c1053,_#ad5389)]">
          <div className="sticky top-0 p-4 flex items-center justify-between backdrop-blur-lg z-50">
            <h2 className="text-2xl text-foreground font-semibold tracking-tight">
              Syntax Scrolls
            </h2>
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>

          {/* <section className="bg-gray-900 shadow-xl max-h-[40vh] m-4 rounded-xl">
          <div className="mx-auto max-w-screen-lg">
            <div className="mx-auto max-w-3xl flex flex-col justify-center lg:min-h-[500px] text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Eat - Code - Sleep - Repeat
                <span className="sm:block"> Increase Conversion. </span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
            </div>
          </div>
        </section> */}

          {/* <section className="mb-24">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Unraveling the Language of Tech
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Unravel the intricate scrolls of syntax, understanding the
                language that powers the technology we live and breathe
              </p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                alt="mockup"
              />
            </div>
          </div>
        </section> */}

          <section className="mt-8 lg:mt-0 lg:mb-24">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7 text-center lg:text-left">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                  Unraveling the Language of Tech
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  Unravel the intricate scrolls of syntax, understanding the
                  language that powers the technology we live and breathe
                </p>
              </div>
            </div>
          </section>

          <div className="relative p-4 max-w-screen-xl mx-auto columns-1 gap-4 overflow-hidden transition-all sm:columns-2 lg:columns-3 xl:columns-3">
            {allPosts.map((elem: any, elemI: any) => (
              <Link href={"/post/" + elem?.routeLink}>
                <div
                  className="z-0 mb-4 break-inside-avoid-column cursor-pointer hover:shadow-xl"
                  key={elemI}
                >
                  <div className="bg-secondary hover:bg-gray-200 dark:hover:bg-gray-700 flex h-fit flex-col items-start gap-3 rounded-lg border border-white/10 p-4">
                    <div className="text-center mx-auto bg-black w-full rounded-lg min-h-[200px] flex justify-center items-center overflow-hidden">
                      <Image
                        src={
                          elem?.img ??
                          "https://www.ochch.org/wp-content/themes/mast/images/empty-photo.jpg"
                        }
                        alt="img"
                        width={250}
                        height={50}
                        className="mx-auto h-auto w-[100%] max-w-[100%]"
                      />
                    </div>
                    <p className="text-md font-bold dark:text-zinc-200 mt-3">
                      {elem.title}
                    </p>
                    <div className="mt-3 flex justify-between items-center w-full">
                      <span className="font-bold text-sm italic text-gray-500">
                        {elem?.userFullname}
                      </span>
                      <span className="text-xs text-gray-600 font-semibold">
                        {formatPostDate(elem?.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* <div className="z-0 mb-4 break-inside-avoid-column">
            <div className="bg-secondary flex h-fit flex-col items-start gap-3 rounded-lg border border-white/10 p-4">
              <div className="flex w-full items-start justify-between">
                <div className="flex items-start gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=3149&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="user"
                    className="h-12 w-12 rounded-full object-cover object-top"
                  />
                  <div className="flex flex-col items-start">
                    <h3 className="font-bold">John Doe</h3>
                    <p className="dark:text-zinc-400"></p>
                  </div>
                </div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-600"
                >
                  <path
                    d="M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="text-[14px] dark:text-zinc-200">
                Indiespace truly shines through its outstanding support team.
                They're responsive, knowledgeable, and always willing to do
                whatever it takes to guarantee our success. It's a rarity to
                come across a company so committed to customer satisfaction.
              </p>
            </div>
          </div> */}
          </div>

          {/* <section className="relative max-h-[70vh] bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-1 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Let us find your
                <strong className="block font-extrabold text-rose-700">
                  {" "}
                  Forever Home.{" "}
                </strong>
              </h1>

              <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href="#"
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Get Started
                </a>

                <a
                  href="#"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section> */}

          {/* <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((ele: any, ei: any) => (
              <div
                className="rounded-lg overflow-hidden shadow-lg flex flex-col"
                key={"l" + ei}
              >
                <a href="#"></a>
                <div className="relative">
                  <a href="#">
                    <img
                      className="w-full"
                      src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                      alt="Sunset in the mountains"
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                </div>
                <div className="px-6 py-4 mb-auto bg-gray-300">
                  <a
                    href="#"
                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
                  >
                    Simplest Salad Recipe ever
                  </a>
                  <div className="pt-2 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                    6 mins ago
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        </div>
        <Footer />
      </ScrollArea>
    </>
  );
}
