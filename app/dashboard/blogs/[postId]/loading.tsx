import React from "react";

const loading = () => {
  return (
    <>
      <div className="p-4 sm:p-4 sm:m-4">
        <div className="flex items-center justify-between mb-4 md:mb-8 lg:mb-12">
          <div className="space-y-1">
            <h2 className="text-2xl text-foreground font-semibold tracking-tight">
              Edit Blog
            </h2>
            <p className="text-sm text-muted-foreground">Edit your blog</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">Loading...</div>
      </div>
    </>
  );
};

export default loading;
