"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import {
  LuHeading2,
  LuBold,
  LuImage,
  LuItalic,
  LuUndo2,
  LuRedo2,
} from "react-icons/lu";
import { FaListOl } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa6";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { PiCodeBlockDuotone } from "react-icons/pi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ImageUrlDialog from "../ImageUrlDialog";

interface BlogEditor {
  initialText: string;
  onChange: (val: any) => void;
}

const BlogEditor = ({ initialText, onChange }: BlogEditor) => {
  const [showImgDialog, setShowImgDialog] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
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
  ];

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
    ],
    content: initialText,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "list-disc rounded-md border-none focus:border-none outline-0 min-h-[150px] bg-transparent p-4",
      },
    },
  });

  const addImage = () => {
    // const url = window.prompt("URL");

    // if (url) {
    //   editor?.chain().focus().setImage({ src: url }).run();
    // }

    setShowImgDialog(true);
  };

  const menuBarFunctions = [
    {
      label: "Image",
      icon: <LuImage className="h-4 w-4" />,
      isPressed: editor?.isActive("image"),
      clickFn: () => addImage(),
    },
    {
      label: "Heading",
      icon: <LuHeading2 className="h-4 w-4" />,
      isPressed: editor?.isActive("heading"),
      clickFn: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      label: "Bold",
      icon: <LuBold className="h-4 w-4" />,
      isPressed: editor?.isActive("bold"),
      clickFn: () => editor?.chain().focus().toggleBold().run(),
    },
    {
      label: "Italic",
      icon: <LuItalic className="h-4 w-4" />,
      isPressed: editor?.isActive("heading"),
      clickFn: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      label: "Bullet List",
      icon: <FaListUl className="h-4 w-4" />,
      isPressed: editor?.isActive("bulletList"),
      clickFn: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      label: "Number List",
      icon: <FaListUl className="h-4 w-4" />,
      isPressed: editor?.isActive("orderedList"),
      clickFn: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
      label: "Code Block",
      icon: <PiCodeBlockDuotone className="h-4 w-4" />,
      isPressed: editor?.isActive("orderedList"),
      clickFn: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
      label: "Undo",
      icon: <LuUndo2 className="h-4 w-4" />,
      isPressed: editor?.isActive("orderedList"),
      clickFn: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
      label: "Redo",
      icon: <LuRedo2 className="h-4 w-4" />,
      isPressed: editor?.isActive("orderedList"),
      clickFn: () => editor.chain().focus().toggleOrderedList().run(),
    },
  ];

  if (!editor) {
    return null;
  }

  return (
    <>
      {editor && isMounted && (
        <>
          <div className="border border-gray-300 dark:border-gray-700 bg-transparent rounded-sm flex my-10 items-center p-2 gap-2">
            {menuBarFunctions.map((ele: any, ei: any) => (
              <TooltipProvider>
                <Tooltip key={ei} delayDuration={0}>
                  <TooltipTrigger>
                    {" "}
                    <Toggle
                      size="sm"
                      pressed={ele.isPressed}
                      onPressedChange={() => ele.clickFn()}
                    >
                      {ele.icon}
                    </Toggle>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div>{ele?.label}</div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
          <EditorContent editor={editor} />
          <ImageUrlDialog
            isOpen={showImgDialog ?? false}
            onClose={(val: any) => {
              if (val && val.length > 0) {
                editor?.chain().focus().setImage({ src: val }).run();
              }
              setShowImgDialog(false);
            }}
          />
        </>
      )}
      {/* <EditorProvider extensions={extensions} content={initialText}>
        T
      </EditorProvider> */}
    </>
  );
};

export default BlogEditor;
