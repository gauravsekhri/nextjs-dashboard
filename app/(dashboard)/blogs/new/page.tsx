import type { Metadata } from "next";
import BlogForm from "@/forms/blogForm";
import React from "react";
import { getServerSession } from "next-auth";
import authOptions from "@/utils/authOptions";

const NewBlogPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="p-4 sm:p-4 sm:m-4">
        <div className="flex items-center justify-between mb-4 md:mb-8 lg:mb-12">
          <div className="space-y-1">
            <h2 className="text-2xl text-foreground font-semibold tracking-tight">
              Create Blog
            </h2>
            <p className="text-sm text-muted-foreground">Create a new blog</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <BlogForm session={session} />
        </div>
      </div>
    </>
  );
};

export default NewBlogPage;
