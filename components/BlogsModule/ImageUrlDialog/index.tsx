import React, { useState } from "react";
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

interface ImageDialog {
  isOpen: boolean;
  onClose: (val: any) => void;
}

const ImageUrlDialog = ({ isOpen, onClose }: ImageDialog) => {
  const [url, setUrl] = useState("");

  const openChange = () => {
    if (isOpen) {
      onClose(url);
      setTimeout(() => {
        setUrl("");
      }, 300);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={() => openChange()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Image Link</DialogTitle>
            <DialogDescription>
              Enter the url of image you want to insert.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                placeholder="https://"
                value={url}
                onChange={(e: any) => setUrl(e.target.value)}
                className="outline-0 focus:ring-0 focus:ring-offset-0"
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button type="button">Submit</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageUrlDialog;
