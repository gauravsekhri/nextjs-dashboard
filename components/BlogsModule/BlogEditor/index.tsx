"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
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
  LuAlignRight,
  LuAlignLeft,
  LuAlignCenter,
  LuUnderline,
  LuLink,
} from "react-icons/lu";
import { FaListOl } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa6";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
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
import { PiCodeBlockDuotone } from "react-icons/pi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ImageUrlDialog from "../ImageUrlDialog";
import TextInputDialog from "../TextInputDialog";
import { TextDialog } from "@/utils/interfaces";

interface BlogEditor {
  initialText: string;
  onChange: (val: any) => void;
}

const BlogEditor = ({ initialText, onChange }: BlogEditor) => {
  const [showImgDialog, setShowImgDialog] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [textDialogProps, setTextDialogProps] = useState<TextDialog>({
    isOpen: false,
    headTitle: "",
    description: "",
    defaultText: "",
    placeHolder: "",
    onClose: () => closeTextDialog(),
    onSubmit: () => {},
  });

  const closeTextDialog = () => {
    setTextDialogProps({
      isOpen: false,
      headTitle: "",
      description: "",
      defaultText: "",
      placeHolder: "",
      onClose: () => {},
      onSubmit: () => {},
    });
  };

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
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    content: initialText,
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

    // setShowImgDialog(true);

    setTextDialogProps({
      isOpen: true,
      headTitle: "Image Link",
      description: "Enter the url of image you want to insert.",
      placeHolder: "https://",
      onClose: () => closeTextDialog(),
      onSubmit: (val: any) => {
        if (val && val.length > 0) {
          editor?.chain().focus().setImage({ src: val }).run();
        }
        setShowImgDialog(false);
      },
    });
  };

  const addHyperLink = () => {
    const previousUrl = editor.getAttributes("link").href;

    setTextDialogProps({
      isOpen: true,
      headTitle: "Hyperlink",
      description: "Enter the hyperlink you want to add.",
      placeHolder: "https://",
      defaultText: previousUrl,
      onClose: () => closeTextDialog(),
      onSubmit: (val: any) => {
        if (val && val.length > 0) {
          editor
            .chain()
            .focus()
            .extendMarkRange("link")
            .setLink({ href: val })
            .run();
        }
        closeTextDialog();
      },
    });
  };

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const menuBarFunctions = [
    {
      label: "Bold",
      icon: <LuBold className="h-4 w-4" />,
      isPressed: editor?.isActive("bold"),
      clickFn: () => editor?.chain().focus().toggleBold().run(),
    },
    {
      label: "Italic",
      icon: <LuItalic className="h-4 w-4" />,
      isPressed: editor?.isActive("italic"),
      clickFn: () => editor?.chain().focus().toggleItalic().run(),
    },
    {
      label: "Left Align",
      icon: <LuAlignLeft className="h-4 w-4" />,
      isPressed: editor?.isActive({ textAlign: "left" }),
      clickFn: () => editor?.chain().focus().setTextAlign("left").run(),
    },

    {
      label: "Center Align",
      icon: <LuAlignCenter className="h-4 w-4" />,
      isPressed: editor?.isActive({ textAlign: "center" }),
      clickFn: () => editor?.chain().focus().setTextAlign("center").run(),
    },

    {
      label: "Right Align",
      icon: <LuAlignRight className="h-4 w-4" />,
      isPressed: editor?.isActive({ textAlign: "right" }),
      clickFn: () => editor?.chain().focus().setTextAlign("right").run(),
    },

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
      clickFn: () => editor?.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      label: "Bullet List",
      icon: <FaListUl className="h-4 w-4" />,
      isPressed: editor?.isActive("bulletList"),
      clickFn: () => editor?.chain().focus().toggleBulletList().run(),
    },
    {
      label: "Number List",
      icon: <FaListUl className="h-4 w-4" />,
      isPressed: editor?.isActive("orderedList"),
      clickFn: () => editor?.chain().focus().toggleOrderedList().run(),
    },
    {
      label: "Hyperlink",
      icon: <LuLink className="h-4 w-4" />,
      isPressed: editor?.isActive("link"),
      clickFn: () => addHyperLink(),
    },
    {
      label: "Code Block",
      icon: <PiCodeBlockDuotone className="h-4 w-4" />,
      isPressed: editor?.isActive("codeBlock"),
      clickFn: () => editor?.chain().focus().toggleCodeBlock().run(),
    },
    {
      label: "Undo",
      icon: <LuUndo2 className="h-4 w-4" />,
      isPressed: false,
      clickFn: () => editor?.chain().focus().undo().run(),
    },
    {
      label: "Redo",
      icon: <LuRedo2 className="h-4 w-4" />,
      isPressed: false,
      clickFn: () => editor?.chain().focus().redo().run(),
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

          <TextInputDialog {...textDialogProps} />

          {/* <SeoEditorDialog isOpen={true} /> */}
        </>
      )}
      {/* <EditorProvider extensions={extensions} content={initialText}>
        T
      </EditorProvider> */}
    </>
  );
};

export default BlogEditor;
