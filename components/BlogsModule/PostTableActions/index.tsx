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
import { FiEdit2 } from "react-icons/fi";
import ConfirmDialog from "@/components/ConfirmDialog";
import { deletePost } from "@/actions/postsActions";
import { toast } from "sonner";

const PostTableActions = ({ postId }: { postId: string }) => {
  const [showDialog, setShowDialog] = useState<boolean>(false);

  // const handleDelete = async () => {
  //   return new Promise(async (res:any, rej:any) => {
  //     try {
  //       toast.loading("Deleting post...");
  //       const res = await deletePost(postId);
  //       if (res) {
  //         toast.success("Post deleted successfully");
  //       }
  //     } catch {
  //       toast.error("Unable to delete post");
  //     }
  //   })

  // };

  const handleDeleteToast = () => {
    toast.promise(deletePost(postId), {
      loading: "Deleting post...",
      success: () => {
        setShowDialog(false);
        return "Post deleted successfully";
      },
      error: "Unable to delete post",
    });
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <GrView className="text-green-400" />
            </TooltipTrigger>
            <TooltipContent>View</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Link href={"/blogs/" + postId}>
                <FiEdit2 />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Edit</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <RiDeleteBin6Line
                className="text-red-400"
                onClick={() => setShowDialog(true)}
              />
            </TooltipTrigger>
            <TooltipContent>Delete</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <ConfirmDialog
        key={postId}
        isOpen={showDialog}
        text={"Are you sure you want to delete this post?"}
        onConfirm={() => handleDeleteToast()}
        onClose={() => setShowDialog(false)}
      />
    </>
  );
};

export default PostTableActions;
