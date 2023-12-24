import React from "react";

const BlogsList = () => {
  return (
    <>
      <div className="p-4 sm:p-4 sm:m-4">
        <div className="flex items-center justify-between mb-4 md:mb-8 lg:mb-12">
          <div className="space-y-1">
            <h2 className="text-2xl text-foreground font-semibold tracking-tight">
              Blogs
            </h2>
            <p className="text-sm text-muted-foreground">
              List of all the blogs
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsList;
