import React from "react";

import { Trash, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

import { JobPortalProps } from "@/lib/types";
import ConfirmAlertDialog from "@/app/_components/ConfirmAlertDialog";

import { ExternalLink } from "lucide-react";

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
    <li className="grid grid-cols-[45px_1fr_auto_auto] grid-rows-2 gap-x-5 gap-y-1 pb-5 ">
      <div className="col-span-1 col-start-1 row-start-1 row-span-2 border rounded-sm flex items-center justify-center text-2xl font-semibold  shadow-md ">
        {name.trim()[0]}
      </div>

      <div className="col-start-2 col-span-1 font-medium ">
        <span>{name}</span>
        {description && (
          <span className="text-text-muted"> {`(${description})`} </span>
        )}
      </div>

      <a className="col-start-2 col-span-1 row-start-2 row-span-1 text-sm  text-accent-3 flex gap-2 items-center" href={link} target="_blank">
        <span>{link}</span>
        <ExternalLink className="size-4" />
      </a>

      <ConfirmAlertDialog
        onConfirm={handleDelete}
        title="Delete Job portal?"
        description="This Job portal will be permanently removed from your saved list."
        successMsg="Job portal deleted successfully."
        failureMsg="Failed to delete Job portal. Please try again."
      >
        <Button className="col-start-3 col-end-4 row-start-1 row-end-3 text-center bg-red-100 hover:bg-red-200 hover:cursor-pointer">
          <Trash className="text-red-500" />
        </Button>
      </ConfirmAlertDialog>
      <Button
        onClick={() => onEdit(jobPortal)}
        className="col-start-4 col-span-1 row-start-1 row-span-2 text-center bg-accent-3/10 hover:bg-accent-3/20 hover:cursor-pointer"
      >
        <Pencil className="text-accent-3" />
      </Button>
    </li>
  );
}

export default JobPortalCard;

{
  /* <li className="grid grid-cols-[45px_1fr_auto] grid-rows-2 gap-x-5 gap-y-1 pb-5 ">
      <div className="col-span-1 col-start-1 row-start-1 row-span-2 border rounded-sm flex items-center justify-center text-2xl font-semibold  shadow-md ">
        {(company.trim())[0]}
      </div>
      <div className="col-start-2 col-span-1 font-medium">{role}</div>
      <div className="col-start-2 col-span-1 row-start-2 row-span-1 text-sm text-text-muted">
        {company}
      </div>
      <div className={`col-start-3 col-span-1 row-start-1 text-center`}>
        <Badge
          className={`${cardColors[status]["icon-text"]} ${cardColors[status]["icon-bg"]} font-medium`}
        >
          {status[0] + status.slice(1).toLowerCase()}
        </Badge>
      </div>

      <div className="col-start-3 row-start-2 text-sm text-text-muted">{formatAppliedDate}</div>
    </li> */
}

