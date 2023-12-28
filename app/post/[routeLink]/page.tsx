import { postByRouteLink } from "@/actions/postsActions";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { formatDate } from "@/utils/helperFunctions";
import { redirect } from "next/navigation";
import React from "react";

const PublicPostScreen = async ({
  params,
}: {
  params: { routeLink: string };
}) => {
  const postData: any = await postByRouteLink(params.routeLink);

  if (!postData) {
    redirect("/not found");
  }

  return (
    <>
      <div className="p-4 flex items-center justify-between ">
        <h2 className="text-2xl text-foreground font-semibold tracking-tight">
          Syntax Scrolls
        </h2>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-800 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl min-h-screen">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-gray-500">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      {postData?.createdBy}
                    </a>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        {formatDate(postData?.createdAt)}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="my-12 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {postData?.title}
              </h1>
            </header>
            <div
              className="dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: postData?.content }}
            ></div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PublicPostScreen;
