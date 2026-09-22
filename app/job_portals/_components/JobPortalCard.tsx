import React from "react";

import { Trash, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

import { JobPortalProps } from "@/lib/types";
import ConfirmAlertDialog from "@/app/_components/ConfirmAlertDialog";

type Props = {
  onEdit: (value: JobPortalProps) => void;
  onDelete: (id: string) => void;
  jobPortal: JobPortalProps;
};

function JobPortalCard({ jobPortal, onEdit, onDelete }: Props) {
  const { name, link, description, id } = jobPortal;

  const handleDelete = async function () {
    await onDelete(id);
  };

  return (
    <li>
      <div>{name[0]}</div>
      <div>{name}</div>
      <div>{link}</div>
      {description && <div>{description}</div>}
      <div>
        <ConfirmAlertDialog
          onConfirm={handleDelete}
          title="Delete Job portal?"
          description="This Job portal will be permanently removed from your saved list."
          successMsg="Job portal deleted successfully."
          failureMsg="Failed to delete Job portal. Please try again."
        >
          <Button>
            <Trash />
          </Button>
        </ConfirmAlertDialog>
        <Button onClick={() => onEdit(jobPortal)}>
          <Pencil />
        </Button>
      </div>
    </li>
  );
}

export default JobPortalCard;

