import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <>
      <div className="p-4 sm:p-4 sm:m-4">
        <div className="flex items-center justify-between mb-4 md:mb-8 lg:mb-12">
          <div className="space-y-1">
            <h2 className="text-2xl text-foreground font-semibold tracking-tight">
              Analytics
            </h2>
            <p className="text-sm text-muted-foreground">
              List of all the blogs
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Skeleton className="flex flex-row items-center justify-start space-y-0 pb-2 min-h-[110px]" />
          <Skeleton className="flex flex-row items-center justify-start space-y-0 pb-2 min-h-[110px]" />
          <Skeleton className="flex flex-row items-center justify-start space-y-0 pb-2 min-h-[110px]" />
          <Skeleton className="flex flex-row items-center justify-start space-y-0 pb-2 min-h-[110px]" />
        </div>
      </div>
    </>
  );
};

export default loading;
