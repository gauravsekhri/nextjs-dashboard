import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React from "react";

const BlogsList = () => {
  const postsList = {
    count: 1,
    data: [
      {
        title: "Universal time management in MERN app",
        category: "Tech",
        isPublished: true,
        createdBy: "gaurav@sekhri.com",
        createdAt: "26/12/2023 12:30PM",
      },
    ],
  };

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
          <Link href="/blogs/new">
            <Button variant="link">Create Blog</Button>
          </Link>
        </div>

        <div className="mt-5 border-gray-500 bg-gray-50 dark:bg-slate-900 p-5 rounded-lg">
          <div className="flex items-center justify-start mb-10">
            <Search placeholder="Search posts..." />
            {/* <Link href="/dashboard/users/add">
              <Button variant="outline">Add user</Button>
            </Link> */}
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created By</TableHead>
                <TableHead>Created On</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {postsList &&
                postsList.data.map((ele: any, ei: any) => (
                  <TableRow key={ei}>
                    <TableCell>{ele.title}</TableCell>
                    <TableCell>{ele.category}</TableCell>
                    <TableCell>
                      {ele.isPublished ? "Published" : "Draft"}
                    </TableCell>
                    <TableCell>{ele.createdBy}</TableCell>
                    <TableCell>{ele.createdAt}</TableCell>
                    <TableCell className="text-right min-w-[150px] flex justify-end"></TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableCaption>
              <Pagination totalCount={postsList.count || 0} />
            </TableCaption>
          </Table>
        </div>
      </div>
    </>
  );
};

export default BlogsList;
