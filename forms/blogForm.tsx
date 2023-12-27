"use client";

import BlogEditor from "@/components/BlogsModule/BlogEditor";
import { MdOutlineCelebration } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiDraftLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ConfirmDialog from "@/components/BlogsModule/ConfirmDialog";
import { toast } from "sonner";
import { newPost } from "@/actions/postsActions";
import { useRouter } from "next/navigation";
import { FiEdit2 } from "react-icons/fi";
import { ImageDialog } from "@/utils/interfaces";
import TextInputDialog from "@/components/BlogsModule/TextInputDialog";

const BlogForm = () => {
  const router = useRouter();

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [blogTitle, setBlogTitle] = useState<string>("Untitled Post");
  const [blogContent, setBlogContent] = useState<string>("");
  const [openPublishRequest, setOpenPublishRequest] = useState<boolean>(false);
  const [showTextDialog, setShowTextDialog] = useState<boolean>(false);
  // const [textDialog, setTextDialog] = useState<ImageDialog>({
  //   isOpen: false,
  //   headTitle: "",
  //   description: "",
  //   defaultText: "",
  //   onClose: () => {},
  // });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const showPublishRequest = () => {
    setOpenPublishRequest(true);
  };

  const handlePublish = async () => {
    toast.loading("Publishing");
    try {
      setOpenPublishRequest(false);
      const res = await newPost({
        title: blogTitle,
        content: blogContent,
        createdBy: "gaurav@sekhri.com",
      });

      if (res) {
        toast.success("Published");
        router.push("/blogs");
      } else {
        toast.error("Unable to publish");
      }
    } catch {
      toast.error("Unable to publish");
    }
  };

  // const handleTitleEdit = () => {
  //       setTextDialog({
  //     headTitle: "Image Link",
  //     description: "Enter the url of image you want to insert.",
  //     isOpen: showImgDialog ?? false,
  //     onClose: (val: any) => {
  //       if (val && val.length > 0) {
  //         editor?.chain().focus().setImage({ src: val }).run();
  //       }
  //       setShowImgDialog(false);
  //     },
  //   });
  // }

  return (
    <>
      {isMounted ? (
        <>
          <div className="flex justify-between items-center mb-12">
            <span className="font-bold text-lg flex items-center">
              <span>{blogTitle}</span>{" "}
              <FiEdit2
                className="ml-5 cursor-pointer hover:text-gray-700"
                onClick={() => setShowTextDialog(true)}
              />
            </span>
            <div className="flex items-center">
              <Button variant="success" onClick={() => showPublishRequest()}>
                <MdOutlineCelebration className="mr-2 h-4 w-4" />
                Publish
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button className="ml-2 px-2" variant="ghost">
                    <BsThreeDotsVertical className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Options</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center cursor-pointer">
                    <RiDraftLine />
                    <span className="ml-2">Save as draft</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center cursor-pointer">
                    <MdOutlineWatchLater />
                    <span className="ml-2">Schedule Publish</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <BlogEditor
            initialText="<p>Write something...</p>"
            onChange={(val: any) => setBlogContent(val)}
          />
          <ConfirmDialog
            isOpen={openPublishRequest}
            text={"Are you sure you want to publish your post?"}
            onConfirm={() => handlePublish()}
            onClose={() => setOpenPublishRequest(false)}
          />
          <TextInputDialog
            headTitle="Blog Title"
            description="Give an attracting title to your post."
            isOpen={showTextDialog ?? false}
            defaultText={blogTitle}
            onClose={() => setShowTextDialog(false)}
            onSubmit={(val: any) => {
              if (val && val.length > 0) {
                setBlogTitle(val);
              }
              setShowTextDialog(false);
            }}
          />
        </>
      ) : (
        <>
          <div className="grid grid-cols-1">
            <Skeleton className="pb-2 min-h-[110px]" />
          </div>
        </>
      )}
    </>
  );
};

export default BlogForm;
