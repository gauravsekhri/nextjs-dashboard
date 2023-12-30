"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

const PostPreview = ({ content }: { content: string }) => {
  const editor: any = useEditor({
    extensions: [StarterKit],
    content: content,
    editable: false,
    editorProps: {
      attributes: {
        class:
          "list-disc rounded-md border-none focus:border-none outline-0 min-h-[150px] bg-transparent p-4",
      },
    },
  });

  return <EditorContent editor={editor} />;
};

export default PostPreview;
