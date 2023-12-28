"use client";

import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuUserX2 } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "sonner";
import ConfirmDialog from "@/components/ConfirmDialog";

const UserActionsDropDown = ({ email }: { email: string }) => {
  const [showDialog, setShowDialog] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center gap-4">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <LuUserX2
                onClick={() => toast.info("This feature is under development.")}
              />
            </TooltipTrigger>
            <TooltipContent>Disable user</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <RiDeleteBin6Line
                className="text-red-400"
                onClick={() => setShowDialog(true)}
              />
            </TooltipTrigger>
            <TooltipContent>Delete user</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className="ml-2 px-2" variant="ghost">
            <BsThreeDotsVertical className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center cursor-pointer">
            <LuUserX2 />
            <span className="ml-3">Disable User</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center cursor-pointer">
            <RiDeleteBin6Line />
            <span className="ml-3">Delete User</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}

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
            <Button type="submit" variant="ghost" className="ml-2">
              <RiDeleteBinLine className="text-rose-400" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Delete</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      </form> */}

      <ConfirmDialog
        key={email}
        isOpen={showDialog}
        text={"Are you sure you want to delete this user?"}
        onConfirm={() => toast.info("This feature is under development.")}
        onClose={() => setShowDialog(false)}
      />
    </>
  );
};

export default UserActionsDropDown;
