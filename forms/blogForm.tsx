"use client";

import BlogEditor from "@/components/BlogsModule/BlogEditor";
import { MdOutlineCelebration } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiDraftLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import React from "react";

const BlogForm = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-12">
        <span className="font-bold text-lg">Show you creativity</span>
        <div className="flex items-center">
          <Button variant="success">
            <MdOutlineCelebration className="mr-2 h-4 w-4" />
            Publish
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="ml-2 px-2" variant="ghost">
                <BsThreeDotsVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center cursor-pointer">
                <RiDraftLine />
                <span className="ml-2">Save as draft</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center cursor-pointer">
                <MdOutlineWatchLater />
                <span className="ml-2">Schedule Publish</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <BlogEditor
        initialText="<div>Hello World! 🌎️</div><ul><li><div>one</div></li><li><div>two</div></li></ul>"
        onChange={(val: any) => console.log(val)}
      />
    </>
  );
};

export default BlogForm;
