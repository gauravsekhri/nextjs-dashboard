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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RiDraftLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ConfirmDialog from "@/components/ConfirmDialog";
import { toast } from "sonner";
import { newPost, updatePost } from "@/actions/postsActions";
import { useRouter } from "next/navigation";
import { FiEdit2 } from "react-icons/fi";
import { ImageDialog } from "@/utils/interfaces";
import TextInputDialog from "@/components/BlogsModule/TextInputDialog";

const BlogForm = ({ session, postData }: { session: any; postData?: any }) => {
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
    if (postData) {
      setBlogTitle(postData?.title);
      setBlogContent(postData?.content);
    }
  }, []);

  // useEffect(() => {
  //   if (postData) {
  //     setBlogTitle(postData?.title);
  //     setBlogContent(postData?.content);
  //   }
  // }, [postData]);

  const showPublishRequest = () => {
    setOpenPublishRequest(true);
  };

  const handlePublish = async (isPublished: boolean) => {
    toast.promise(
      newPost({
        title: blogTitle,
        content: blogContent,
        createdBy: session?.user?.email ?? "",
        isPublished: isPublished,
      }),
      {
        loading: isPublished ? "Publishing..." : "Saving draft...",
        success: () => {
          router.push("/blogs");
          return isPublished ? "Published" : "Saved successfully";
        },
        error: isPublished ? "Unable to publish" : "Unable to save draft",
        finally: () => setOpenPublishRequest(false),
      }
    );

    // toast.loading("Publishing");
    // try {
    //   setOpenPublishRequest(false);
    //   const res = await newPost({
    //     title: blogTitle,
    //     content: blogContent,
    //     createdBy: "gaurav@sekhri.com",
    //     isPublished: true,
    //   });

    //   if (res) {
    //     toast.success("Published");
    //     router.push("/blogs");
    //   } else {
    //     toast.error("Unable to publish");
    //   }
    // } catch {
    //   toast.error("Unable to publish");
    // }
  };

  const handleUpdate = async () => {
    toast.promise(
      updatePost({
        postId: postData?.postId,
        title: blogTitle,
        content: blogContent,
      }),
      {
        loading: "Updating post...",
        success: () => {
          router.push("/blogs");
          return "Updated successfully";
        },
        error: "Unable to update post",
      }
    );
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
              <div className="max-w-[300px] break-all line-clamp-2 w-fit text-ellipsis">
                {blogTitle}
              </div>{" "}
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger>
                    <FiEdit2
                      className="ml-5 cursor-pointer hover:text-gray-700"
                      onClick={() => setShowTextDialog(true)}
                    />
                  </TooltipTrigger>
                  <TooltipContent>Edit Title</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
            <div className="flex items-center">
              {postData ? (
                <Button
                  variant="default"
                  onClick={() => handleUpdate()}
                  disabled={blogContent?.length == 0}
                >
                  Update
                </Button>
              ) : (
                <Button
                  variant="success"
                  onClick={() => showPublishRequest()}
                  disabled={blogContent?.length == 0}
                >
                  <MdOutlineCelebration className="mr-2 h-4 w-4" />
                  Publish
                </Button>
              )}

              {!postData && (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button className="ml-2 px-2" variant="ghost">
                      <BsThreeDotsVertical className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="flex items-center cursor-pointer"
                      disabled={blogContent?.length == 0}
                      onClick={() => handlePublish(false)}
                    >
                      <RiDraftLine />
                      <span className="ml-2">Save as draft</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex items-center cursor-pointer"
                      onClick={() =>
                        toast.info("This feature is under development.")
                      }
                    >
                      <MdOutlineWatchLater />
                      <span className="ml-2">Schedule Publish</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
          <BlogEditor
            initialText={blogContent}
            onChange={(val: any) => setBlogContent(val)}
          />
          <ConfirmDialog
            isOpen={openPublishRequest}
            text={"Are you sure you want to publish your post?"}
            onConfirm={() => handlePublish(true)}
            onClose={() => setOpenPublishRequest(false)}
          />
          <TextInputDialog
            headTitle="Blog Title"
            description="Give an attracting title to your post."
            isOpen={showTextDialog ?? false}
            defaultText={blogTitle}
            onClose={() => setShowTextDialog(false)}
            maxChars={70}
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
            <Skeleton className="pb-2 min-h-[110px] flex justify-center items-center"></Skeleton>
          </div>
        </>
      )}
    </>
  );
};

export default BlogForm;
