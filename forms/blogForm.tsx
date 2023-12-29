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
import { LuSettings } from "react-icons/lu";
import { Skeleton } from "@/components/ui/skeleton";
import ConfirmDialog from "@/components/ConfirmDialog";
import { toast } from "sonner";
import { newPost, updatePost } from "@/actions/postsActions";
import { useRouter } from "next/navigation";
import { FiEdit2 } from "react-icons/fi";
import TextInputDialog from "@/components/BlogsModule/TextInputDialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import KeywordsDialog from "@/components/BlogsModule/KeywordsDialog";

const BlogForm = ({ session, postData }: { session: any; postData?: any }) => {
  const router = useRouter();

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [blogTitle, setBlogTitle] = useState<string>("Untitled Post");
  const [blogImage, setBlogImage] = useState<string>(
    "https://www.ochch.org/wp-content/themes/mast/images/empty-photo.jpg"
  );
  const [blogContent, setBlogContent] = useState<string>("");
  const [metaDescription, setMetaDescription] = useState<string>("");
  const [metaKeywords, setMetaKeywords] = useState<Array<string>>([]);
  const [openPublishRequest, setOpenPublishRequest] = useState<boolean>(false);
  const [showKeywordDialog, setShowKeywordDialog] = useState<boolean>(false);
  const [showTextDialog, setShowTextDialog] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    if (postData) {
      setBlogTitle(postData?.title);
      setBlogContent(postData?.content);
    }
  }, []);

  const showPublishRequest = () => {
    setOpenPublishRequest(true);
  };

  const handlePublish = async (isPublished: boolean) => {
    toast.promise(
      newPost({
        title: blogTitle,
        img: blogImage,
        content: blogContent,
        createdBy: session?.user?.email ?? "",
        isPublished: isPublished,
        metaDescription: metaDescription,
        metaKeywords: metaKeywords,
      }),
      {
        loading: isPublished ? "Publishing..." : "Saving draft...",
        success: () => {
          router.push("/dashboard/blogs");
          return isPublished ? "Published" : "Saved successfully";
        },
        error: isPublished ? "Unable to publish" : "Unable to save draft",
        finally: () => setOpenPublishRequest(false),
      }
    );
  };

  const handleUpdate = async () => {
    toast.promise(
      updatePost({
        postId: postData?.postId,
        title: blogTitle,
        content: blogContent,
        metaDescription: metaDescription,
        metaKeywords: metaKeywords,
      }),
      {
        loading: "Updating post...",
        success: () => {
          router.push("/dashboard/blogs");
          return "Updated successfully";
        },
        error: "Unable to update post",
      }
    );
  };

  return (
    <>
      {isMounted ? (
        <>
          <div className="flex justify-between items-center mb-14">
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

          <Tabs defaultValue="account" className="w-full ">
            <TabsList className="grid w-full grid-cols-2 mb-7 h-[100px] dark:bg-gray-500">
              <TabsTrigger value="account">
                <div className="flex items-center gap-2">
                  <FiEdit2 />
                  <span>Editor</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="password">
                {" "}
                <div className="flex items-center gap-2">
                  <LuSettings />
                  <span>Settings</span>
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <BlogEditor
                initialText={blogContent}
                onChange={(val: any) => setBlogContent(val)}
              />
            </TabsContent>
            <TabsContent value="password">
              <div className="my-10 p-2">
                <div className="text-lg font-bold mb-6">Display Properties</div>
                <div className="mb-8">
                  <div className="text-md mb-2">Post Title</div>
                  <Input
                    type="text"
                    value={blogTitle}
                    onChange={(e: any) => setBlogTitle(e.target.value)}
                  />
                </div>
                <div className="mb-10">
                  <div className="text-md mb-2">Post Image Link</div>
                  <Input
                    type="text"
                    value={blogImage}
                    onChange={(e: any) => setBlogImage(e.target.value)}
                    placeholder="https://"
                  />
                </div>
                <Separator />
                <div className="text-lg font-bold mt-8 mb-6">
                  SEO Properties
                </div>
                <div className="mb-8">
                  <div className="text-md mb-2">Meta Description</div>
                  <Input
                    type="text"
                    value={metaDescription}
                    onChange={(e: any) => setMetaDescription(e.target.value)}
                  />
                </div>
                <div className="mb-8">
                  <div className="text-md mb-2">Meta Keywords</div>
                  <Input
                    type="text"
                    value={metaKeywords.join(", ")}
                    readOnly
                    onClick={() => setShowKeywordDialog(true)}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

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

          <KeywordsDialog
            isOpen={showKeywordDialog}
            defaultValues={metaKeywords}
            onSubmission={(val: any) => setMetaKeywords(val)}
            onClose={() => setShowKeywordDialog(false)}
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
