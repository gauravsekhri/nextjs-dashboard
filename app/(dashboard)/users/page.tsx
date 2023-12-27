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
import { fetchUsers } from "@/actions/userActions";
import { formatDate } from "@/utils/helperFunctions";
import { Badge } from "@/components/ui/badge";

const UsersList = async ({ searchParams }: any) => {
  // const usersData: any = [
  //   {
  //     fullName: "Gaurav Sekhri",
  //     userName: "gaurav",
  //     email: "test@test.com",
  //     createdAt: "24/12/2023 19:24PM",
  //     isAdmin: true,
  //     id: "n13n3vm23",
  //   },
  // ];

  const search = searchParams?.search || "";
  const page = searchParams?.page || "1";

  const usersData = await fetchUsers(search, page);

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
          <div className="flex items-center justify-start mb-10">
            <Search placeholder="Search users..." />
            {/* <Link href="/dashboard/users/add">
              <Button variant="outline">Add user</Button>
            </Link> */}
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Signup Date</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usersData &&
                usersData?.users?.map((ele: any, ei: any) => (
                  <TableRow key={ei}>
                    <TableCell>{ele.fullName}</TableCell>
                    <TableCell>{ele.email}</TableCell>
                    <TableCell>{formatDate(ele.createdAt)}</TableCell>
                    <TableCell>
                      <Badge variant="success">
                        {ele.isAdmin ? "Admin" : "User"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="warn">
                        {ele?.isVerified ? "Verified" : "Not Verified"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right min-w-[150px] flex justify-end">
                      {/* <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger>
                            <Link href={`/dashboard/users/${ele?.id}`}>
                              <GrView className="text-green-400" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>View</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <form action={deleteUser}>
                      <input type="hidden" name="id" value={ele?.id} />
                      <TooltipProvider delayDuration={0}>
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

                      </TooltipProvider>
                        </form> */}
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
