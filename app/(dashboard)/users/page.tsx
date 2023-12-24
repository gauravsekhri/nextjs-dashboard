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
import { RiDeleteBinLine } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const UsersList = () => {
  const usersData: any = [
    {
      fullName: "Gaurav Sekhri",
      userName: "gaurav",
      email: "test@test.com",
      createdAt: "24/12/2023 19:24PM",
      isAdmin: true,
      id: "n13n3vm23",
    },
  ];

  return (
    <>
      <div className="p-4 sm:p-4 sm:m-4">
        <div className="flex items-center justify-between mb-4 md:mb-8 lg:mb-12">
          <div className="space-y-1">
            <h2 className="text-2xl text-foreground font-semibold tracking-tight">
              Users
            </h2>
            <p className="text-sm text-muted-foreground">
              List of registered users
            </p>
          </div>
        </div>

        <div className="mt-5 border-gray-500 bg-gray-50 dark:bg-slate-900 p-5 rounded-lg">
          <div className="flex items-center justify-between mb-10">
            <Search placeholder="Search users..." />
            <Link href="/dashboard/users/add">
              <Button variant="outline">Add user</Button>
            </Link>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Signup Date</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usersData &&
                usersData.map((ele: any, ei: any) => (
                  <TableRow>
                    <TableCell>{ele.fullName}</TableCell>
                    <TableCell>{ele.userName}</TableCell>
                    <TableCell>{ele.email}</TableCell>
                    <TableCell>{ele.createdAt}</TableCell>
                    <TableCell>{ele.isAdmin ? "Admin" : "User"}</TableCell>
                    <TableCell className="text-right min-w-[150px] flex justify-end">
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger>
                            <Link href={`/dashboard/users/${ele.id}`}>
                              <Button type="submit" variant="ghost">
                                <GrView className="text-green-400" />
                              </Button>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>View</TooltipContent>
                        </Tooltip>

                        {/* <form action={deleteUser}> */}
                        <input type="hidden" name="id" value={ele.id} />
                        <Tooltip>
                          <TooltipTrigger>
                            <Button
                              type="submit"
                              variant="ghost"
                              className="ml-2"
                            >
                              <RiDeleteBinLine className="text-rose-400" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Delete</TooltipContent>
                        </Tooltip>

                        {/* </form> */}
                      </TooltipProvider>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableCaption>
              <Pagination totalCount={usersData.count || 0} />
            </TableCaption>
          </Table>
        </div>
      </div>
    </>
  );
};

export default UsersList;