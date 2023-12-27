import React from "react";
import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface confirm {
  isOpen: boolean;
  text: string;
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmDialog = ({ isOpen, text, onConfirm, onClose }: confirm) => {
  const handleClose = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={() => handleClose()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Alert</DialogTitle>
            <DialogDescription>
              <div className="my-5">{text}</div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-end gap-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="button" onClick={() => onConfirm()}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ConfirmDialog;
