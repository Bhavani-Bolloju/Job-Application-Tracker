import React from "react";

import { useState } from "react";

import { Trash2Icon, Ban } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";

// import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import { toast } from "sonner";

import { Spinner } from "@/components/ui/spinner";

type Props = {
  confirmLabel?: string;
  confirmVariant?: string;
  onConfirm: () => Promise<void>;
  successMsg: string;
  failureMsg: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

function ConfirmAlertDialog({
  onConfirm,
  title,
  description,
  confirmVariant = "default",
  confirmLabel = "delete",
  children
}: Props) {
  const [open, setOpen] = useState(false);

  const confirmHandler = async function (
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    e.stopPropagation();

    await onConfirm();
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia
            className={`bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive`}
          >
            {confirmVariant === "default" ?
              <Trash2Icon />
            : <Ban />}
          </AlertDialogMedia>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen(false);
            }}
            className="hover:cursor-pointer"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            variant={confirmVariant === "default" ? "destructive" : "default"}
            onClick={confirmHandler}
            className="hover:cursor-pointer"
          >
            <span className="capitalize">{confirmLabel}</span>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ConfirmAlertDialog;

