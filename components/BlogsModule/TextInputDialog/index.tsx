import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImageDialog } from "@/utils/interfaces";

const TextInputDialog = ({
  isOpen,
  headTitle,
  description,
  defaultText,
  placeHolder,
  maxChars,
  onClose,
  onSubmit,
}: ImageDialog) => {
  const [inputText, setInputText] = useState(defaultText ?? "");

  const openChange = () => {
    if (isOpen) {
      onClose();
      setTimeout(() => {
        setInputText("");
      }, 300);
    }
  };

  useEffect(() => {
    setInputText(defaultText ?? "");
  }, [isOpen]);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={() => openChange()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{headTitle}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                placeholder={placeHolder ?? ""}
                defaultValue={defaultText ?? ""}
                value={inputText}
                onChange={(e: any) => setInputText(e.target.value)}
                className="outline-0 focus:ring-0 focus:ring-offset-0 my-4"
              />
            </div>
          </div>
          <DialogFooter className="justify-end items-center gap-2">
            <DialogClose>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button
              type="button"
              onClick={() => onSubmit(inputText)}
              disabled={
                inputText?.length == 0 ||
                (maxChars ? inputText?.length > maxChars : true)
              }
            >
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TextInputDialog;
