"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({ totalCount }: { totalCount: number }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const page = searchParams.get("page") || "1";
  const itemsLimit = 1;

  const handlePageChange = (type: "prev" | "next") => {
    if (type == "prev") {
      params.set("page", String(parseInt(page) - 1));
    } else {
      params.set("page", String(parseInt(page) + 1));
    }
    replace(`${pathname}?${params}`);
  };

  const hasPrev = itemsLimit * (parseInt(page) - 1) > 0;
  const hasNext = itemsLimit * (parseInt(page) - 1) + itemsLimit < totalCount;

  return (
    <>
      <div className="flex justify-between items-center border-t-2 border-gray-200 dark:border-gray-800 mt-9 pt-5">
        <Button
          variant="ghost"
          disabled={!hasPrev}
          onClick={() => handlePageChange("prev")}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          disabled={!hasNext}
          onClick={() => handlePageChange("next")}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Pagination;
