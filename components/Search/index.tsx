"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { MdSearch } from "react-icons/md";
import { useDebounce, useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }: any) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((event: any) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (event.target.value) {
      params.set("search", event.target.value);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <>
      <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-lg dark:bg-gray-800">
        <MdSearch />
        <input
          type="text"
          placeholder={placeholder}
          className="bg-transparent border-none text-slate-400 outline-0"
          onChange={(e: any) => handleSearch(e)}
        />
      </div>
    </>
  );
};

export default Search;
