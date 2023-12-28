import type { Metadata } from "next";
import BlogForm from "@/forms/blogForm";
import React from "react";
import { getServerSession } from "next-auth";
import authOptions from "@/utils/authOptions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

        <div className="max-w-4xl mx-auto">
          {/* <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-14">
              <TabsTrigger value="account">Post Editor</TabsTrigger>
              <TabsTrigger value="password">SEO Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <BlogForm session={session} />
            </TabsContent>
            <TabsContent value="password">
              Change your seo settings here
            </TabsContent>
          </Tabs> */}
          <BlogForm session={session} />
        </div>
      </div>
    </>
  );
};

export default NewBlogPage;
