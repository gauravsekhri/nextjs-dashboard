import React from "react";

const NewBlogPage = () => {
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
      </div>
    </>
  );
};

export default NewBlogPage;
