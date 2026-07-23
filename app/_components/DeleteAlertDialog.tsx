import { useState } from "react";

import { Trash2Icon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import { toast } from "sonner";

import { Spinner } from "@/components/ui/spinner";

// import { Button } from "@/components/ui/button";

type Props = {
  onDelete: () => Promise<void>;
};

function DeleteAlertDialog({ onDelete }: Props) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const confirmDelete = async function (
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    e.stopPropagation();

    try {
      setIsLoading(true);
      await onDelete();
      toast.success("Deleted successfully.", { position: "top-left" });
    } catch {
      toast.error("Failed to delete.", { position: "top-left" });
    } finally {
      setIsLoading(false);
      setOpen(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <DropdownMenuItem
        variant="destructive"
        className="w-full"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
      >
        Delete
      </DropdownMenuItem>

      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete Application?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete this application. Are you sure you want
            to do this?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen(false);
            }}
            className={`${isLoading ? "pointer-events-none" : "hover:cursor-pointer"}`}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={confirmDelete}
            className={`${isLoading ? "pointer-events-none" : "hover:cursor-pointer"}`}
          >
            {isLoading && <Spinner />}
            <span>Confirm</span>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteAlertDialog;

