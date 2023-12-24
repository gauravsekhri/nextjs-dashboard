import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 dark:bg-black">
        <Skeleton className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"></Skeleton>
        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 mb-1 flex h-14 shrink-0 items-center gap-x-4 px-4 sm:gap-x-6 sm:px-6 lg:px-8 lg:hidden justify-between">
            <Skeleton className="p-4 rounded-lg" />
            <Skeleton className="p-4 rounded-lg" />
          </div>
        </div>
        <Skeleton className="lg:m-2 grow w-full rounded-xl ring-1"></Skeleton>
      </div>
    </>
  );
};

export default loading;
