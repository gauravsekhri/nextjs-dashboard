"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import Link from "@tiptap/extension-link";
import OrderedList from "@tiptap/extension-ordered-list";
import TextStyle from "@tiptap/extension-text-style";
import Placeholder from "@tiptap/extension-placeholder";
import { Color } from "@tiptap/extension-color";
import CodeBlock from "@tiptap/extension-code-block";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import { Skeleton } from "@/components/ui/skeleton";

const PostPreview = ({ content }: { content: string }) => {
  const editor: any = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
      Placeholder.configure({
        placeholder: "Write something …",
      }),
      Image,
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc ms-4",
        },
      }),
      OrderedList.configure({
        itemTypeName: "listItem",
        HTMLAttributes: {
          class: "list-decimal ms-4",
        },
      }),
      Document,
      Paragraph,
      Text,
      Heading,
      CodeBlock,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: content,
    editable: false,
    editorProps: {
      attributes: {
        class:
          "list-disc rounded-md border-none focus:border-none outline-0 min-h-[150px] bg-transparent p-4",
      },
    },
  });

  return (
    <>
      {!editor ? (
        <>
          <div className="flex flex-col gap-4 pt-6">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-[200px]" />
          </div>
        </>
      ) : (
        <EditorContent editor={editor} />
      )}
    </>
  );
};

export default PostPreview;
